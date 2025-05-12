import { rotate } from "three/webgpu";

document.addEventListener("DOMContentLoaded", () => {
  const commercialHpDef = document.querySelector("#commercialHpDef");
  const paginationItems = document.querySelectorAll(".cmhp-def__pagination > div");

  const defActiveScrollHeight = commercialHpDef.offsetHeight;

  // 슬라이드
  var cmhpDefFadeSwiper = new Swiper(".cmhp-def__fade-slider", {
    effect: "fade",
    loop: true,
    loopedSlides: 3,
    allowTouchMove: false,
    speend: 800,
    autoplay: {
      delay: 3200,
    },
    on: {
      realIndexChange: function () {
        const activeIndex = this.realIndex;
        const paginations = document.querySelectorAll(".cmhp-def__pagination > div");

        paginations.forEach((el, index) => {
          if (index === activeIndex) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      },
    },
  });

  // pagination 클릭하면 슬라이드 이동
  paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      cmhpDefFadeSwiper.slideToLoop(index, 800);
    });
  });

  // 아래 배경색과 자연스럽게 이어지도록 스크롤시 경색 주기
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.querySelector(".bg-change"),
      start: "-5% bottom",
      end: `+=${defActiveScrollHeight * 0.2}`,
      scrub: true,
    },
  });
  timeline.to(commercialHpDef, {
    duration: 1,
    ease: "power2.inOut",
    background: "rgba(0, 0, 0, 1)",
  });

  // 타이틀 split
  const defTextSplit = new SplitText("#commercialHpDef .split--chars", {
    type: "chars, words",
  });
  gsap.set(defTextSplit.chars, { opacity: 0, y: -30, rotate: 10 });
  gsap.to(defTextSplit.chars, {
    opacity: 1,
    y: 0,
    rotate: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#commercialHpDef .split--chars",
      start: "top 80%",
      scrub: true,
    },
  });

  // 슬라이드 fade up
  const defSlide = commercialHpDef.querySelector(".cmhp-def__content");
  gsap.set(defSlide, { opacity: 0, y: 80 });
  gsap.to(defSlide, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: defSlide,
      start: "20% bottom",
      end: "100% bottom",
      scrub: true,
    },
  });

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    defActiveScrollHeight = commercialHpDef.offsetHeight;
  });
});
