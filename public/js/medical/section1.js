gsap.registerPlugin(ScrollTrigger);
window.addEventListener('resize', function () {
  ScrollTrigger.refresh();
});
$(function () {
  let ww = $(window).width();
  let wh = $(window).height();
  let scrollBar = $(window).outerWidth() - $(document).width();
  let ww02 = ww + scrollBar;
  let s4Diagonal01 = Math.sqrt(ww02 * ww02 + wh * wh);
  let s4Diagonal02 = s4Diagonal01 * 0.118 * 2;
  gsap.set('.sc_needs .rotate_txt', { width: s4Diagonal02 });

  const needs_animation = gsap.timeline({});
  needs_animation.addLabel('t1', 0);
  needs_animation
    .to(
      '.sc_needs .circle_path ',
      {
        clipPath: 'circle(100%)',
        // duration: 300,
        ease: 'power2.inOut',
      },
      't1'
    )
    .to(
      '.sc_needs .rotate_txt',
      {
        opacity: 0,
        // duration: 200,
        ease: 'power2.inOut',
      },
      't1'
    )
    .to(
      '.sc_needs .rotate_txt',
      {
        scale: 5,
        // width: '100%',
        // duration: 300,
        ease: 'power2.inOut',
      },
      't1'
    )
    .to(
      '.sc_needs .txt',
      {
        // y: '-213px',
        // duration: 300,
        ease: 'power2.inOut',
        onUpdate: function () {
          const progress = this.progress();
          const $wrap = $('.sc_needs .txt');
          const $txt = $('.sc_needs .txt h3');

          if (progress < 0.33) {
            $wrap.removeClass('second third').addClass('first');
            $txt.removeClass('on');
            $txt.eq(0).addClass('on');
          } else if (progress < 0.66) {
            $wrap.removeClass('first third').addClass('second');
            $txt.removeClass('on');
            $txt.eq(1).addClass('on');
          } else {
            $wrap.removeClass('first second').addClass('third');
            $txt.removeClass('on');
            $txt.eq(2).addClass('on');
          }
        },
        onReverseComplete: function () {
          const progress = this.progress();
          const $wrap = $('.sc_needs .txt');
          const $txt = $('.sc_needs .txt h3');

          if (progress < 0.33) {
            $wrap.removeClass('second third').addClass('first');
            $txt.removeClass('on');
            $txt.eq(0).addClass('on');
          } else if (progress < 0.66) {
            $wrap.removeClass('first third').addClass('second');
            $txt.removeClass('on');
            $txt.eq(1).addClass('on');
          } else {
            $wrap.removeClass('first second').addClass('third');
            $txt.removeClass('on');
            $txt.eq(2).addClass('on');
          }
        },
      },
      't1'
    );

  ScrollTrigger.create({
    trigger: '.sc_needs .inner',
    start: 'top top',
    end: 'bottom+=3000 bottom',
    pin: true,
    pinSpacing: true,
    scrub: true,
    animation: needs_animation,
    markers: true,
    onEnter: () => {
      $('.sc_needs').addClass('active');
    },
    onLeaveBack: () => {
      $('.sc_needs').removeClass('active');
    },
  });
});

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
$(function () {
  const inquiry_animation = gsap.timeline({});
  //   inquiry_animation.addLabel('t1', 0);
  inquiry_animation.to(
    '.sc_inquiry .txt',
    {
      // y: '-213px',
      //   duration: 300,
      ease: 'power2.inOut',
      onUpdate: function () {
        const progress = this.progress();
        const $change = $('.sc_inquiry .change');
        const $txt = $('.sc_inquiry .change li');
        const $link = $('.sc_inquiry .link_wrap a');

        if (progress < 0.33) {
          $change.removeClass('second third').addClass('first');
          $txt.removeClass('on');
          $txt.eq(0).addClass('on');

          $link.removeClass('on');
        } else if (progress < 0.66) {
          $change.removeClass('first third').addClass('second');
          $txt.removeClass('on');
          $txt.eq(1).addClass('on');
          $link.removeClass('on');
        } else {
          $change.removeClass('first second').addClass('third');
          $link.addClass('on');
        }
      },
      onReverseComplete: function () {
        const progress = this.progress();
        const $change = $('.sc_inquiry .change');
        const $txt = $('.sc_inquiry .change li');
        const $link = $('.sc_inquiry .link_wrap a');

        if (progress < 0.33) {
          $change.removeClass('second third').addClass('first');
          $txt.removeClass('on');
          $txt.eq(0).addClass('on');
          $link.removeClass('on');
        } else if (progress < 0.66) {
          $change.removeClass('first third').addClass('second');
          $txt.removeClass('on');
          $txt.eq(1).addClass('on');
          $link.removeClass('on');
        } else {
          $change.removeClass('first second').addClass('third');
          $link.addClass('on');
        }
      },
    },
    't1'
  );

  ScrollTrigger.create({
    trigger: '.sc_inquiry .s_inner',
    start: 'top top',
    end: 'bottom+=3000 bottom',
    pin: true,
    pinSpacing: true,
    scrub: true,
    animation: inquiry_animation,
    markers: true,
    // onEnter: () => {
    //   $('.sc_inquiry').addClass('active');
    // },
    // onLeaveBack: () => {
    //   $('.sc_inquiry').removeClass('active');
    // },
  });
});
