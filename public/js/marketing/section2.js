// document.addEventListener('astro:page-load', () => {
    $(document).ready(function(){
    // 초침 애니메이션
        function startClock() {
        const secLine = document.querySelector('.sec_line_2');
        let seconds = 0; // 현재 초

        setInterval(() => {
            seconds = (seconds + 1) % 60; // 0~59까지 반복
            const degree = seconds * 6; // 초마다 6도씩 회전 (360/60 = 6)
            secLine.style.transform = `rotate(${degree}deg)`;
        }, 1000); // 1초마다 업데이트
        }

        // 실행
        startClock();
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);

        
   

    $(document).ready(function() {
        // 초기 데이터 값 설정
        var initialNum = 1;
        $('.rotatino_num').attr('data-num', initialNum); // 기본 data-num 값 설정

        // 기본 transform 값 (처음 상태 유지)
        updateTransforms(initialNum);

        // ._1 요소에만 .on 클래스 초기 설정 (맨 처음에는 첫 번째 ._1에만 .on 클래스를 추가)
        updateOnClass(initialNum);

        // 스크롤 트리거 설정


        gsap.fromTo('.mark_se_3 .left', {
            x: -200, // 초기 위치를 왼쪽으로 설정
            opacity: 0 // 처음에 보이지 않게 설정
        }, {
            x: 0, // 오른쪽으로 이동
            opacity: 1, // 보이게 설정
            duration: 1, // 애니메이션 지속 시간
            scrollTrigger: {
                trigger: '.mark_se_3',
                start: 'top 50%', // 스크롤이 mark_se_3의 절반에 도달했을 때 애니메이션 시작
                end: 'bottom 50%', // mark_se_3의 절반 지점에서 끝나도록 설정
                scrub: true, // 스크롤에 따라 애니메이션이 진행되도록 설정
            }
        });
        
        gsap.fromTo('.mark_se_3 .right_nav', {
            x: 200, // 초기 위치를 오른쪽으로 설정
            opacity: 0 // 처음에 보이지 않게 설정
        }, {
            x: 0, // 왼쪽으로 이동
            opacity: 1, // 보이게 설정
            duration: 1, // 애니메이션 지속 시간
            scrollTrigger: {
                trigger: '.mark_se_3',
                start: 'top 50%', // 스크롤이 mark_se_3의 절반에 도달했을 때 애니메이션 시작
                end: 'bottom 50%', // mark_se_3의 절반 지점에서 끝나도록 설정
                scrub: true, // 스크롤에 따라 애니메이션이 진행되도록 설정
            }
        });


        
        gsap.to('.mark_se_3', {
            scrollTrigger: {
            trigger: '.mark_se_3', // trigger 요소
            pin: true, // 스크롤 시 .mark_se_3 고정
            start: 'top top', // 스크롤 시작 위치
            end: () => (window.matchMedia('(max-width: 900px)').matches ? '+=3500' : '+=7000'), // 스크롤 끝 위치 (7000px 만큼 스크롤)
            scrub: true, // 스크롤에 따라 애니메이션이 진행되도록 설정
            // markers:true,
            onUpdate: (self) => {
                // 스크롤에 따른 data-num 변경
                let isSmallScreen = window.matchMedia('(max-width: 900px)').matches;
                let scrollPosition = self.progress * (isSmallScreen ? 3500 : 7000); // 스크롤 위치 계산
                let step = isSmallScreen ? 500 : 1000; // 증가 간격 설정
                let newNum = Math.floor(scrollPosition / step) + 1; // 증가 간격에 따라 num 계산

                // data-num 값 업데이트
                $('.rotatino_num').attr('data-num', newNum);
                
                // 추가적으로, 각 li의 transform을 스크롤 위치에 맞춰서 변경
                updateTransforms(newNum);

                // ._1 요소에만 .on 클래스를 data-num에 맞게 추가/제거
                updateOnClass(newNum);

                   // .rotatino_text에 대한 visibility 처리
                updateTextVisibility(newNum);

                updateNavClass(newNum);
            }
            }
        });



        // li의 transform을 data-num에 맞게 업데이트하는 함수
        function updateTransforms(num) {
            const isSmallScreen = window.matchMedia('(max-width: 900px)').matches;

            $('.rotatino_num li').each(function(index) {
                let initialRotate = isSmallScreen ? -90 + 25 * index : 25 * index;
                let newRotate = initialRotate - 25 * (num - 1);
                $(this).css('transform', 'translate(-50%, -50%) rotate(' + newRotate + 'deg)');
            });
            }

        // ._1 요소에 .on 클래스를 data-num에 맞게 추가/제거하는 함수
        function updateOnClass(num) {
            $('.rotatino_num li').each(function(index) {
            var _1Element = $(this).find('._1'); // 각 li 내의 ._1 요소 찾기
            if (index + 1 === num) {
                // data-num과 일치하는 li의 ._1 요소에만 .on 클래스 추가
                _1Element.addClass('on');
            } else {
                // 일치하지 않는 ._1 요소에 .on 클래스 제거
                _1Element.removeClass('on');
            }
            });
        }

        function updateTextVisibility(num) {
        $('.rotatino_text').each(function() {
            var roTextNum = $(this).data('rotext');
            if (roTextNum === num) {
                $(this).css('display', 'block'); // 현재 num에 해당하는 텍스트만 보이게 설정

                // 추가된 부분: 텍스트가 보일 때 타이핑 효과 추가
                // 타이핑 애니메이션 적용
                var textBox = $(this).find('.text_box');
      
                    // h4 태그에 대해 타이핑 애니메이션
                    var h4 = textBox.find('h4');
                    if (h4.length > 0 && !h4.hasClass('typed')) {
                        h4.addClass('typed');
                        var h4TextContent = h4.text();
                        h4.html(""); // 기존 텍스트 지우기
                        var h4SplitText = h4TextContent.split(""); // 텍스트 분할
                        for (var i = 0; i < h4SplitText.length; i++) {
                        h4.append("<span>" + h4SplitText[i] + "</span>");
                        }

                        // 타이핑 애니메이션
                        gsap.fromTo(h4.find('span'), {
                        opacity: 0,
                        x: 10
                        }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.1,
                        stagger: 0.15,
                        onComplete: function() {
                                // h4 타이핑이 끝난 후 p 애니메이션 시작
                                var p = textBox.find('p');
                                gsap.fromTo(p, {
                                    opacity: 0,
                                    y: 20
                                }, {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.5,
                                });
                            }
                        });
                    }

                    } else {
                    $(this).css('display', 'none');
                    }
                });
            }

        function updateNavClass(num) {
            $('.right_nav li').each(function() {
                var navNum = $(this).data('nav'); // 각 li의 data-nav 값 확인
                if (navNum === num) {
                // data-num 값과 일치하면 .on 클래스 추가
                $(this).addClass('on');
                } else {
                // 일치하지 않으면 .on 클래스 제거
                $(this).removeClass('on');
                }
            });
            }

        });

    })


