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
