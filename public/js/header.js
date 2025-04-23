
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

   

