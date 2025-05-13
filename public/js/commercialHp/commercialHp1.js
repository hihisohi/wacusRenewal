document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);

  const commercialHpIntro = document.querySelector("#commercialHpIntro");
  const introPinWrapper = commercialHpIntro.querySelector(".pin-wrapper");

  const isEn = document.querySelector(".lang-en");

  // 홈페이지 첫번째 섹션 고정
  const introActiveScrollHeight = commercialHpIntro.offsetHeight;

  ScrollTrigger.create({
    trigger: introPinWrapper,
    start: "top top",
    end: `+=${introActiveScrollHeight}`,
    pin: true,
    pinSpacing: false,
    // markers: true,
  });

  // 요소들 등장 효과 (처음 보일때만 한번 동작)
  const personImageLeft = document.querySelector(
    '.cmhp-intro__person[data-direction="left"]'
  );
  const personImageRight = document.querySelector(
    '.cmhp-intro__person[data-direction="right"]'
  );

  function initIntroSplitText() {
    let splitChars, splitLines, splitWords, animation;

    splitChars && splitChars.revert();
    splitWords && splitWords.revert();
    splitLines && splitLines.revert();
    animation && animation.revert();

    splitChars = SplitText.create("#commercialHpIntro .split--chars", {
      type: "chars",
    });
    splitWords = SplitText.create("#commercialHpIntro .split--words", {
      type: "words",
    });
    splitLines = SplitText.create("#commercialHpIntro .split--lines", {
      type: "lines",
    });

    const tl = gsap.timeline();

    tl.from(splitChars.chars, {
      scale: 0.6,
      opacity: 0,
      duration: isEn ? 0.4 : 0.8,
      ease: "power4",
      stagger: isEn ? 0.04 : 0.06,
      onComplete: () => {},
    })
      // .from(
      //   [personImageLeft, personImageRight],
      //   {
      //     y: 20,
      //     opacity: 0,
      //     duration: 0.8,
      //     ease: "power2.out",
      //     stagger: 0.4,
      //     onComplete: () => {
      //       console.log("Person elements fade-in complete!");
      //     },
      //   },
      //   "-=1.0"
      // )
      .from(
        splitWords.words,
        {
          y: 5,
          scale: 0.96,
          opacity: 0,
          duration: isEn ? 0.6 : 0.8,
          ease: "power4",
          stagger: isEn ? 0.2 : 0.3,
          onComplete: () => {},
        },
        "-=1.4"
      )
      .from(
        splitLines.lines,
        {
          y: 5,
          scale: 0.96,
          opacity: 0,
          duration: isEn ? 1.2 : 1.4,
          ease: "power4",
          stagger: 0.3,
          onComplete: () => {},
        },
        "-=0.6"
      );
  }
  initIntroSplitText();

  // 페럴럭스
  const introParallax = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpIntro,
      start: "top top",
      end: "100% top",
      scrub: true,
      // markers: true,
    },
  });

  function updateIntroParallax() {
    gsap.utils.toArray("#commercialHpIntro .parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      introParallax.to(layer, { y: movement, ease: "none" }, 0);

      if (layer.classList.contains("parallax-op")) {
        // const opacityValue = gsap.utils.clamp(0, 1, 1 + movement / 500);
        const opacityValue = movement / 300;
        introParallax.to(layer, { opacity: opacityValue, ease: "none" }, 0);
      }
    });
  }
  updateIntroParallax();

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    introActiveScrollHeight = commercialHpIntro.offsetHeight;

    // Re-initialize text animation
    initIntroSplitText();

    // Update parallax layers
    updateIntroParallax();
  });
});
