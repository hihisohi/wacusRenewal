document.addEventListener("DOMContentLoaded", () => {
  const commercialHpIssue = document.querySelector("#commercialHpIssue");

  const issueActiveScrollHeight = commercialHpIssue.offsetHeight;

  // 페럴럭스
  const issueParallax = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpIssue,
      start: "80% bottom",
      end: "100% top",
      scrub: true,
    },
  });

  function updateIssueParallax() {
    gsap.utils.toArray("#commercialHpIssue .parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      issueParallax.to(layer, { y: movement, ease: "none" }, 0);
    });
  }
  updateIssueParallax();

  // 텍스트 split
  const issueTextSplit = new SplitText("#commercialHpIssue .split--words", {
    type: "chars, words",
  });
  gsap.set(issueTextSplit.chars, { opacity: 0, x: 60, scale: 0.8 });
  gsap.to(issueTextSplit.chars, {
    opacity: 1,
    x: 0,
    scale: 1,
    stagger: 0.2,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#commercialHpIssue .split--words",
      start: "top 80%",
      scrub: true,
    },
  });

  // 이미지 fade up
  const issueImage = commercialHpIssue.querySelector(".cmhp-issue__image");
  gsap.set(issueImage, { opacity: 0, y: 80 });
  gsap.to(issueImage, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: issueImage,
      start: "20% bottom",
      end: "100% bottom",
      scrub: true,
    },
  });

  // 리스트 순차 fade up
  const listLis = commercialHpIssue.querySelectorAll("li");
  gsap.utils.toArray(listLis).forEach((item, idx) => {
    gsap.set(item, { opacity: 0, y: 30 });
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 2 * idx + 1,
      scrollTrigger: {
        trigger: item,
        start: "100% bottom",
        end: "400% bottom",
        scrub: true,
      },
    });
  });

  // 하단 텍스트 fade in
  const issueText = commercialHpIssue.querySelector(".cmhp-issue__text");
  gsap.set(issueText, { opacity: 0 });
  gsap.to(issueText, {
    opacity: 1,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: issueText,
      start: "100% bottom",
      end: "200% bottom",
      scrub: true,
    },
  });

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    issueActiveScrollHeight = commercialHpIssue.offsetHeight;

    // Update parallax layers
    updateIssueParallax();
  });
});
