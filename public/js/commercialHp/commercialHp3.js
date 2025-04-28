document.addEventListener("DOMContentLoaded", () => {
  const commercialHpNeed = document.querySelector("#commercialHpNeed");

  const needActiveScrollHeight = commercialHpNeed.offsetHeight * 3;

  const scrollingText = commercialHpNeed.querySelector(".cmhp-need__scrolling-text");
  const needTextItems = scrollingText.querySelectorAll(".text-item");
  const needImageItems = commercialHpNeed.querySelectorAll(".cmhp-need__images .image-item");

  const needScrollingTextAni = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpNeed,
      start: "top top",
      end: `+=${needActiveScrollHeight}`,
      scrub: true, // ★ 스크롤에 부드럽게 따라오게
      pin: true,
      pinSpacing: true,
    },
  });

  needScrollingTextAni.to(scrollingText, { y: "-49.995%", ease: "power3.inOut" }).to(scrollingText, {
    y: "-83.325%",
    ease: "power3.inOut",
  });

  ScrollTrigger.create({
    trigger: commercialHpNeed,
    start: "top top",
    end: `+=${needActiveScrollHeight}`,
    onLeaveBack: () => {
      needTextItems.forEach((item) => item.classList.remove("on"));
      needImageItems.forEach((item) => item.classList.remove("on"));
    },
    onLeave: () => {
      needTextItems.forEach((item) => item.classList.remove("on"));
      needImageItems.forEach((item) => item.classList.remove("on"));
    },
    onUpdate: (self) => {
      const progress = self.progress;

      needTextItems.forEach((item) => item.classList.remove("on"));
      needImageItems.forEach((item) => item.classList.remove("on"));

      if (progress <= 0.33) {
        needTextItems[0].classList.add("on");
        needImageItems[0].classList.add("on");
      } else if (progress <= 0.66) {
        needTextItems[1].classList.add("on");
        needImageItems[1].classList.add("on");
      } else {
        needTextItems[2].classList.add("on");
        needImageItems[2].classList.add("on");
      }
    },
  });

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    needActiveScrollHeight = commercialHpNeed.offsetHeight;
  });
});
