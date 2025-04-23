// document.addEventListener('astro:page-load', () => {
$(document).ready(function(){

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const grid = document.querySelector('.grid');
    const gridTitle = document.querySelector('.has-mask-fill span')
    
    
    
    const gridWrap = grid.querySelector('.grid-wrap');
        const gridItems = grid.querySelectorAll('.grid__item');
        const gridItemsInner = [...gridItems].map(item => item.querySelector('.grid__item-inner'));
    
        // Define GSAP timeline with ScrollTrigger
        const timeline = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
                trigger: gridWrap,
                start: 'top bottom+=3%',
                end: 'bottom top-=3%',
                scrub: true,
                // markers: true,
            }
        });
    
        // Set CSS properties for type1 animation
        grid.style.setProperty('--grid-width', '100%');
        grid.style.setProperty('--grid-columns', '6');
        grid.style.setProperty('--perspective', '2000px');
        grid.style.setProperty('--grid-inner-scale', '0.8');
    
        // Define type1 animation
        timeline
                .set(gridItems, {
                    transformOrigin: '50% 0%',
                    z: () => gsap.utils.random(-5000,-2000),
                    rotationX: () => gsap.utils.random(-65,-25),
                    filter: 'brightness(10%)'
                })	
                .to(gridItems, {
                    xPercent: () => gsap.utils.random(-150,150),
                    yPercent: () => gsap.utils.random(-300,300),
                    rotationX: 0,
                    filter: 'brightness(110%)'
                }, 0)
                .to(gridWrap, {
                    z: 4500
                }, 0)
                .fromTo(gridItemsInner, {
                    scale: 1.6,
                    opacity:1
                }, {
                    scale: 1,
                    opacity:1
                }, 0)
                .to(gridTitle, {
                    backgroundSize: '200% 100%'
                },"-=0.4");
                
    // Function to apply type1 scroll-triggered animation
    const applyAnimation = () => {
        
    }
    
    });
    