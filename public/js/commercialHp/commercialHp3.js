document.addEventListener("DOMContentLoaded", () => {
  const commercialHpNeed = document.querySelector("#commercialHpNeed");

  const activeScrollHeight = commercialHpNeed.offsetHeight * 1.5;

  const scrollingText = commercialHpNeed.querySelector(".cmhp-need__scrolling-text");
  const textItems = scrollingText.querySelectorAll(".text-item");

  const imageItem = commercialHpNeed.querySelector(".cmhp-need__images > div");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpNeed,
      start: "top top",
      end: `+=${activeScrollHeight}`,
      scrub: true, // ★ 스크롤에 부드럽게 따라오게
      pin: true,
      pinSpacing: true,
    },
  });

  tl.to(scrollingText, { y: "-49.995%", ease: "power3.inOut" }).to(scrollingText, {
    y: "-83.325%",
    ease: "power3.inOut",
  });

  ScrollTrigger.create({
    trigger: commercialHpNeed,
    start: "top top",
    end: `+=${activeScrollHeight}`,
    onUpdate: (self) => {
      const progress = self.progress;

      textItems.forEach((item) => item.classList.remove("on"));

      if (progress <= 0.33) {
        textItems[0].classList.add("on");
        imageItem.style.backgroundImage = 'url("/public/img/commercialHp/section3_bg01.png")';
        imageItem.style.backgroundPosition = "105% 0";
      } else if (progress <= 0.66) {
        textItems[1].classList.add("on");
        imageItem.style.backgroundImage = 'url("/public/img/commercialHp/section3_bg02.png")';
        imageItem.style.backgroundPosition = "-20% 100%";
      } else {
        textItems[2].classList.add("on");
        imageItem.style.backgroundImage = 'url("/public/img/commercialHp/section3_bg03.png")';
        imageItem.style.backgroundPosition = "100% 50%";
      }
    },
  });
});
