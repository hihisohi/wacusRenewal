import { rotate } from "three/webgpu";

document.addEventListener("DOMContentLoaded", () => {
  const commercialHpPoint = document.querySelector("#commercialHpIntro");
  const activeScrollHeight = commercialHpPoint.offsetHeight;

  gsap.registerPlugin(SplitText);

  // 텍스트 등장 효과
  let split, animation;

  split && split.revert();
  animation && animation.revert();
  split = SplitText.create(".split--char", { type: "chars,words,lines" });

  animation && animation.revert();
  animation = gsap.from(split.chars, {
    scale: 0.6,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.06,
  });

  // 홈페이지 첫번째 섹션 고정
  ScrollTrigger.create({
    trigger: commercialHpPoint,
    start: "bottom bottom",
    end: `+=${activeScrollHeight}`,
    pin: true,
    pinSpacing: false,
    markers: true,
  });

  // 페럴럭스
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "top top",
      end: "150% top",
      scrub: true,
    },
  });
  gsap.utils.toArray(".parallax").forEach((layer) => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, { y: movement, ease: "none" }, 0);
    tl.to(layer, { opacity: movement / 200, ease: "none" }, 0);
  });

  // Lenis + ScrollTrigger 연동
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  lenis.on("scroll", ScrollTrigger.update);

  let speed = 1;
  let direction = 1;

  const marquees = document.querySelectorAll(".marquee");

  // 모든 marquee에 대해 동작
  marquees.forEach((ele) => {
    // 요소 복제
    const track = ele.querySelector(".marquee-track");
    const item = ele.querySelector(".marquee-item");

    const cloneCount = Math.ceil((ele.clientWidth * 3) / item.clientWidth);

    for (let i = 0; i < cloneCount; i++) {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    }

    // 무한 롤링
    const totalWidth = ele.querySelector(".marquee-track").offsetWidth;
    const mod = gsap.utils.wrap(0, totalWidth);

    // gsap.set(track, {
    //   x: `+=${speed * direction}`,
    // });

    gsap.to(track, {
      x: "+=0.1", // dummy 값
      duration: 1,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: (x) => mod(parseFloat(x) + direction * speed) + "px",
      },
    });
  });

  // 스크롤 방향 및 속도 감지
  let lastScrollY = 0;
  let speedMultiplier = 1;

  lenis.on("scroll", ({ scroll }) => {
    const deltaY = scroll - lastScrollY;

    // 방향 바꾸기
    if (deltaY > 0) {
      direction = -1;
    } else if (deltaY < 0) {
      direction = 1;
    }

    // 속도 약간 증가 → 원래대로 복귀
    speedMultiplier = 5;
    clearTimeout(window._marqueeTimeout);
    window._marqueeTimeout = setTimeout(() => {
      speedMultiplier = 1;
    }, 300);

    speed = 0.5 * speedMultiplier;
    lastScrollY = scroll;
  });

  const itemWidth1 = document.querySelector(
    ".marquee1 .marquee-item"
  ).clientWidth;
  const itemWidth2 = document.querySelector(
    ".marquee2 .marquee-item"
  ).clientWidth;

  gsap.set(".left .marquee-track", {
    marginLeft: -itemWidth1,
  });

  gsap.set(".right .marquee-track", {
    marginRight: -itemWidth2,
  });

  let mod1 = gsap.utils.wrap(0, itemWidth1);
  let mod2 = gsap.utils.wrap(0, itemWidth2);

  function marquee(which, time, distance, mod) {
    return gsap.to(which, {
      duration: time,
      ease: "none",
      x: distance,
      modifiers: {
        x: (x) => mod(parseFloat(x)) + "px",
      },
      repeat: -1,
    });
  }

  // 초기 방향은 아래로
  let direction22 = 1;

  let master = gsap
    .timeline()
    .add(marquee(".left .marquee-track", 10, "-=" + itemWidth1, mod1), 0)
    .add(marquee(".right .marquee-track", 10, "+=" + itemWidth2, mod2), 0);

  // marquee 속도 제어용 tween
  let tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });

  let timeScaleClamp = gsap.utils.clamp(1, 6);

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const velocity = self.getVelocity();

      const newDirection = velocity > 0 ? -1 : 1;

      // 방향 바뀌면 timeline 방향 재설정
      if (newDirection !== direction22) {
        direction22 = newDirection;

        master.kill(); // 기존 타임라인 제거
        master = gsap
          .timeline()
          .add(
            marquee(
              ".left .marquee-track",
              10,
              (direction22 > 0 ? "+=" : "-=") + itemWidth1,
              mod1
            ),
            0
          )
          .add(
            marquee(
              ".right .marquee-track",
              10,
              (direction22 > 0 ? "-=" : "+=") + itemWidth2,
              mod2
            ),
            0
          );
      }

      // 스크롤 속도에 따라 속도 반영
      master.timeScale(timeScaleClamp(Math.abs(velocity / 200)));
      tween.invalidate().restart();
    },
  });
});
