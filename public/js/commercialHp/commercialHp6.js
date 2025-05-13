document.addEventListener("DOMContentLoaded", () => {
  const commercialHpMethod = document.querySelector("#commercialHpMethod");

  const MethodActiveScrollHeight = commercialHpMethod.offsetHeight;

  // polygon slide
  const polygonItems = commercialHpMethod.querySelectorAll(
    ".cmhp-method__polygon-text > div"
  );
  const polygonDots = commercialHpMethod.querySelectorAll(
    ".cmhp-method__polygon-dot .polygon-dot"
  );

  let current = 0;

  function activateSlide() {
    polygonItems.forEach((item, index) => {
      item.classList.toggle("active", index === current);
    });
    polygonDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === current);
    });
    current = (current + 1) % polygonItems.length;
  }
  activateSlide();
  setInterval(activateSlide, 2400);

  // 타이틀 split
  const methodTextSplit = new SplitText("#commercialHpMethod .split--words", {
    type: "chars, words",
  });
  gsap.set(methodTextSplit.words, { opacity: 0, x: -40 });
  gsap.to(methodTextSplit.words, {
    opacity: 1,
    x: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#commercialHpMethod .split--words",
      start: "top 80%",
      end: "bottom 10%",
      scrub: true,
    },
  });

  // polygon 슬라이드 fade up
  const methodSlide = commercialHpMethod.querySelector(".cmhp-method__content");
  gsap.set(methodSlide, { opacity: 0, y: 80 });
  gsap.to(methodSlide, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: methodSlide,
      start: "20% bottom",
      end: "100% bottom",
      scrub: true,
    },
  });

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    MethodActiveScrollHeight = commercialHpMethod.offsetHeight;
  });
});
