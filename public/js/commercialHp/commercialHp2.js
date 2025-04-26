document.addEventListener("DOMContentLoaded", () => {
  const commercialHpPoint = document.querySelector("#commercialHpPoint");
  const bottomImages = commercialHpPoint.querySelector(".cmhp-point__images");
  const bottomArea = commercialHpPoint.querySelector(
    ".cmhp-point__bottom-area"
  );
  const fullStickyContainer = document.querySelector(
    "#commercialHpPoint .full-sticky-container"
  );
  const activeScrollHeight = fullStickyContainer.offsetHeight * 4;

  // 하단 이미지 등장
  const bottomImageAni = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "top top",
      end: `+=${activeScrollHeight * 0.25}`,
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

  // 섹션 프로그레스 바
  const progressBar = document.querySelector(
    ".cmhp-point__indicator .progress-bar-fill"
  );

  let currentStep = 0;

  const imageOverSlideAni = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpPoint,
      start: "200% bottom",
      end: `+=${activeScrollHeight * 0.75}`,
      scrub: true,
    },
  });

  gsap.utils.toArray(".cmhp-point__images .image-item").forEach((item, idx) => {
    if (idx === 0) return;

    imageOverSlideAni.to(item, {
      y: -bottomArea.offsetHeight * idx,
      ease: "none",
    });
  });

  ScrollTrigger.create({
    trigger: fullStickyContainer,
    start: "top top",
    end: `+=${activeScrollHeight}`,
    pin: commercialHpPoint,
    pinSpacing: true,
    markers: true,
    onUpdate: (self) => {
      const progress = self.progress; // 0 ~ 1
      const direction = self.direction; // 1: down, -1: up
      let newStep;

      if (progress < 0.33) {
        newStep = 1;
      } else if (progress < 0.66) {
        newStep = 2;
      } else {
        newStep = 3;
      }

      if (newStep !== currentStep) {
        const tl = gsap.timeline();

        // DOWNWARD SCROLL
        if (direction === 1) {
          switch (newStep) {
            case 1:
              tl.to(progressBar, { right: "100%", duration: 0.5 }).to(
                progressBar,
                { left: "0%", duration: 0.5 }
              );
              break;
            case 2:
              tl.to(progressBar, { right: "50%", duration: 0.5 }).to(
                progressBar,
                { left: "50%", duration: 0.5 }
              );
              break;
            case 3:
              tl.to(progressBar, { right: "0%", duration: 0.5 }).to(
                progressBar,
                { left: "100%", duration: 0.5 }
              );
              break;
          }
        }

        // UPWARD SCROLL
        else {
          switch (newStep) {
            case 1:
              tl.to(progressBar, { left: "0%", duration: 0.5 }).to(
                progressBar,
                { right: "100%", duration: 0.5 }
              );
              break;
            case 2:
              tl.to(progressBar, { left: "50%", duration: 0.5 }).to(
                progressBar,
                { right: "50%", duration: 0.5 }
              );
              break;
            case 3:
              tl.to(progressBar, { left: "100%", duration: 0.5 }).to(
                progressBar,
                { right: "0%", duration: 0.5 }
              );
              break;
          }
        }

        currentStep = newStep;
        console.log(`Step ${currentStep} 도착`);
      }
    },
  });
});
