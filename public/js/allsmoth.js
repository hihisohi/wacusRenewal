$(document).ready(function(){
   
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ScrollTrigger.config({
    //     autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    // });

    let smoother = null;
    // Desktop
    if (window.matchMedia("(min-width: 1025px)").matches) {
        smoother = ScrollSmoother.create({
            smooth: 2,
            smoothTouch: true,
        });

    }

    // Tablet & Mobile
    if (window.matchMedia("(max-width: 1024px)").matches) {
        if (smoother) {
            smoother.kill();
        }
    }

});