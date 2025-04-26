// gsap.registerPlugin(ScrollTrigger);

$(function () {
  // 전략 섹션 스크립트
  if (window.matchMedia('(min-width: 769px)').matches) {
    const strategy_animation = gsap.timeline({});

    strategy_animation
      .to('.sc_strategy_2', {
        opacity: 1,
        duration: 3,
      })
      .to('.sc_strategy_2', {
        x: 0,
        duration: 10,
        ease: 'power4.inOut',
      })
      .to('.sc_strategy_2 .change', {
        // y: '-213px',
        duration: 15,
        ease: 'none',
        onUpdate: function () {
          const progress = this.progress();
          const $change = $('.sc_strategy_2 .change');
          const $list = $('.sc_strategy_2 .list');

          if (progress < 0.33) {
            $change.removeClass('second third').addClass('first');
            $list.removeClass('on').find('.txt').css('max-height', '0');
            $list.eq(0).addClass('on').find('.txt').css('max-height', '200px');
          } else if (progress < 0.66) {
            $change.removeClass('first third').addClass('second');
            $list.removeClass('on').find('.txt').css('max-height', '0');
            $list.eq(1).addClass('on').find('.txt').css('max-height', '200px');
          } else {
            $change.removeClass('first second').addClass('third');
            $list.removeClass('on').find('.txt').css('max-height', '0');
            $list.eq(2).addClass('on').find('.txt').css('max-height', '200px');
          }
        },
      });

    ScrollTrigger.create({
      trigger: '.sc_strategy',
      start: 'top top',
      end: 'bottom+=3000 bottom',
      pin: true,
      pinSpacing: true,
      scrub: true,
      animation: strategy_animation,
      onEnter: () => {
        $('.sc_strategy_1').addClass('active');
      },
      onEnterBack: () => {
        $('.sc_strategy_1').removeClass('active');
      },
    });
  } else {
    $('.change').addClass('first');
    $('.sc_strategy_2 .list .tit').on('click', function () {
      $(this).closest('.list').toggleClass('on');
      $(this).closest('.list').siblings().removeClass('on');
      let target = $(this).closest('.list').data('target');
      $('.change').removeClass('first second third');
      if (target === 1) {
        $('.change').addClass('first');
      } else if (target === 2) {
        $('.change').addClass('second');
      } else if (target === 3) {
        $('.change').addClass('third');
      }
    });
  }

  // 와커스 섹션 스크립트
  if (window.matchMedia('(min-width: 769px)').matches) {
    ScrollTrigger.create({
      trigger: '.sc_wacus_bg',
      start: 'top top',
      end: 'bottom+=2000 bottom',
      pin: true,
      pinSpacing: true,
      scrub: true,
      animation: gsap.fromTo(
        '.sc_wacus_bg .cover',
        {
          background:
            'linear-gradient(150deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
        },
        {
          background: 'linear-gradient(150deg, #000 0%, rgba(0, 0, 0, 1) 100%)',
          ease: 'none',
        }
      ),
      //   markers: true,
    });
  }
});
