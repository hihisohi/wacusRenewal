let ctx3
// document.addEventListener('astro:page-load', () => {
$(document).ready(function(){
    ctx3 && ctx3.revert();
    ctx3 = gsap.context(() => {
        const titleSplit1 =  new SplitText(".s2 .typo-ani", { type: "words, chars" });
        const titleSplit2 =  new SplitText(".s2 .sub", { type: "words, chars" });

        const textAni = gsap.timeline({
            ease: "none",
        });
        textAni.from(titleSplit1.chars, {
            opacity: 0,
            y: 30,
            rotate: -10,
            stagger: 0.05,   
        }).from(titleSplit2.chars, {
            opacity: 0,
            stagger: 0.02,   
        }).from('.recruit-slide-box', {
            opacity: 0,
            y: 80,
        },"-=0.3")

        ScrollTrigger.create({
            trigger: '.s2',
            start: 'top-=20% center',
            end: 'top+=400',
            animation: textAni,
            pin: false,
            pinSpacing: false,
            // markers: true,
            // scrub: true,
        })

        const scrollRef = document.querySelector(".recruit-slide-container");
        const slideWrapRef = document.querySelector(".recruit-slide-wrap");
        const slideBoxRef = document.querySelector(".recruit-slide-box");
    
        let isMouseDown = false;
        let isTouchDown = false;
        let startPos = 0;
        let endPos = 0;
        let motionVal = 0;
        let slideScroll = 0;
        let isDragging = false; // 드래그 상태를 추적하는 변수 추가
    
        const handleMouseMove = throttle((e) => {
            if (!isDragging) return; // 드래그 중이 아닐 때는 처리하지 않음
            e.stopPropagation();
            endPos = e.clientX;
        }, 0);
    
        const handleTouchMove = throttle((e) => {
            if (!isDragging) return; // 드래그 중이 아닐 때는 처리하지 않음
            e.stopPropagation();
            endPos = e.touches[0].clientX;
        }, 0);
    
        const handleMouseDown = (e) => {
            isMouseDown = true;
            isDragging = false; // 드래그 시작 시 초기화
            startPos = e.clientX;
        };
    
        const handleTouchStart = (e) => {
            isTouchDown = true;
            isDragging = false; // 드래그 시작 시 초기화
            startPos = e.touches[0].clientX;
        };
    
        function setSlide() {
            const recruitSlides = document.querySelectorAll('.recruit-slide');
            const z = Math.round(scrollRef.offsetHeight / 2 / Math.tan(Math.PI / recruitSlides.length));
    
            scrollRef.style.perspective = `${z * 2}px`;
            scrollRef.style.transformStyle = "preserve-3d";
    
            recruitSlides.forEach((el, idx) => {
                el.style.transform = `rotateY(${(360 / recruitSlides.length) * idx}deg) translateZ(${z}px)`;
                el.style.pointerEvents = 'auto'; // 호버 이벤트를 위해 pointer-events 활성화
            });
    
            slideWrapRef.style.transform = `translateZ(${z}px)`;
            slideWrapRef.style.pointerEvents = 'auto'; // 호버 이벤트를 위해 pointer-events 활성화
        }
    
        setSlide();
        window.addEventListener("resize", setSlide);
    
        const handleScroll = throttle((e) => {
            if (isDragging) return; // 드래그 중일 때는 스크롤 처리하지 않음
            motionVal += e.deltaY < 0 ? -Math.abs(e.deltaY) * 0.1 : Math.abs(e.deltaY) * 0.1;
            slideScroll = motionVal;
            
            gsap.to(slideWrapRef, {
                rotationY: slideScroll,
                duration: 1,
                ease: "elastic.out(1, 0.75)",
                onComplete: () => {
                    isDragging = false; // 애니메이션 완료 후 드래그 상태 초기화
                }
            });
        }, 0);
    
        window.addEventListener('wheel', handleScroll);
    
        document.addEventListener('touchmove', (e) => {
            if (isTouchDown) {
                handleTouchMove(e);
                isDragging = true; // 드래그 상태 설정
                
                if(window.innerWidth < 500) {
                    motionVal += (startPos - endPos) * 0.2;
                } else {
                    motionVal += (startPos - endPos) * 0.05;
                }
                slideScroll = motionVal;
                
                gsap.to(slideWrapRef, {
                    rotationY: slideScroll,
                    duration: 1,
                    ease: "elastic.out(1, 0.75)",
                    onComplete: () => {
                        isDragging = false; // 애니메이션 완료 후 드래그 상태 초기화
                    }
                });
            }
        });
    
        slideBoxRef.addEventListener('mousedown', handleMouseDown);
        
        document.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                handleMouseMove(e);
                isDragging = true; // 드래그 상태 설정
                motionVal += (startPos - endPos) * 0.05;
                slideScroll = motionVal;
                
                gsap.to(slideWrapRef, {
                    rotationY: slideScroll,
                    duration: 1,
                    ease: "elastic.out(1, 0.75)",
                    onComplete: () => {
                        isDragging = false; // 애니메이션 완료 후 드래그 상태 초기화
                    }
                });
            }
        });
    
        slideBoxRef.addEventListener('touchstart', handleTouchStart);
        
        document.addEventListener('touchend', () => {
            isTouchDown = false;
            isDragging = false; // 터치 종료 시 드래그 상태 초기화
        });
    
        document.addEventListener('mouseup', () => {
            isMouseDown = false;
            isDragging = false; // 마우스 업 시 드래그 상태 초기화
        });
    
        // 스로틀링 함수
        function throttle(func, delay) {
            let lastCall = 0;
            return function (...args) {
                const now = new Date().getTime();
                if (now - lastCall < delay) return;  // 지연 시간이 지나지 않으면 함수 호출 방지
                lastCall = now;  // 마지막 호출 시간 업데이트
                return func(...args);  // 함수 호출
            };
        }
    });
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 2000);


  
    function updateMouseTracking() {
        if (window.innerWidth > 768) {
            // 768px 초과일 때만 기능 활성화

            let $followText = $(".follow_text");
                let $changeText = $(".change_text"); // 변경할 텍스트 요소
        
                $(".recruit-slide").on("mouseenter", function () {
                    $followText.removeClass('hide');
                    let $slideContent = $(this).find(".slide-content"); // 현재 li 내부의 .slide-content 요소
                    let dataIdx = $slideContent.data("idx");
                    if (dataIdx === 0) {
                        $changeText.text("SEO로 검색 상위 노출을 선점하고, 더 많은 고객을 확보하세요");
                    } else if (dataIdx === 1) {
                        $changeText.text("체계적인 기획으로 성공을 향한 방향을 제시합니다");
                    } else if (dataIdx === 2) {
                        $changeText.text("최신 트렌드와 기술을 반영한 고퀄리티 웹 사이트를 제작하세요");
                    } else if (dataIdx === 3) {
                        $changeText.text("웹 개발로 더 빠르고 효율적인 온라인 경험을 제공합니다");
                    } else if (dataIdx === 4) {
                        $changeText.text("완성도 높은 퍼블리싱으로 브랜드의 가치를 극대화하세요");
                    } else if (dataIdx === 5) {
                        $changeText.text("차별화된 서비스로 고객의 기대를 뛰어넘는 가치를 제공합니다");
                    }
                    $(".follow_text").css("opacity","1")
                    // $(this).append($followText); // 해당 li 안으로 이동
                    $followText.show(); // 보이게 설정
                });
                $(".recruit-slide").on("mouseleave", function () {
                    $followText.addClass('hide');
                });



            $('.recruit-slide-box').on('mousemove', function(e) {
                let targetArea = $(this).offset(); // 특정 구역의 위치를 가져옴
                let mouseX = e.pageX - targetArea.left - 10 ; // 구역 내에서의 X좌표
                let mouseY = e.pageY - targetArea.top - 10;  // 구역 내에서의 Y좌표

                let $cursor = $(' .follow_text');
                $cursor.css({
                    left: mouseX + 'px',
                    top: mouseY + 'px',
                    display: 'block' // .btn 요소를 나타나게 함
                });
                
            });
        } else {
            // 768px 이하일 때는 기능 비활성화
            $('.recruit-slide-box').off('mousemove'); // 이벤트 핸들러 제거
            $('.follow_text').css('display', 'none'); // .btn 숨기기
        }
    }

    // 초기화 및 리사이즈 이벤트에 대응
    updateMouseTracking();
    $(window).on('resize', function() {
        updateMouseTracking();
    });


    const moSwiper = new Swiper(".serviceSwiper", {
        slidesPerView: 1.5,
        spaceBetween: 25,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    
});
document.addEventListener('astro:before-swap', () => {
    ctx3.revert();
});

