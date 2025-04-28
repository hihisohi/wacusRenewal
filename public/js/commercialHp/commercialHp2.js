document.addEventListener("DOMContentLoaded", () => {
  const commercialHpPoint = document.querySelector("#commercialHpPoint");
  const bottomImages = commercialHpPoint.querySelector(".cmhp-point__images");
  const fullStickyContainer = document.querySelector("#commercialHpPoint .full-sticky-container");
  const pointActiveScrollHeight = fullStickyContainer.offsetHeight * 4;

  // 하단 이미지 fade in, scale up (실행 구간 0 ~ 20%)
  const bottomImageAni = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "top top",
      end: `+=${pointActiveScrollHeight * 0.2}`,
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
      end: `+=${pointActiveScrollHeight * 0.2}`,
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
  const indicatorImageItems = document.querySelectorAll(".cmhp-point__images .image-item");
  const progressBar = document.querySelector(".cmhp-point__indicator .progress-bar-fill");

  let pointCurrentStep = 0;

  ScrollTrigger.create({
    trigger: fullStickyContainer,
    start: "top top",
    end: `+=${pointActiveScrollHeight}`,
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

      if (newStep !== pointCurrentStep) {
        const tl = gsap.timeline();

        indicatorItems.forEach((item) => {
          item.classList.remove("active");
        });
        indicatorImageItems.forEach((item) => {
          item.classList.remove("active");
        });

        if (newStep) {
          indicatorItems[newStep - 1].classList.add("active");
          indicatorImageItems[newStep - 1].classList.add("active");
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

        pointCurrentStep = newStep;
        console.log(`Step ${pointCurrentStep} 도착`);
      }
    },
  });

  // 타이틀 split
  const pointTextSplit = new SplitText("#commercialHpPoint .split--words", {
    type: "chars, words",
  });

  gsap.set(pointTextSplit.words, { opacity: 0, y: 60, scale: 0.8 });

  gsap.to(pointTextSplit.words, {
    opacity: 1,
    y: 0,
    scale: 1,
    stagger: 0.08,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#commercialHpPoint .split--words",
      start: "top 100%",
      scrub: true,
    },
  });

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    pointActiveScrollHeight = commercialHpPoint.offsetHeight;

    // Re-initialize text animation
    initIntroSplitText();

    // Update parallax layers
    updateIntroParallax();
  });
});
