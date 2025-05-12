$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.defaults({ ease: 'linear'});

    /** FUNCTION Lenis Scroll */
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // FUNCTION 리사이즈시 scrolltrigger refresh
    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
            ScrollTrigger.refresh();
        });
    });
    resizeObserver.observe(document.querySelector('html'));

    // helper
    let ww = $(window).width();
    let wh = $(window).height();

    function setScreenSize() {
        let vh = $(window).height() * 0.01;
        $(":root").css("--vh", vh + "px");
    }
    setScreenSize();

    function mob() {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i) ||
            navigator.maxTouchPoints == 5
        ) {
            return true;
        } else {
            return false;
        }
    }
    
    let resizeClear;
    $(window).resize(function () {
        clearTimeout(resizeClear);

        setTimeout(function () {
            ww = $(window).width();
            wh = $(window).height();
            setScreenSize();
            // mob() ? $("html").removeClass("pc").addClass("mo") : $("html").removeClass("mo").addClass("pc");
            
            if (ww <= 768) {
                $('.sc-02 .vertical').css('opacity', 0);
                $('.sc-02 .horizon').css('opacity', 1);
            }
        }, 200);
    });
    // if(!mob()){
	// }

    // sc-01
    let sc01Width01 = mob() ? ww : $('.sc-01 .wrapper-01 .ttl-txt').width() + (ww * 0.16);
	let sc01Width02 = mob() ? ww : $('.sc-01 .wrapper-02 .ttl-txt').width() + (ww * 0.16);

    const sc01Txt01 = new SplitText('.sc-01 .wrapper-01 .ttl-txt', { type: 'chars', charsClass: 'char'});
    const sc01Txt02 = new SplitText('.sc-01 .wrapper-02 .ttl-txt', { type: 'chars', charsClass: 'char'});
    const sc01Char01 = sc01Txt01.chars;
    const sc01Char02 = sc01Txt02.chars;

    // 텍스트 모션 감도
	let sc01time01 = mob() ? 0 : 0.25;
    let sc01time02 = mob() ? 0 : 0.25;
	let sc01scrub01 = 0.2;
	let sc01scrub02 = (sc01Char02.length * sc01time02) + sc01time02;

    // intro
    const introTl = gsap.timeline({ 
        defaults: {
            duration: 1,
            ease: 'back'
        }
    })
    .to('.sc-01 .sc-ttl .ttl-txt', {
        y: '0%',
    })
    .to('.sc-01 .sc-ttl .txt-box', {
        marginTop: 0,
        opacity: 1,
    }, .3)
    .to('.sc-01 .sub-ttl', {
        x: 0,
        opacity: 1,
    }, '<')

    let sc01TriggerOptions = {
		trigger:'.sc-01',
		start:'0% 0%',
        end: '100% 50%',
        invalidateOnRefresh: true
	}
    
	// 배경
	ScrollTrigger.create({
		...sc01TriggerOptions,
		onEnter:()=>{
			gsap.to('.sc-01', 1.5, { '--blur': 10, '--brightness': 0.4})
		},
		onLeaveBack:()=>{
			gsap.to('.sc-01', 1.5, { '--blur': 0, '--brightness': 1})
		}
	})

	// 텍스트 모션
	$(sc01Char01).each(function(idx, char){
		idx !== 0 ? sc01scrub01 += sc01time01 : '';
		gsap.to(char, {
			x:-sc01Width01,
			scrollTrigger:{
				...sc01TriggerOptions,
				scrub: sc01scrub01,
			}
		})
	})

	$(sc01Char02).each(function(idx, char){
		idx !== 0 ? sc01scrub02 -= sc01time02 : '';
		gsap.to(char, {
			x: sc01Width02,
			scrollTrigger:{
				...sc01TriggerOptions,
				scrub: sc01scrub02,
			}
		})
	})

	// 박스
	$('.sc-01 .txt-box').each(function(idx, e){
		gsap.to(e,{
			x:()=>{
				return idx == 0 ? -sc01Width01 : sc01Width02;
			},
			scrollTrigger:{
				...sc01TriggerOptions,
				scrub:mob() ? 1 : 2,
			}
		})
	})

    // sc-02
    const sc02Txt01 = new SplitText('.sc-02 .txt01', { type: 'chars', charsClass: 'char'});
    const sc02Txt02 = new SplitText('.sc-02 .txt02', { type: 'chars', charsClass: 'char'});
    const sc02Char01 = sc02Txt01.chars;
    const sc02Char02 = sc02Txt02.chars;

    function createTextAnimation(chars, isSecond = false) {
        return gsap.timeline()
        .to(chars, {
            y: '0%',
            opacity: 1,
            stagger: {
                amount: 0.5,
            },
            ease: 'power3.inOut'
        })
        .to(chars, {
            y: '-3%',
            rotate(idx) {
                return idx % 2 === 0 ? 4 : -4;
            },
            transformOrigin: isSecond ? '65% 50%' : '35% 50%',
            ease: 'back(3.5)'
        })
        .to(chars, {
            delay: 0.7,
            scale: 1.2,
            opacity: 0,
            stagger: {
                amount: 0.4,
            },
            ease: "back(1.7).in"
        })
    }

    // sc-02 텍스트 애니메이션
    const sc02TxtTl = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: .5,
    })
    .add(createTextAnimation(sc02Char01, false))
    .delay(.5)
    .add(createTextAnimation(sc02Char02, true))

    const sc02VerticalTl = gsap.timeline()
    .to('.sc-02 .vertical .strategy-item', {
        y: function() {
            return 163.7 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh'));
        },
        stagger: {
            each: .1,
            ease: "power2.inOut"
        },
    })
    .to('.sc-02 .vertical .strategy-item', {
        width: function() {
            return 42.7 * (ww / 100);
        },
        stagger: {
            each: .1,
            ease: "power2.out"
        },
    }, '<')
    .to('.sc-02 .vertical .strategy-list', {
        y: function() {
            return -141.5 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vh'));
        },
    }, .1)

    const $vList = $('.sc-02 .vertical .strategy-list');
    const $hList = $('.sc-02 .horizon .strategy-list');
    const $items = $('.sc-02 .horizon .strategy-item');
    
    const snapPoints = [0, 0.33, 0.66, 1];
    const activeIdx = [1, 2, 3, 4];
    
    function calculateScrollPositions() {
        let iWidth = $items.outerWidth();
        let iGap = $items.eq(1).offset().left - ($items.eq(0).offset().left + iWidth);
        let vWidth = $vList.outerWidth();
        let hWidth = $hList.outerWidth();
        
        let startX = ((iWidth * 3 + iGap * 2) - vWidth) / 2;
        let sWidth = hWidth - vWidth - startX;
        
        return { startX, sWidth };
    }
    
    function setupResponsiveScroll() {
        const { startX, sWidth } = calculateScrollPositions();
        
        ScrollTrigger.create({
            trigger: '.sc-02 .horizon',
            start: 'top top', 
            end: 'bottom bottom',
            animation: gsap.fromTo($hList, {
                x() {
                    return -startX;
                }
            }, {
                x() {
                    return -sWidth;
                }
            }),
            invalidateRefresh: true,
            scrub: .25,
            snap: {
                snapTo: snapPoints,
                duration: { min: 0.2, max: 0.3 },
                ease: "power1.inOut",
                inertia: false
            },
            onUpdate: (self) => {
                const prog = self.progress;
                $items.removeClass('active');
                
                let activeItemIndex = 0;
                for (let i = 0; i < snapPoints.length - 1; i++) {
                    if (prog >= (snapPoints[i] + snapPoints[i + 1]) / 2) {
                        activeItemIndex = i + 1;
                    }
                }
                
                $items.eq(activeIdx[activeItemIndex]).addClass('active');
            }
        });
    }
    
    // if (window.innerWidth > 768) {
    //     setupResponsiveScroll();
    // }

    ScrollTrigger.matchMedia({
        '(min-width: 769px)': function(){
            const triggers = [];

            const sc02Trigger = ScrollTrigger.create({
                trigger: '.sc-02 .ttl-area',
                start: '0% 70%',
                end: '0% 70%',
                animation: sc02TxtTl,
                invalidateOnRefresh: true,
                toggleActions: 'restart none none reset',
            })
            triggers.push(sc02Trigger);

            const sc02VerticalTrigger = ScrollTrigger.create({
                trigger: '.sc-02 .vertical',
                start: '25% 0%',
                end: '100% 0%',
                animation: sc02VerticalTl,
                scrub: .25,
                invalidateOnRefresh: true,
                onLeave: () => {
                    $('.sc-02 .vertical').css('opacity', 0);
                    $('.sc-02 .horizon').css('opacity', 1);
                },
                onEnterBack: () => {
                    $('.sc-02 .horizon').css('opacity', 0);
                    $('.sc-02 .vertical').css('opacity', 1);
                }
            })
            triggers.push(sc02VerticalTrigger);

            setupResponsiveScroll();

            // sc-04
            const sc04ProcessItem = $('.sc-04 .process-item');
            sc04ProcessItem.each(function(idx, e){
                const tl = gsap.timeline({
                    defaults: {
                        duration: 0.6,
                    },
                    scrollTrigger:{
                        trigger: e,
                        start: '0% 100%',
                        end: '+=80%',
                        scrub: 0,
                    }
                })
                .to(e, {
                    opacity: 1,
                    duration: 0.8,
                })
                .to($(e).find('.process-txt'), {
                    y: '0%',
                }, '-=1')
                .to(e, {
                    '--rotate': 72 * idx,
                }, '-=1')
            })

            return () => {
                triggers.forEach(t => t.kill());
            };
        },
        '(max-width: 768px)': function(){
            const triggers = [];
            const sc02Trigger = ScrollTrigger.create({
                trigger: '.sc-02 .ttl-area',
                start: 'top 80%',
                end: 'bottom 80%',
                animation: sc02TxtTl,
                invalidateOnRefresh: true,
                toggleActions: 'restart none none reset',
            })
            triggers.push(sc02Trigger);

            gsap.utils.toArray('.sc-02 .strategy-item').forEach(function(e){
                const strategyTrigger =ScrollTrigger.create({
                    trigger: e,
                    start: '0% 60%',
                    end: '100% 60%',
                    animation: gsap.from(e, {
                        y: 30,
                    opacity: 0,
                    duration: 1,
                    }),
                    scrub: 0,
                })
                triggers.push(strategyTrigger);
            })

            // sc-04
            const sc04ProcessItem = $('.sc-04 .process-item');
            sc04ProcessItem.each(function(idx, e){
                const tl = gsap.timeline({
                    defaults: {
                        duration: 0.6,
                    },
                    scrollTrigger:{
                        trigger: e,
                        start: '0% 100%',
                        end: '+=80%',
                        scrub: 0,
                    }
                })
                .to(e, {
                    opacity: 1,
                    duration: 0.8,
                })
                .to($(e).find('.process-txt'), {
                    y: '0%',
                }, '-=1')
                .to(e, {
                    '--rotate': 72 * idx,
                }, '-=1')
            })

            return () => {
                triggers.forEach(t => t.kill());
            };
        }
    })
    // sc-03
    const keywordItem = $('.sc-03 .keyword-item');
    const sc03Tl = gsap.timeline()
    .to('.sc-03 .ani-scale', {
        duration: 1,
        scale: 1,
    })
    .to('.sc-03 .keyword-area', {
        y: '0%',
        opacity: 1,
    }, '-=.6')

    ScrollTrigger.create({
        trigger: '.sc-03',
        start: '0% 0%',
        end: '25% 0%',
        animation: sc03Tl,
        invalidateOnRefresh: true,
        scrub: 0.25,
    })

    ScrollTrigger.create({
        trigger: '.sc-03',
        start: '25% 0%',
        end: '100% 0%',
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            let progress = self.progress;
            const itemCount = keywordItem.length;
            const activeItems = Math.round(progress * itemCount);
            
            keywordItem.each(function(_, e){
                gsap.to(e, {
                    y: -100 * activeItems + '%',
                    duration: 0.1
                });
            });
        }
    })    
});