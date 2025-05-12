document.addEventListener("DOMContentLoaded", () => {
  const commercialHpContact = document.querySelector("#commercialHpContact");

  const contactActiveScrollHeight = commercialHpContact.offsetHeight;

  // 페럴럭스
  const contactParallax = gsap.timeline({
    scrollTrigger: {
      trigger: commercialHpContact,
      start: "top bottom",
      end: "100% top",
      scrub: true,
    },
  });

  function updatecontactParallax() {
    gsap.utils.toArray("#commercialHpContact .parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = +(layer.offsetHeight * depth);
      contactParallax.to(layer, { y: movement, ease: "none" }, 0);
    });
  }
  updatecontactParallax();

  // 타이틀 split
  const contactTextSplit = new SplitText("#commercialHpContact .split--lines", {
    type: "chars, words, lines",
  });
  gsap.set(contactTextSplit.lines, { opacity: 0, x: -40 });
  gsap.to(contactTextSplit.lines, {
    opacity: 1,
    x: 0,
    stagger: 0.1,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#commercialHpContact .split--lines",
      start: "top 80%",
      scrub: true,
    },
  });

  const fadeDownLists = commercialHpContact.querySelectorAll("[data-fade='down']");

  gsap.utils.toArray(fadeDownLists).forEach((item, idx) => {
    gsap.set(item, { opacity: 0, y: -40 });
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 2 * idx + 1,
      scrollTrigger: {
        trigger: item,
        start: "100% bottom",
        end: "150% bottom",
        scrub: true,
      },
    });
  });

  window.addEventListener("resize", () => {
    // Update activeScrollHeight for new window size
    contactActiveScrollHeight = commercialHpContact.offsetHeight;

    updatecontactParallax();
  });
});
