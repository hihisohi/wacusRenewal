gsap.registerPlugin(ScrollTrigger); 

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            const timeline1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#works_page .sec_2",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                    // markers:true,
                },
            });
            timeline1
            .to(".box._3", {
                opacity: 1,
                translateY: 0,
                duration: 1,
                stagger: {
                    amount: 3, // 스크롤 구간 동안 순차적으로 애니메이션
                },
            })
            .to(".bliding", {
                translateY: 0,
                duration: 3,
            })
            .to(".box._3", {
                opacity: 0,
                duration: 0.5,
            })
            .to(".box._1", {
                opacity: 1,
                translateY: 0,
                duration: 1,
                delay: 0.3,
            })
            .to(".box._1", {
                opacity: 0,
                duration: 0.5,
            })
            .to(".box._2", {
                opacity: 1,
                translateY: 0,
                duration: 1,
                delay: 0.6,
            });
           
        },
          "(max-width: 767px)": function () {
            const timeline1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#works_page .sec_2",
                    start: "+=50% +=50%",
                    end: "bottom +=50%",
                    // pin: true,
                    // markers: true,
                },
            });
            timeline1
                .to(".box._3", {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.5,  // duration을 지정하여 스크롤 구간에 맞게 애니메이션 시간 설정
                    stagger: {
                        amount: 3,
                    },
                })
                .to(".bliding", {
                    translateY: 0,
                    duration: 2,  // 원하는 시간으로 변경
                })
                .to(".box._3", {
                    opacity: 0,
                    duration: 0.5,  // 원하는 시간으로 변경
                })
                .to(".box._1", {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.5,  // 원하는 시간으로 변경
                    delay: 0.3,
                })
                .to(".box._1", {
                    opacity: 0,
                    duration: 1,  // 원하는 시간으로 변경
                })
                .to(".box._2", {
                    opacity: 1,
                    translateY: 0,
                    duration: 0.5,  // 원하는 시간으로 변경
                    delay: 0.6,
                });
        },
      });