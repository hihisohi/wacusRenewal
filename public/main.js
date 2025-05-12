let isTyping = false;
$(document).ready(function(){
    gsap.registerPlugin(SplitText, ScrollTrigger,ScrollSmoother);
    function gtag_report_conversion_contact1(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-16997367498/4U1WCOP0nLgaEMr9_Kg_',
            'value': 5.0,
            'currency': 'KRW',
            'event_callback': callback
        });
        return false;
      }
      
    setTimeout(() => {
        gsap.to(window, { scrollTo: 0, duration:0 })
    }, 1000);
    
    
    setTimeout(() => {
        gsap.to(window, { scrollTo: 0, duration:0 })
        /* section2 */
        const path = document.querySelector(".cls-1");
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
        let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section2",
                    // endTrigger:".s2_con",
                    start: "top top",
                    end: "top+=4000 top",
                    scrub: true,
                    pin: true,
                    // markers:true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });
            gsap.to(path, {
                    strokeDashoffset: 0, // 0으로 설정하면 원의 길이만큼 stroke가 그려짐
                    scrollTrigger: {
                        trigger: ".s2_tl",
                        start: "top+=100 top",
                        end: "top+=1000 top",
                        scrub: 1,
                        // markers: true
                        invalidateOnRefresh: true
                    }
            });

            var split = new SplitText(".s2_first_txt1", { type: "chars" });
            gsap.fromTo(split.chars, {
                y: 20,
                opacity: 0,
                stagger: 0
            },{
                scrollTrigger: {
                    trigger: ".s2_tl",
                    start: "top+=800 top",
                    end: "top+=2800 top",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true,
                    onEnter: function () {
                        $('.s2_first_txt_group_1').addClass('on');
                        $('.s2_first_txt_group_1').removeClass('hide');
                    },
                    onEnterBack: function () {
                        $('.s2_first_txt_group_1').addClass('on');
                        $('.s2_first_txt_group_1').removeClass('hide');
                    },
                    onLeave: function () {
                        $('.s2_first_txt_group_1').removeClass('on');
                        $('.s2_first_txt_group_1').addClass('hide');
                    },
                    onLeaveBack: function () {
                        $('.s2_first_txt_group_1').removeClass('on');
                        $('.s2_first_txt_group_1').addClass('hide');
                    },
                },
                duration: 2,
                stagger: 0.1,
                y: 0,
                opacity: 1
            });

            gsap.to(".s2_con", {
                background: "#131313",
                scrollTrigger: {
                    trigger: ".s2_tl",
                    start: "top+=2000 top",
                    end: "top+=2500 top",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true
                },
            });

            gsap.to(".s2_second_cir", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".s2_tl",
                    start: "top+=2400 top",
                    end: "top+=2500 top",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true
                },
            });
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": function() {
                    gsap.fromTo(".s2_second_cir1",
                        { x: "-50%",y:"0"},  // 시작 위치
                        {
                            x: "-125%", // 도착 위치
                            immediateRender: false ,
                            scrollTrigger: {
                                trigger: ".s2_tl",
                                start: "top+=2600 top",
                                end: "top+=2900 top",
                                scrub: 1,
                                // markers: true,
                                invalidateOnRefresh: true
                            }
                        }
                    );
                    gsap.fromTo(".s2_second_cir2",
                        { x: "-50%",y:"0"},  // 시작 위치
                        {
                            x: "25%", // 도착 위치
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: ".s2_tl",
                                start: "top+=2600 top",
                                end: "top+=2900 top",
                                scrub: 1,
                                // markers: true,
                                invalidateOnRefresh: true
                            }
                        }
                    );

                },
                "(max-width: 767px)": function() {
                    gsap.fromTo(".s2_second_cir1",
                        { y: "-50%" , x: "-50%", z:"0"},  // 시작 위치
                        {
                            x: "-50%",
                            y: "-135%", // 도착 위치
                            z:"0",
                            immediateRender: false ,
                            scrollTrigger: {
                                trigger: ".s2_tl",
                                start: "top+=2600 top",
                                end: "top+=2900 top",
                                scrub: 1,
                                //  markers: true,
                                invalidateOnRefresh: true
                            }
                        }
                    );
                    gsap.fromTo(".s2_second_cir2",
                        { y: "-50%",  x: "-50%", z:"0"},  // 시작 위치
                        {
                            x: "-50%",
                            y: "35%", // 도착 위치
                            z:"0",
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: ".s2_tl", 
                                start: "top+=2600 top",
                                end: "top+=2900 top",
                                scrub: 1,
                                // markers: true,
                                invalidateOnRefresh: true
                            }
                        }
                    );

                
                }
            });

            gsap.to(".s2_con", {
                scrollTrigger: {
                    trigger: ".s2_tl",
                    start: "top+=3200 top",
                    end: "top+=3300 top",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true,
                    onEnter: function () {
                        $('.s2_con').addClass("common_txt_on");

                    },
                    onLeaveBack: function () {
                        $('.s2_con').removeClass("common_txt_on");
                    }
                },
            });
        /* section3 */

        var split = new SplitText(".s3_tit", { type: "chars" });
        gsap.fromTo(split.chars, {
            y: 20,
            opacity: 0,
            stagger: 0
        },{
            scrollTrigger: {
                trigger: ".section3",
                start: "top top+=50%",
                end: "top+=200 top+=50%",
                scrub: 1,
                // markers: true,
                invalidateOnRefresh: true
            },
            duration: 2,
            y: 0,
            opacity: 1,
            stagger: 0.1
        });
        $('.s3_list_group li').each(function () {
            var split2 = new SplitText($(this).find('h4'), { type: "chars" });
            var split3 = new SplitText($(this).find('p'), { type: "chars" });
            gsap.fromTo($(this).find('.s3_list_img'), {
                // width:100,
                x: -100,
                opacity: 0,
                stagger: 0
            }, {scrollTrigger: {
                    trigger: $(this).find('.s3_list_img'),
                    start: "top top+=80%",
                    end: "bottom-=50% bottom-=80%",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true,
                    immediateRender: true
                },x:0,opacity:1,duration: 10,stagger: 0.01});
            gsap.fromTo(split2.chars, {
                y: -10,
                opacity: 0,
                stagger: 0
            },{scrollTrigger: {
                    trigger: $(this).find('.s3_list_img'),
                    start: "top top+=80%",
                    end: "bottom-=50% bottom-=80%",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true,
                    immediateRender: true
                },y:0,opacity:1,duration: 2,stagger: 0.1});
            gsap.fromTo(split3.chars, {
                rotate: '15deg',
                y: -10,
                opacity: 0,
                stagger: 0
            },{scrollTrigger: {
                    trigger: $(this).find('.s3_list_img'),
                    start: "top top+=80%",
                    end: "bottom-=50% bottom-=80%",
                    scrub: 1,
                    // markers: true,
                    invalidateOnRefresh: true,
                    immediateRender: true
                },rotate: '0deg',y:0,opacity:1,duration: 2,stagger: 0.1});
        });
            
            /* section4 */
            gsap.to('.section5', {
                scrollTrigger: {
                    trigger: '.section5',
                    start: "toptop+=20% top+=50%",
                    scrub: 1,
                    // markers: true,
                    onEnter: function () {
                        $('.section5').addClass('on');
                    },
                    onEnterBack: function () {
                        $('.section5').addClass('on');
                    },
                    onLeave: function () {
                        $('.section5').removeClass('on');
                    },
                    onLeaveBack: function () {
                        $('.section5').removeClass('on');
                    },
                },
            });




            var split = new SplitText(".s5_tit_group h2", { type: "chars" });
            var split2 = new SplitText(".s5_tit_group p", { type: "chars" });

            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: '.section5',
                    start: "top top+=50%",
                    end: "top+=20% top+=50%",
                    scrub: 1,
                    // markers: true,
                },
                y: -20,
                rotation: '90deg',
                opacity: 0,
                stagger: 0.2,
            });
            gsap.from(split2.chars, {
                scrollTrigger: {
                    trigger: '.section5',
                    start: "top+=10% top+=50%",
                    end: "top+=30% top+=50%",
                    scrub: 1,
                    // markers: true,
                },
                y: -10,
                // rotation:'90deg',
                opacity: 0,
                stagger: 0.2,
            });
            $('.s5_list_group li').each(function () {
                gsap.from($(this), {
                    scrollTrigger: {
                        trigger: $(this),
                        start: "top top+=50%",
                        end: "top+=30% top+=50%",
                        scrub: 1,
                        // markers: true,
                    },
                    x: '-50%',
                    opacity: 0,
                });
            });

            /* section4 */
            $(".s4_txt_group p").each(function () {
                var words = $(this).text().split(" ");
                $(this).empty();
                $.each(words, function (i, word) {
                    $(this).append($("<span>").text(word + " "));
                }.bind(this));
            });

            const s4Split = new SplitText($('.s4_split'), { type: "chars" });

            gsap.from(s4Split.chars, {
                scrollTrigger: {
                    trigger: ".s4_txt_group",
                    start: "top-=50 bottom-=50%",
                    end: "top+=200 bottom-=50%",
                    scrub: true,
                    // markers: true,
                },
                duration: 2,
                y: -20,
                opacity: 0,
                stagger: 0.1,

            });

            // GSAP 애니메이션 설정
            let s4_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".s4_txt_group",
                    start: "top bottom-=50%",
                    end: "top+=250 bottom-=50%",
                    scrub: true,
                    // markers: true,
                },
            });

            // 각 <span> 요소에 순차적으로 색 변경 애니메이션 적용
            s4_tl.to(".s4_txt_group p span", {
                duration: 2,
                color: "#fff",
                stagger: 0.2,  // 각 단어가 0.1초 간격으로 순차적으로 색이 변하도록 설정
            });

            /* section6 */
            let s6_tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section6",
                    // endTrigger:".s2_con",
                    start: "top top",
                    end: "+=4000",
                    // scroller: "#smooth-content",
                    scrub: true,
                    pin: true,
                    // markers:true
                }
            });

            const s6Split = new SplitText($('.s6_tit_group1'), { type: "chars" });
            const s6Split2 = new SplitText($('.s6_tit_group p'), { type: "chars" });
            gsap.from(s6Split.chars, {
                scrollTrigger: {
                    trigger: ".section6",
                    start: "top-=50 top",
                    end: "top+=200 top",
                    scrub: true,
                    // markers:true
                },
                duration: 2,
                y: 20,
                opacity: 0,
                stagger: 0.1,
            });

            gsap.from(s6Split2.chars, {
                scrollTrigger: {
                    trigger: ".section6",
                    start: "top-=10 top",
                    scrub: true,
                    // markers:true
                },
                duration: 2,
                y: 20,
                opacity: 0,
                stagger: 0.1,
            });

            gsap.from('.section6', {
                scrollTrigger: {
                    trigger: ".section6",
                    start: "top+=30% bottom-=50%",
                    end: "top+=50% bottom-=50%",
                    scrub: true,
                    // markers: true,
                },
                opacity: 0,

            });

            // 원의 전체 길이를 계산하여 strokeDasharray와 strokeDashoffset에 설정
            const s6_path = document.querySelector(".s6_line");
            const s6_pathLength = s6_path.getTotalLength();

            s6_path.style.strokeDasharray = s6_pathLength;
            s6_path.style.strokeDashoffset = s6_pathLength;

            /* counter */
            const num1 = $(".s6_dot_group1 .num");
            const num2 = $(".s6_dot_group2 .num");
            const num3 = $(".s6_dot_group3 .num");
            const num4 = $(".s6_dot_group4 .num");

            s6_tl
                .to(s6_path, { strokeDashoffset: '107%', })
                .addLabel("mylabel1")
                .to('.s6_dot_group1 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel1")
                .to('.s6_dot_group1 .s6_dot_txt_group', { opacity: 1,className:'+=on'}, "mylabel1-=0.5")
                .to('.s6_dot_group1',{className:"s6_dot_group s6_dot_group1 on"})
                .from(num1, {
                    textContent: 0,
                    duration: 2,
                    ease: Power1.easeIn,
                    snap: { textContent: 1 },
                    stagger: 0.5,
                    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                }, "mylabel1-=0.5")

                .to(s6_path, { strokeDashoffset: '82%', })
                .addLabel("mylabel2")
                .to('.s6_dot_group2 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel2")
                .to('.s6_dot_group2 .s6_dot_txt_group', { opacity: 1 }, "mylabel2-=0.5")
                .to('.s6_dot_group2',{className:"s6_dot_group s6_dot_group2 on"})
                .from(num2, {
                    textContent: 0,
                    duration: 2,
                    ease: Power1.easeIn,
                    snap: { textContent: 1 },
                    stagger: 0.5,
                    
                    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                }, "mylabel2-=0.5")

                .to(s6_path, { strokeDashoffset: '58%', })
                .addLabel("mylabel3")
                .to('.s6_dot_group3 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel3")
                .to('.s6_dot_group3 .s6_dot_txt_group', { opacity: 1 }, "mylabel3-=0.5")
                .to('.s6_dot_group3',{className:"s6_dot_group s6_dot_group3 on"})
                .from(num3, {
                    textContent: 0,
                    duration: 2,
                    ease: Power1.easeIn,
                    snap: { textContent: 1 },
                    stagger: 0.5,
                    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                }, "mylabel3-=0.5")

                .to(s6_path, { strokeDashoffset: '35%', })
                .addLabel("mylabel4")
                .to('.s6_dot_group4 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel4")
                .to('.s6_dot_group4 .s6_dot_txt_group', { opacity: 1 }, "mylabel4-=0.5")
                .to('.s6_dot_group4',{className:"s6_dot_group s6_dot_group4 on"})
                .from(num4, {
                    textContent: 0,
                    duration: 2,
                    ease: Power1.easeIn,
                    snap: { textContent: 1 },
                    stagger: 0.5,
                    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                }, "mylabel4-=0.5")
                .to(s6_path, { strokeDashoffset: 0, });
                
            

            /* ROBOT TEXT */
            setTimeout(() => {
                TypingEvent('무엇이든 물어보세요!'); // 초기 텍스트 설정    
            }, 1500);
            // GSAP ScrollTrigger 사용
            // gsap.registerPlugin(ScrollTrigger);

            // .section2에 도달하면 텍스트를 변경
            ScrollTrigger.create({
                trigger: ".section2",
                start: "top top", // 스크롤 위치 설정
                end: "bottom+=4000 bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('와커스의 비즈니스 <br>철학을 소개드릴게요~'), // 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('무엇이든 물어보세요!'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('와커스의 비즈니스 <br>철학을 소개드릴게요~') // 섹션에 들어갈 때 실행
            });

            // .section3에 도달하면 텍스트를 변경
            ScrollTrigger.create({
                trigger: ".section3",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('저희는 이러한 비전으로 <br>작업에 임하고 있어요!'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('와커스의 비즈니스 <br>철학을 소개드릴게요~'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('저희는 이러한 비전으로 <br>작업에 임하고 있어요!')
            });

            // .section4에 도달하면 텍스트를 변경
            ScrollTrigger.create({
                trigger: ".section5",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('고객을 분석하고 <br>최적의 상품을 제안드립니다.'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('저희는 이러한 비전으로 <br>작업에 임하고 있어요!'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('고객을 분석하고 <br>최적의 상품을 제안드립니다.')
            });
            ScrollTrigger.create({
                trigger: ".section4",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('와커스는 이렇게 태어났어요'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('고객을 분석하고 <br>최적의 상품을 제안드립니다.'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('와커스는 이렇게 태어났어요')
            });
            ScrollTrigger.create({
                trigger: ".section6",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('저희 와커스는 <br>고객의 신뢰와 함께 성장합니다.'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('와커스는 이렇게 태어났어요'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('저희 와커스는 <br>고객의 신뢰와 함께 성장합니다.')
            });
            ScrollTrigger.create({
                trigger: ".section7",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('관심분야를 선택해 <br>자세히 보실 수 있어요'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('저희 와커스는 <br>고객의 신뢰와 함께 성장합니다.'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('관심분야를 선택해 <br>자세히 보실 수 있어요')
            });
            ScrollTrigger.create({
                trigger: ".section8",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('자주 물어보시는 <br>질문을 모아봤습니다'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('관심분야를 선택해 <br>자세히 보실 수 있어요'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('자주 물어보시는 <br>질문을 모아봤습니다')
            });
            ScrollTrigger.create({
                trigger: ".section9",
                start: "top top", // 스크롤 위치 설정
                end: "bottom bottom-=25%", // 스크롤 위치 설정
                // markers:true,
                onEnter: () => TypingEvent('저희는 잠실, 롯데타워, <br>부산에 위치해 있습니다'), // 다른 섹션에 들어갈 때 실행
                onLeaveBack: () => TypingEvent('자주 물어보시는 <br>질문을 모아봤습니다'), // 섹션에 들어갈 때 실행
                onEnterBack: () => TypingEvent('저희는 잠실, 롯데타워, <br>부산에 위치해 있습니다')
            });

            /* section7 */
            $(".s7_con_group").click(function () {
                if (!$(this).hasClass('on')) {
                    $(".s7_con_group").removeClass("on");
                    $(this).addClass("on");
            
                    const $this = $(this);
                    const h3Text = $this.find('h3');
                    const $h2 = $this.find('h2');
                    const $p = $this.find('p');
            
                    // 새로 SplitText 적용
                    const s7split = new SplitText($h2, { type: "chars" });
                    const s7split2 = new SplitText($p, { type: "chars" });
            
                    // opacity만 애니메이션
                    gsap.fromTo(
                        s7split.chars,
                        { opacity: 0 },
                        { duration: 1, opacity: 1, stagger: 0.1 }
                    );
            
                    gsap.fromTo(
                        h3Text,
                        { opacity: 0 },
                        { duration: 1, opacity: 1, stagger: 0.1 }
                    );
            
                    gsap.fromTo(
                        s7split2.chars,
                        { opacity: 0 },
                        { duration: 1, opacity: 1, stagger: 0.01 }
                    );
            
                    // 나머지 요소 SplitText 정리
                    $(".s7_con_group").not('.on').each(function () {
                        const $other = $(this);
                        const otherH2 = $other.find('h2');
                        const otherP = $other.find('p');
            
                        if (otherH2[0]._splitText) {
                            otherH2[0]._splitText.revert();
                            otherH2[0]._splitText.kill();
                            delete otherH2[0]._splitText;
                        }
            
                        if (otherP[0]._splitText) {
                            otherP[0]._splitText.revert();
                            otherP[0]._splitText.kill();
                            delete otherP[0]._splitText;
                        }
                    });
            
                    // 현재 SplitText 저장
                    $h2[0]._splitText = s7split;
                    $p[0]._splitText = s7split2;
                }
            });
            /* section08 */
            $(document).on('click', '.fna_list_group li', function () {
                if ($(this).hasClass("on")) {
                    return; // 클릭 이벤트 종료
                }
                // 활성화 클래스 변경
                $(".fna_list_group li").removeClass("on");
                $(this).addClass("on");
            
                // 모든 fna_answer_group을 슬라이드 업
                $(".fna_list_group li").find('.fna_answer_group').stop(true, true).slideUp(300);
            
                // 클릭한 요소의 fna_answer_group을 슬라이드 다운
                $(this).find('.fna_answer_group').stop(true, true).slideDown(300);
            });



            


            // 첫 번째 선택 항목이 선택되었을 때 다음 단계 활성화
            $(".s9_select1 li").on("click", function () {
                $(this).toggleClass("on"); // 복수 선택 가능하도록 toggle 기능

                if ($(".s9_select1 li.on").length > 0) {
                    $(".s9_contact_list").eq(1).addClass("on"); // 두 번째 선택 항목 활성화
                } else {
                    // 첫 번째 선택이 모두 해제되면 이후 단계 비활성화
                    $(".s9_contact_list").slice(1, 4).removeClass("on");
                    $(".s9_contact_list .s9_select li").removeClass("on"); // 선택 초기화
                    $(".next").removeClass("on"); // NEXT 버튼 비활성화
                }
                checkAllSteps();

                if ($('.section9').hasClass('contact_on')) {
                    $('#robot').addClass('hide');
                } else {
                    $('#robot').removeClass('hide');
                };
            });

            // 두 번째부터 네 번째까지는 단일 선택
            $(".s9_contact_list:not(:first) .s9_select li").on("click", function () {
                const $list = $(this).closest(".s9_select");
                $list.find("li").removeClass("on"); // 다른 선택을 비활성화
                $(this).addClass("on");

                // 현재 단계의 선택 여부에 따라 다음 단계 활성화
                const index = $(this).closest(".s9_contact_list").index();
                if (index < 3 && $(this).hasClass("on")) {
                    $(".s9_contact_list").eq(index + 1).addClass("on");
                }
                checkAllSteps();
            });

            // 모든 단계가 완료되면 NEXT 버튼 활성화
            function checkAllSteps() {
                if (
                    $(".s9_contact_list").eq(0).find("li.on").length > 0 &&
                    $(".s9_contact_list").eq(1).find("li.on").length > 0 &&
                    $(".s9_contact_list").eq(2).find("li.on").length > 0 &&
                    $(".s9_contact_list").eq(3).find("li.on").length > 0
                ) {
                    $(".next").addClass("on");
                } else {
                    $(".next").removeClass("on");
                }
            }


            $(document).on("click", ".next.on", function () {
                $(".s9_contact_bx_group").addClass("next_on");
            });

            $(".prev").click(function () {
                $(".s9_contact_bx_group").removeClass("next_on")
            })
            $(".section9 .close, .s9_filter").click(function () {
                $(".section9").removeClass("contact_on")
                if ($('.section9').hasClass('contact_on')) {
                    $('#robot').addClass('hide');
                } else {
                    $('#robot').removeClass('hide');
                };
            })
            $(".contact_btn").click(function () {
                gtag_report_conversion_contact1();
                $(".section9").addClass("contact_on");
                if ($('.section9').hasClass('contact_on')) {
                    $('#robot').addClass('hide');
                } else {
                    $('#robot').removeClass('hide');
                };
                return false;
            })
    }, "2000")
});

function TypingEvent(text) {
    if (isTyping) return;  // 타이핑 중이면 함수 종료
    isTyping = true;  // 타이핑 시작 상태로 설정

    let i = 0;
    const element = $('#robotTxt');
    element.html(''); // 이전 텍스트 초기화

    function type() {
        if (i < text.length) {
            // 현재 문자가 <일 때 태그로 처리
            if (text[i] === '<') {
                const tagEnd = text.indexOf('>', i);
                const tag = text.slice(i, tagEnd + 1);
                element.html(element.html() + tag);
                i = tagEnd + 1;
            } else {
                element.html(element.html() + text[i]);
                i++;
            }
            setTimeout(type, 10); // 글자 하나씩 출력 (50ms 간격)
        } else {
            isTyping = false;  // 타이핑 끝났을 때 상태를 false로 변경
        }
    }
    type();
}