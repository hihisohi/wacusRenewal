
function gsapToScroll(e) {
    gsap.to(window, { duration: 3, scrollTo: e });
};

//스크롤방향 감지해서 header 숨기기

let lastScroll = 0;
$(window).scroll(function () {
    let nowScroll = $(this).scrollTop();
    if (nowScroll > lastScroll) {
        $('header').addClass('hide');
    } else {
        if ($('header').hasClass('hide')) {
            $('header').removeClass('hide');
        }
    }
    if (nowScroll > 0) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
    lastScroll = nowScroll; // 현재 스크롤 위치 할당
});

//마우스 위치 80이내면 헤더 꺼내기
$(document).ready(function () {
    $(window).mousemove(function (e) {
        if (e.clientY < 80) {
            if ($('header').hasClass('hide')) {
                $('header').removeClass('hide');
            }
        }
    });
});


//마우스 위치 80이내면 헤더 꺼내기
$(document).ready(function () {
    $(window).mousemove(function (e) {
        if (e.clientY < 80) {
            if ($('header').hasClass('hide')) {
                $('header').removeClass('hide');
            }
        }
    });
});




// 햄버거 버튼
$(".ham").on("click", function () {
    $(".menu_box").toggleClass("open");
    $(this).toggleClass("open");
})

//메인 네비 위치 표시 
$(document).ready(function(){
    let leftM = 0;
    $('header .nav_list li').mouseenter(function(){
        let navW = 0;
        var indexNb = $(this).index();
        var navLiW = $(this).innerWidth();
        for(let i = 0; i < indexNb;i++) {
            navW += $('header .nav_list li').eq(i).innerWidth();
        };
        $('header .nav_list').attr('style','--left:'+navW+'px;--width:'+navLiW+'px;');

    })
})
   

// 네비에 올리면 메뉴오픈
$(document).ready(function(){
    $('header .nav_list, .menu_box').hover(
        function(){
            if($(window).innerWidth() > 1024) {
                $('.menu_box').addClass('open');
            }
        },
        function(){
            if($(window).innerWidth() > 1024) {
                $('.menu_box').removeClass('open');
            }
        }
    );
    $(window).scroll(function () { 
        if($(window).innerWidth() > 1024) {
            $('.menu_box').removeClass('open');
        }
    });
});