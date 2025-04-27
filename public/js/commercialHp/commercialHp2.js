document.addEventListener("DOMContentLoaded", () => {
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

  const itemWidth1 = document.querySelector(".marquee1 .marquee-item").clientWidth;
  const itemWidth2 = document.querySelector(".marquee2 .marquee-item").clientWidth;

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
          .add(marquee(".left .marquee-track", 10, (direction22 > 0 ? "+=" : "-=") + itemWidth1, mod1), 0)
          .add(marquee(".right .marquee-track", 10, (direction22 > 0 ? "-=" : "+=") + itemWidth2, mod2), 0);
      }

      // 스크롤 속도에 따라 속도 반영
      master.timeScale(timeScaleClamp(Math.abs(velocity / 200)));
      tween.invalidate().restart();
    },
  });

  //
  const commercialHpPoint = document.querySelector("#commercialHpPoint");
  const bottomImages = commercialHpPoint.querySelector(".cmhp-point__images");
  const bottomArea = commercialHpPoint.querySelector(".cmhp-point__bottom-area");
  const fullStickyContainer = document.querySelector("#commercialHpPoint .full-sticky-container");
  const activeScrollHeight = fullStickyContainer.offsetHeight * 4;

  // 하단 이미지 fade in, scale up (실행 구간 0 ~ 20%)
  const bottomImageAni = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "top top",
      end: `+=${activeScrollHeight * 0.2}`,
      scrub: true,
    },
  });
  bottomImageAni.to(bottomImages, {
    opacity: 1,
    width: "100%",
    height: "100%",
    borderRadius: "0",
    duration: 0.5,
    ease: "power1.inOut",
  });

  // 하단 이미지 fade out, scale down (실행 구간 80 ~ 100%)
  const bottomImageAni2 = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "320% top",
      end: `+=${activeScrollHeight * 0.2}`,
      scrub: true,
    },
  });
  bottomImageAni2.to(bottomImages, {
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  });

  // 인디케이터 프로그레스 바 (실행 구간 10 ~ 100% / 3단계)
  const indicatorItems = document.querySelectorAll(".cmhp-point__indicator .indicator-item");
  const imageItems = document.querySelectorAll(".cmhp-point__images .image-item");
  const progressBar = document.querySelector(".cmhp-point__indicator .progress-bar-fill");

  let currentStep = 0;

  ScrollTrigger.create({
    trigger: fullStickyContainer,
    start: "top top",
    end: `+=${activeScrollHeight}`,
    pin: commercialHpPoint,
    pinSpacing: true,
    scrub: 0.5,
    // markers: true,
    onLeaveBack: () => {
      indicatorItems.forEach((item) => {
        item.classList.remove("active");
      });
    },
    onUpdate: (self) => {
      const progress = self.progress; // 0 ~ 1
      const direction = self.direction; // 1: down, -1: up
      let newStep;

      if (0.1 < progress && progress <= 0.4) {
        newStep = 1;
      } else if (0.4 < progress && progress <= 0.7) {
        newStep = 2;
      } else if (0.7 < progress && progress <= 1) {
        newStep = 3;
      }

      if (newStep !== currentStep) {
        const tl = gsap.timeline();

        indicatorItems.forEach((item) => {
          item.classList.remove("active");
        });
        imageItems.forEach((item) => {
          item.classList.remove("active");
        });

        if (newStep) {
          indicatorItems[newStep - 1].classList.add("active");
          imageItems[newStep - 1].classList.add("active");
        }

        // DOWNWARD SCROLL
        if (direction === 1) {
          switch (newStep) {
            case 1:
              tl.to(progressBar, { right: "100%", duration: 0.5 }).to(progressBar, { left: "0%", duration: 0.5 });
              break;
            case 2:
              tl.to(progressBar, { right: "50%", duration: 0.5 }).to(progressBar, { left: "50%", duration: 0.5 });
              break;
            case 3:
              tl.to(progressBar, { right: "0%", duration: 0.5 }).to(progressBar, { left: "100%", duration: 0.5 });
              break;
          }
        } // UPWARD SCROLL
        else {
          switch (newStep) {
            case 1:
              tl.to(progressBar, { left: "0%", duration: 0.5 }).to(progressBar, { right: "100%", duration: 0.5 });
              break;
            case 2:
              tl.to(progressBar, { left: "50%", duration: 0.5 }).to(progressBar, { right: "50%", duration: 0.5 });
              break;
            case 3:
              tl.to(progressBar, { left: "100%", duration: 0.5 }).to(progressBar, { right: "0%", duration: 0.5 });
              break;
          }
        }

        currentStep = newStep;
        console.log(`Step ${currentStep} 도착`);
      }
    },
  });

  // 하단 이미지 스크롤에 따른 업데이트 (실행 구간 10 ~ 100% / 3단계)
  // const imageOverSlideAni = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: commercialHpPoint,
  //     start: "200% bottom",
  //     end: `+=${activeScrollHeight * 0.75}`,
  //     scrub: true,
  //   },
  // });

  // gsap.utils.toArray(".cmhp-point__images .image-item").forEach((item, idx) => {
  //   if (idx === 0) return;

  //   imageOverSlideAni.to(item, {
  //     y: -bottomArea.offsetHeight * idx,
  //     ease: "none",
  //   });
  // });
});
