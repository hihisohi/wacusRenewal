$(document).ready(function(){
    // gsap setting
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.defaults({ ease: 'linear'});

    let ww = $(window).width();
    let wh = $(window).height();

    // sc-01
    let sc01Width01 = fn.mob() ? ww : $('.sc-01 .wrapper-01 .ttl-txt').width() + (ww * 0.16);
    let sc01Width02 = fn.mob() ? ww : $('.sc-01 .wrapper-02 .ttl-txt').width() + (ww * 0.16);

    const sc01Txt01 = new SplitText('.sc-01 .wrapper-01 .ttl-txt', { type: 'chars', charsClass: 'char'});
    const sc01Txt02 = new SplitText('.sc-01 .wrapper-02 .ttl-txt', { type: 'chars', charsClass: 'char'});
    const sc01Char01 = sc01Txt01.chars;
    const sc01Char02 = sc01Txt02.chars;

    // 텍스트 모션 감도
    let sc01time01 = fn.mob() ? 0 : 0.25;
    let sc01time02 = fn.mob() ? 0 : 0.25;
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
                scrub:fn.mob() ? 1 : 2,
            }
        })
    })
});