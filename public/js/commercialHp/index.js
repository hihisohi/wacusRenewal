document.addEventListener("DOMContentLoaded", () => {
  // const lenis = new Lenis();
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }
  // requestAnimationFrame(raf);
  // lenis.on("scroll", ScrollTrigger.update);
  // // point section (section-2) marquee 애니메이션
  // function playMarquee() {
  //   const marquees = document.querySelectorAll(".marquee");
  //   // track 안에서 흘러갈 요소 복제
  //   marquees.forEach((ele) => {
  //     const track = ele.querySelector(".marquee-track");
  //     const item = ele.querySelector(".marquee-item");
  //     const cloneCount = Math.ceil((ele.clientWidth * 3) / item.clientWidth);
  //     for (let i = 0; i < cloneCount; i++) {
  //       const clone = item.cloneNode(true);
  //       track.appendChild(clone);
  //     }
  //   });
  //   // 왼쪽, 오른쪽 marquee 각각
  //   const itemWidth1 = document.querySelector(".marquee1 .marquee-item").clientWidth;
  //   const itemWidth2 = document.querySelector(".marquee2 .marquee-item").clientWidth;
  //   gsap.set(".left .marquee-track", { marginLeft: -itemWidth1 });
  //   gsap.set(".right .marquee-track", { marginRight: -itemWidth2 });
  //   const mod1 = gsap.utils.wrap(-itemWidth1, itemWidth1);
  //   const mod2 = gsap.utils.wrap(-itemWidth2, itemWidth2);
  //   function createMarquee(selector, distance, mod) {
  //     return gsap.to(selector, {
  //       duration: 10,
  //       ease: "none",
  //       x: distance,
  //       modifiers: {
  //         x: (x) => mod(parseFloat(x)) + "px",
  //       },
  //       repeat: -1,
  //     });
  //   }
  //   // 스크롤에 따른 속도, 방향 설정
  //   let direction = -1;
  //   let master = gsap
  //     .timeline()
  //     .add(createMarquee(".left .marquee-track", "-=" + itemWidth1 * 2, mod1), 0)
  //     .add(createMarquee(".right .marquee-track", "+=" + itemWidth2 * 2, mod2), 0);
  //   let tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });
  //   const clampTimeScale = gsap.utils.clamp(1, 6);
  //   ScrollTrigger.create({
  //     start: 0,
  //     end: "max",
  //     onUpdate: (self) => {
  //       const velocity = self.getVelocity();
  //       const newDirection = velocity > 0 ? -1 : 1;
  //       if (newDirection !== direction) {
  //         direction = newDirection;
  //         master.kill();
  //         master = gsap
  //           .timeline()
  //           .add(createMarquee(".left .marquee-track", (direction > 0 ? "+=" : "-=") + itemWidth1, mod1), 0)
  //           .add(createMarquee(".right .marquee-track", (direction > 0 ? "-=" : "+=") + itemWidth2, mod2), 0);
  //         tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });
  //       }
  //       const newSpeed = clampTimeScale(Math.abs(velocity / 200));
  //       master.timeScale(newSpeed);
  //       tween.invalidate().restart();
  //     },
  //   });
  // }
  // playMarquee();

  function createSeamlessMarquee({
    wrapperSelector,
    trackSelector = ".marquee-track",
    itemSelector = ".marquee-item",
    speed = 50, // px per second
    direction = 1, // 1 = 정방향, -1 = 역방향
  }) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const track = wrapper.querySelector(trackSelector);
    if (!track) return;

    // 원본 아이템을 복제하여 필요한 개수만큼 붙임
    const content = track.querySelector(itemSelector);
    const marqueeEle = content.closest(".marquee");

    const cloneCount = Math.ceil((marqueeEle.clientWidth * 2) / content.clientWidth);

    for (let i = 1; i < cloneCount; i++) {
      const clone = content.cloneNode(true); // 복제
      track.appendChild(clone); // 복제된 내용 붙이기
    }

    // track의 총 길이 계산 (복제된 아이템까지)
    const distance = track.offsetWidth;
    const duration = distance / speed;

    // 애니메이션 설정
    const tl = gsap.timeline({ repeat: -1, ease: "none" });

    tl.to(track.children, {
      xPercent: direction * -100, // 아이템을 왼쪽(혹은 오른쪽)으로 이동
      duration: duration,
      ease: "none",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // 끝 부분에서 다시 처음으로 자연스럽게 이어지게
      },
    });

    return tl;
  }

  // 왼쪽으로 흐르는 marquee1 (복제된 내용도 포함)
  const marquee1 = createSeamlessMarquee({
    wrapperSelector: ".marquee1",
    speed: 500,
    direction: 1,
  });

  // 오른쪽으로 흐르는 marquee2
  const marquee2 = createSeamlessMarquee({
    wrapperSelector: ".marquee2",
    speed: 400,
    direction: -1,
  });
});
