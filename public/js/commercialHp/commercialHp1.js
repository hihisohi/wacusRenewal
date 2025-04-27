document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  const commercialHpPoint = document.querySelector("#commercialHpIntro");
  const pinWrapper = commercialHpPoint.querySelector(".pin-wrapper");

  // 홈페이지 첫번째 섹션 고정
  const activeScrollHeight = commercialHpPoint.offsetHeight;

  ScrollTrigger.create({
    trigger: pinWrapper,
    start: "top top",
    end: `+=${activeScrollHeight}`,
    pin: true,
    pinSpacing: false,
    // markers: true,
  });

  // 요소들 등장 효과 (처음 보일때만 한번 동작)
  const personImageLeft = document.querySelector('.cmhp-intro__person[data-direction="left"]');
  const personImageRight = document.querySelector('.cmhp-intro__person[data-direction="right"]');

  function initSplitText() {
    let splitChars, splitLines, animation;

    splitChars && splitChars.revert();
    splitLines && splitLines.revert();
    animation && animation.revert();

    splitChars = SplitText.create("#commercialHpIntro .split--chars", { type: "chars" });
    splitLines = SplitText.create("#commercialHpIntro .split--lines", { type: "lines" });

    const tl = gsap.timeline();

    tl.from(splitChars.chars, {
      scale: 0.6,
      opacity: 0,
      duration: 0.8,
      ease: "power4",
      stagger: 0.08,
      onComplete: () => {
        console.log("Character animation complete!");
      },
    })
      .from(
        [personImageLeft, personImageRight],
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.4,
          onComplete: () => {
            console.log("Person elements fade-in complete!");
          },
        },
        "-=1.0"
      )
      .from(
        splitLines.lines,
        {
          y: 5,
          scale: 0.96,
          opacity: 0,
          duration: 1.6,
          ease: "power4",
          stagger: 0.4,
          onComplete: () => {
            console.log("Line animation complete!");
          },
        },
        "-=0.6"
      );
  }
  initSplitText();

  // 페럴럭스
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "top top",
      end: "100% top",
      scrub: true,
      markers: true,
    },
  });

  function updateParallax() {
    gsap.utils.toArray(".parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: movement, ease: "none" }, 0);

      if (layer.classList.contains("parallax-op")) {
        // const opacityValue = gsap.utils.clamp(0, 1, 1 + movement / 500);
        const opacityValue = movement / 300;
        tl.to(layer, { opacity: opacityValue, ease: "none" }, 0);
      }
    });
  }
  updateParallax();

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    activeScrollHeight = commercialHpPoint.offsetHeight;

    // Re-initialize text animation
    initSplitText();

    // Update parallax layers
    updateParallax();
  });
});
