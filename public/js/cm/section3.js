$(document).ready(function(){
    // gsap setting
    // gsap.registerPlugin(ScrollTrigger, SplitText);
    // gsap.defaults({ ease: 'linear'});

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
})