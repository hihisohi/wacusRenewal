// document.addEventListener('astro:page-load', () => { 
$(document).ready(function(){
    ScrollTrigger.refresh();
    const slidesCount = document.querySelectorAll(".img_nav .swiper-slide").length;
    

   var swiper100 = new Swiper(".img_nav", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
    loopedSlides: 3,
    loopAdditionalSlides: 1,
    allowTouchMove: window.innerWidth <= 768,
    loopedSlides: Math.min(slidesCount, 7), // 동적으로 설정
    centeredSlides: true,
    // autoplay : {
    //     delay:5500,
    // },
});
window.addEventListener('resize', function () {
    var isMobile = window.innerWidth <= 768;
    swiper100.params.allowTouchMove = isMobile;
    swiper100.update(); // Swiper 설정 업데이트
});

var swiper200 = new Swiper(".big_img_list", {
    loop: true,
    spaceBetween: 10,
    allowTouchMove: false, // 터치 밀기 막기
    simulateTouch: false,
    loopedSlides: 3,
    loopAdditionalSlides: 1,
    // loopedSlides: Math.min(slidesCount, 7), // 동일한 설정
    thumbs: {
        swiper: swiper100,
    },
    autoplay : {
        delay:4000,
    },
});

swiper100.on('click', function (swiper) {
    const clickedIndex = swiper.clickedIndex;
    if (clickedIndex !== undefined) {
        const realIndex = swiper.slides[clickedIndex].getAttribute('data-swiper-slide-index');
        swiper100.slideToLoop(realIndex); // 클릭한 슬라이드의 실제 인덱스로 이동
    }
});

swiper200.on('slideChangeTransitionEnd', function () {
    const realIndex = swiper200.realIndex;
    swiper100.slideToLoop(realIndex); // swiper100도 같은 슬라이드로 이동
});

// swiper100.on('slideChangeTransitionEnd', function () {
//     requestAnimationFrame(() => {
//         swiper100.update();
//     });
// });

// FUNCTION ::: 불가능한 링크 이동 막기

const links = document.querySelectorAll('.project_info a');

links.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (item.classList.contains('none')) {
            e.preventDefault(); 
            alert('준비중입니다.'); 
        }
    });
});

});