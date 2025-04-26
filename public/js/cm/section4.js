$(document).ready(function(){
    // gsap setting
    // gsap.registerPlugin(ScrollTrigger, SplitText);
    // gsap.defaults({ ease: 'linear'});

    ScrollTrigger.matchMedia({
        '(min-width: 769px)': function(){
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
        },
        '(max-width: 768px)': function(){
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
        }
    })
});