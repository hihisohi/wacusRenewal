$(document).ready(function(){
    let ww = $(window).width();
    let wh = $(window).height();

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
    
    if (window.innerWidth > 768) {
        setupResponsiveScroll();
    }

    ScrollTrigger.matchMedia({
        '(min-width: 769px)': function(){
            ScrollTrigger.create({
                trigger: '.sc-02 .ttl-area',
                start: '0% 70%',
                end: '0% 70%',
                animation: sc02TxtTl,
                invalidateOnRefresh: true,
                toggleActions: 'restart none none reset',
            })

            ScrollTrigger.create({
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

            setupResponsiveScroll();
        },
        '(max-width: 768px)': function(){
            ScrollTrigger.create({
                trigger: '.sc-02 .ttl-area',
                start: 'top 80%',
                end: 'bottom 80%',
                animation: sc02TxtTl,
                invalidateOnRefresh: true,
                toggleActions: 'restart none none reset',
            })

            gsap.utils.toArray('.sc-02 .strategy-item').forEach(function(e){
                gsap.from(e, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    // ease: 'power2.inOut',
                    scrollTrigger:{
                        trigger: e,
                        start: '0% 60%',
                        end: '100% 60%',
                        scrub: 0,
                    }
                })
            })
        }
    })
});