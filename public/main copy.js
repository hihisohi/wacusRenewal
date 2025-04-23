// gsap.registerPlugin(SplitText, ScrollTrigger,ScrollSmoother);
// let ctx, windowW, windowW2; 

 
// $(document).ready(function(){
//     otherJS();
//     windowW = $(window).innerWidth();
//     // setTimeout(() => {
//         ScrollTrigger.refresh();
//         ctx && ctx.revert();
//         ctx = gsap.context(() => {
//             let tl = gsap.timeline({ 
//                 scrollTrigger: {
//                     trigger: ".section2",
//                     // endTrigger:".s2_con",
//                     start: "top top",
//                     end: "bottom+=4000 bottom",
//                     scrub: true,
//                     pin: true,
//                     // markers:true
//                 }
//             });
//             const path = document.querySelector(".cls-1");
//             const pathLength = path.getTotalLength();
//             const video = document.querySelector('.video-background.TB');
//             const video2 = document.querySelector('.video-background.MB');

//             path.style.strokeDasharray = pathLength;
//             path.style.strokeDashoffset = pathLength;
//             gsap.to(".s2_con", {
//                 background: "tranparent",
//             });
//             gsap.to(video, {
//                 scrollTrigger: {
//                     trigger: ".s2_con",
//                     start: "top top",
//                     // markers: true,
//                     end: "bottom+=3000 bottom",
//                     onEnter: function(){
//                         video.play();
//                     },
//                     onEnterBack: function () {
//                         video.currentTime = 0;
//                         video.play();
//                     },
//                     onLeave: function () {
//                         // video.currentTime = 0;
//                         video.pause();
//                     },
//                     onLeaveBack: function () {
//                         video.currentTime = 0;
//                         video.pause();
//                     },
//                 }
//             });
//             gsap.to(video2, {
//                 scrollTrigger: {
//                     trigger: ".s2_con",
//                     start: "top top",
//                     // markers: true,
//                     end: "bottom+=3000 bottom",
//                     onEnter: function(){
//                         video2.play();
//                     },
//                     onEnterBack: function () {
//                         video2.currentTime = 0;
//                         video2.play();
//                     },
//                     onLeave: function () {
//                         video2.pause();
//                     },
//                     onLeaveBack: function () {
//                         video2.currentTime = 0;
//                         video2.pause();
//                     },
//                 }
//             });
//             gsap.to(path, {
//                 strokeDashoffset: 0, // 0으로 설정하면 원의 길이만큼 stroke가 그려짐
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=100 top",
//                     end: "top+=1000 top",
//                     scrub: 1,
//                     // markers: true
//                 }
//             });

//             var split = new SplitText(".s2_first_txt1", { type: "chars" });
//             gsap.from(split.chars, {
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=800 top",
//                     end: "top+=2800 top",
//                     scrub: 1,
//                     // markers: true,
//                     onEnter: function () {
//                         $('.s2_first_txt_group_1').addClass('on');
//                         $('.s2_first_txt_group_1').removeClass('hide');
//                     },
//                     onEnterBack: function () {
//                         $('.s2_first_txt_group_1').addClass('on');
//                         $('.s2_first_txt_group_1').removeClass('hide');
//                     },
//                     onLeave: function () {
//                         $('.s2_first_txt_group_1').removeClass('on');
//                         $('.s2_first_txt_group_1').addClass('hide');
//                     },
//                     onLeaveBack: function () {
//                         $('.s2_first_txt_group_1').removeClass('on');
//                         $('.s2_first_txt_group_1').addClass('hide');
//                     },
//                 },
//                 duration: 2,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,

//             });

//             gsap.to(".s2_con", {
//                 background: "#131313",
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=2000 top",
//                     end: "top+=2500 top",
//                     scrub: 1,
//                     // markers: true,

//                 },
//             });

//             gsap.to(".s2_second_cir", {
//                 opacity: 1,
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=2400 top",
//                     end: "top+=2500 top",
//                     scrub: 1,
//                     // markers: true,
//                 },
//             });
//             if (window.innerWidth > 768) {
//                 // 이건 피시
//                 gsap.fromTo(".s2_second_cir1",
//                     { x: "-50%",y:"0"},  // 시작 위치
//                     {
//                         x: "-125%", // 도착 위치
//                         immediateRender: false ,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//                 gsap.fromTo(".s2_second_cir2",
//                     { x: "-50%",y:"0"},  // 시작 위치
//                     {
//                         x: "25%", // 도착 위치
//                         immediateRender: false,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//                 // 이게 모바일
//             } else {
//                 gsap.fromTo(".s2_second_cir1",
//                     { y: "-50%" , x: "-50%", z:"0"},  // 시작 위치
//                     {
//                         x: "-50%",
//                         y: "-135%", // 도착 위치
//                         z:"0",
//                         immediateRender: false ,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             //  markers: true,
//                         }
//                     }
//                 );
//                 gsap.fromTo(".s2_second_cir2",
//                     { y: "-50%",  x: "-50%", z:"0"},  // 시작 위치
//                     {
//                         x: "-50%",
//                         y: "35%", // 도착 위치
//                         z:"0",
//                         immediateRender: false,
//                         scrollTrigger: {
//                             trigger: ".s2_tl", 
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//             }



//             gsap.to(".s2_con", {
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=3200 top",
//                     end: "top+=3300 top",
//                     scrub: 1,
//                     // markers: true,
//                     onEnter: function () {
//                         $('.s2_con').addClass("common_txt_on");

//                     },
//                     onLeaveBack: function () {
//                         $('.s2_con').removeClass("common_txt_on");
//                     }
//                 },
//             });

//             // section3

//             var split = new SplitText(".s3_tit", { type: "chars" });
//             gsap.fromTo(split.chars, {
//                 y: 20,
//                 opacity: 0,
//             },{
//                 scrollTrigger: {
//                     trigger: ".section3",
//                     start: "top top+=50%",
//                     end: "top+=200 top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                 },
//                 duration: 2,
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.1,
//             });
//             $('.s3_list_group li').each(function () {
//                 var split2 = new SplitText($(this).find('h4'), { type: "chars" });
//                 var split3 = new SplitText($(this).find('p'), { type: "chars" });
//                 gsap.from($(this).find('.s3_list_img'), {
//                     scrollTrigger: {
//                         trigger: $(this).find('.s3_list_img'),
//                         start: "top-=20% top+=50%",
//                         // end: "top+=300 top+=50%",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     duration: 10,
//                     // width:100,
//                     x: -100,
//                     opacity: 0,
//                     stagger: 0.01,
//                 });
//                 gsap.from(split2.chars, {
//                     scrollTrigger: {
//                         trigger: $(this).find('.s3_list_img'),
//                         start: "top-=20% top+=50%",
//                         // end: "top top",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     duration: 2,
//                     y: -10,
//                     opacity: 0,
//                     stagger: 0.1,

//                 });
//                 gsap.from(split3.chars, {
//                     scrollTrigger: {
//                         trigger: $(this).find('.s3_list_img'),
//                         start: "top-=20% top+=50%",
//                         // end: "top top",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     rotate: '15deg',
//                     duration: 2,
//                     y: -10,
//                     opacity: 0,
//                     stagger: 0.1,

//                 });
//             });

//             // jQuery를 사용하여 각 단어를 <span> 태그로 감싸기
//             $(".s4_txt_group p").each(function () {
//                 var words = $(this).text().split(" ");
//                 $(this).empty();
//                 $.each(words, function (i, word) {
//                     $(this).append($("<span>").text(word + " "));
//                 }.bind(this));
//             });

//             const s4Split = new SplitText($('.s4_split'), { type: "chars" });

//             gsap.from(s4Split.chars, {
//                 scrollTrigger: {
//                     trigger: ".s4_txt_group",
//                     start: "top-=50 bottom-=50%",
//                     end: "top+=200 bottom-=50%",
//                     scrub: true,
//                     // markers: true,
//                 },
//                 duration: 2,
//                 y: -20,
//                 opacity: 0,
//                 stagger: 0.1,

//             });

//             // GSAP 애니메이션 설정
//             let s4_tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".s4_txt_group",
//                     start: "top bottom-=50%",
//                     end: "top+=250 bottom-=50%",
//                     scrub: true,
//                     // markers: true,
//                 },
//             });

//             // 각 <span> 요소에 순차적으로 색 변경 애니메이션 적용
//             s4_tl.to(".s4_txt_group p span", {
//                 duration: 2,
//                 color: "#fff",
//                 stagger: 0.2,  // 각 단어가 0.1초 간격으로 순차적으로 색이 변하도록 설정
//             });

//             /* section5 */
//             gsap.to('.section5', {
//                 scrollTrigger: {
//                     trigger: '.section5',
//                     start: "toptop+=20% top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                     onEnter: function () {
//                         $('.section5').addClass('on');
//                     },
//                     onEnterBack: function () {
//                         $('.section5').addClass('on');
//                     },
//                     onLeave: function () {
//                         $('.section5').removeClass('on');
//                     },
//                     onLeaveBack: function () {
//                         $('.section5').removeClass('on');
//                     },
//                 },
//             });




//             var split = new SplitText(".s5_tit_group h2", { type: "chars" });
//             var split2 = new SplitText(".s5_tit_group p", { type: "chars" });

//             gsap.from(split.chars, {
//                 scrollTrigger: {
//                     trigger: '.section5',
//                     start: "top top+=50%",
//                     end: "top+=20% top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                 },
//                 y: -20,
//                 rotation: '90deg',
//                 opacity: 0,
//                 stagger: 0.2,
//             });
//             gsap.from(split2.chars, {
//                 scrollTrigger: {
//                     trigger: '.section5',
//                     start: "top+=10% top+=50%",
//                     end: "top+=30% top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                 },
//                 y: -10,
//                 // rotation:'90deg',
//                 opacity: 0,
//                 stagger: 0.2,
//             });
//             $('.s5_list_group li').each(function () {
//                 gsap.from($(this), {
//                     scrollTrigger: {
//                         trigger: $(this),
//                         start: "top top+=50%",
//                         end: "top+=30% top+=50%",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     x: '-50%',
//                     opacity: 0,
//                 });
//             });



//             /* section6 */
//             let s6_tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     // endTrigger:".s2_con",
//                     start: "top top",
//                     end: "bottom+=4000 bottom",
//                     scrub: true,
//                     pin: true,
//                     // markers:true
//                 }
//             });

//             const s6Split = new SplitText($('.s6_tit_group1'), { type: "chars" });
//             const s6Split2 = new SplitText($('.s6_tit_group p'), { type: "chars" });
//             gsap.from(s6Split.chars, {
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     start: "top-=50 top",
//                     end: "top+=200 top",
//                     scrub: true,
//                     // markers:true
//                 },
//                 duration: 2,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,
//             });

//             gsap.from(s6Split2.chars, {
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     start: "top-=10 top",
//                     scrub: true,
//                     // markers:true
//                 },
//                 duration: 2,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,
//             });

//             gsap.from('.section6', {
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     start: "top+=30% bottom-=50%",
//                     end: "top+=50% bottom-=50%",
//                     scrub: true,
//                     // markers: true,
//                 },
//                 opacity: 0,

//             });

//             // 원의 전체 길이를 계산하여 strokeDasharray와 strokeDashoffset에 설정
//             const s6_path = document.querySelector(".s6_line");
//             const s6_pathLength = s6_path.getTotalLength();

//             s6_path.style.strokeDasharray = s6_pathLength;
//             s6_path.style.strokeDashoffset = s6_pathLength;

//             /* counter */
//             const num1 = $(".s6_dot_group1 .num");
//             const num2 = $(".s6_dot_group2 .num");
//             const num3 = $(".s6_dot_group3 .num");
//             const num4 = $(".s6_dot_group4 .num");

//             s6_tl
//                 .to(s6_path, { strokeDashoffset: '107%', })
//                 .addLabel("mylabel1")
//                 .to('.s6_dot_group1 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel1")
//                 .to('.s6_dot_group1 .s6_dot_txt_group', { opacity: 1,className:'+=on'}, "mylabel1-=0.5")
//                 .to('.s6_dot_group1',{className:"s6_dot_group s6_dot_group1 on"})
//                 .from(num1, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel1-=0.5")

//                 .to(s6_path, { strokeDashoffset: '82%', })
//                 .addLabel("mylabel2")
//                 .to('.s6_dot_group2 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel2")
//                 .to('.s6_dot_group2 .s6_dot_txt_group', { opacity: 1 }, "mylabel2-=0.5")
//                 .to('.s6_dot_group2',{className:"s6_dot_group s6_dot_group2 on"})
//                 .from(num2, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
                    
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel2-=0.5")

//                 .to(s6_path, { strokeDashoffset: '58%', })
//                 .addLabel("mylabel3")
//                 .to('.s6_dot_group3 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel3")
//                 .to('.s6_dot_group3 .s6_dot_txt_group', { opacity: 1 }, "mylabel3-=0.5")
//                 .to('.s6_dot_group3',{className:"s6_dot_group s6_dot_group3 on"})
//                 .from(num3, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel3-=0.5")

//                 .to(s6_path, { strokeDashoffset: '35%', })
//                 .addLabel("mylabel4")
//                 .to('.s6_dot_group4 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel4")
//                 .to('.s6_dot_group4 .s6_dot_txt_group', { opacity: 1 }, "mylabel4-=0.5")
//                 .to('.s6_dot_group4',{className:"s6_dot_group s6_dot_group4 on"})
//                 .from(num4, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel4-=0.5")

//                 .to(s6_path, { strokeDashoffset: 0, })
//         });
//     // }, 2000);

      
// });

// $(window).resize(function(){
//     windowW2 = $(window).innerWidth();
//     if (windowW - windowW2 !== 0) {
//     setTimeout(() => {
//         window.scrollTo(0, 0);
//         ScrollTrigger.refresh();
//         ctx && ctx.revert();
//         ctx = gsap.context(() => {
//             let tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".section2",
//                     // endTrigger:".s2_con",
//                     start: "top top",
//                     end: "bottom+=4000 bottom",
//                     scrub: true,
//                     pin: true,
//                     // markers:true
//                 }
//             });
//             const path = document.querySelector(".cls-1");
//             const pathLength = path.getTotalLength();
//             const video = document.querySelector('.video-background.TB');
//             const video2 = document.querySelector('.video-background.MB');

//             path.style.strokeDasharray = pathLength;
//             path.style.strokeDashoffset = pathLength;
//             gsap.to(".s2_con", {
//                 background: "tranparent",
//             });
//             gsap.to(video, {
//                 scrollTrigger: {
//                     trigger: ".s2_con",
//                     start: "top top",
//                     // markers: true,
//                     end: "bottom+=3000 bottom",
//                     onEnter: function(){
//                         video.play();
//                     },
//                     onEnterBack: function () {
//                         video.currentTime = 0;
//                         video.play();
//                     },
//                     onLeave: function () {
//                         // video.currentTime = 0;
//                         video.pause();
//                     },
//                     onLeaveBack: function () {
//                         video.currentTime = 0;
//                         video.pause();
//                     },
//                 }
//             });
//             gsap.to(video2, {
//                 scrollTrigger: {
//                     trigger: ".s2_con",
//                     start: "top top",
//                     // markers: true,
//                     end: "bottom+=3000 bottom",
//                     onEnter: function(){
//                         video2.play();
//                     },
//                     onEnterBack: function () {
//                         video2.currentTime = 0;
//                         video2.play();
//                     },
//                     onLeave: function () {
//                         // video.currentTime = 0;
//                         video2.pause();
//                     },
//                     onLeaveBack: function () {
//                         video2.currentTime = 0;
//                         video2.pause();
//                     },
//                 }
//             });
//             gsap.to(path, {
//                 strokeDashoffset: 0, // 0으로 설정하면 원의 길이만큼 stroke가 그려짐
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=100 top",
//                     end: "top+=1000 top",
//                     scrub: 1,
//                     // markers: true
//                 }
//             });

//             var split = new SplitText(".s2_first_txt1", { type: "chars" });
//             gsap.from(split.chars, {
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=800 top",
//                     end: "top+=2800 top",
//                     scrub: 1,
//                     // markers: true,
//                     onEnter: function () {
//                         $('.s2_first_txt_group_1').addClass('on');
//                         $('.s2_first_txt_group_1').removeClass('hide');
//                     },
//                     onEnterBack: function () {
//                         $('.s2_first_txt_group_1').addClass('on');
//                         $('.s2_first_txt_group_1').removeClass('hide');
//                     },
//                     onLeave: function () {
//                         $('.s2_first_txt_group_1').removeClass('on');
//                         $('.s2_first_txt_group_1').addClass('hide');
//                     },
//                     onLeaveBack: function () {
//                         $('.s2_first_txt_group_1').removeClass('on');
//                         $('.s2_first_txt_group_1').addClass('hide');
//                     },
//                 },
//                 duration: 2,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,

//             });

//             gsap.to(".s2_con", {
//                 background: "#131313",
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=2000 top",
//                     end: "top+=2500 top",
//                     scrub: 1,
//                     // markers: true,

//                 },
//             });

//             gsap.to(".s2_second_cir", {
//                 opacity: 1,
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=2400 top",
//                     end: "top+=2500 top",
//                     scrub: 1,
//                     // markers: true,
//                 },
//             });
//             if (window.innerWidth > 768) {
//                 gsap.fromTo(".s2_second_cir1",
//                     { x: "-50%",y:"0"},  // 시작 위치
//                     {
//                         x: "-125%", // 도착 위치
//                         immediateRender: false ,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//                 gsap.fromTo(".s2_second_cir2",
//                     { x: "-50%" ,y:"0"},  // 시작 위치
//                     {
//                         x: "25%", // 도착 위치
//                         immediateRender: false,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//             } else {
//                 gsap.fromTo(".s2_second_cir1",
//                     { y: "-50%" , x: "-50%"},  // 시작 위치
//                     {
//                         y: "-75%", // 도착 위치
//                         immediateRender: false ,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//                 gsap.fromTo(".s2_second_cir2",
//                     { y: "-50%" , x: "-50%"},  // 시작 위치
//                     {   
//                         y: "75%", // 도착 위치
//                         immediateRender: false,
//                         scrollTrigger: {
//                             trigger: ".s2_tl",
//                             start: "top+=2600 top",
//                             end: "top+=2900 top",
//                             scrub: 1,
//                             // markers: true,
//                         }
//                     }
//                 );
//             }



//             gsap.to(".s2_con", {
//                 scrollTrigger: {
//                     trigger: ".s2_tl",
//                     start: "top+=3200 top",
//                     end: "top+=3300 top",
//                     scrub: 1,
//                     // markers: true,
//                     onEnter: function () {
//                         $('.s2_con').addClass("common_txt_on");

//                     },
//                     onLeaveBack: function () {
//                         $('.s2_con').removeClass("common_txt_on");
//                     }
//                 },
//             });

//             // section3

//             var split = new SplitText(".s3_tit", { type: "chars" });
//             gsap.fromTo(split.chars, {
//                 y: 20,
//                 opacity: 0,
//             },{
//                 scrollTrigger: {
//                     trigger: ".section3",
//                     start: "top top+=50%",
//                     end: "top+=200 top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                 },
//                 duration: 2,
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.1,
//             });
//             $('.s3_list_group li').each(function () {
//                 var split2 = new SplitText($(this).find('h4'), { type: "chars" });
//                 var split3 = new SplitText($(this).find('p'), { type: "chars" });
//                 gsap.from($(this).find('.s3_list_img'), {
//                     scrollTrigger: {
//                         trigger: $(this).find('.s3_list_img'),
//                         start: "top-=20% top+=50%",
//                         // end: "top+=300 top+=50%",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     duration: 10,
//                     // width:100,
//                     x: -100,
//                     opacity: 0,
//                     stagger: 0.01,
//                 });
//                 gsap.from(split2.chars, {
//                     scrollTrigger: {
//                         trigger: $(this).find('.s3_list_img'),
//                         start: "top-=20% top+=50%",
//                         // end: "top top",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     duration: 2,
//                     y: -10,
//                     opacity: 0,
//                     stagger: 0.1,

//                 });
//                 gsap.from(split3.chars, {
//                     scrollTrigger: {
//                         trigger: $(this).find('.s3_list_img'),
//                         start: "top-=20% top+=50%",
//                         // end: "top top",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     rotate: '15deg',
//                     duration: 2,
//                     y: -10,
//                     opacity: 0,
//                     stagger: 0.1,

//                 });
//             });

//             // jQuery를 사용하여 각 단어를 <span> 태그로 감싸기
//             $(".s4_txt_group p").each(function () {
//                 var words = $(this).text().split(" ");
//                 $(this).empty();
//                 $.each(words, function (i, word) {
//                     $(this).append($("<span>").text(word + " "));
//                 }.bind(this));
//             });

//             const s4Split = new SplitText($('.s4_split'), { type: "chars" });

//             gsap.from(s4Split.chars, {
//                 scrollTrigger: {
//                     trigger: ".s4_txt_group",
//                     start: "top-=50 bottom-=50%",
//                     end: "top+=200 bottom-=50%",
//                     scrub: true,
//                     // markers: true,
//                 },
//                 duration: 2,
//                 y: -20,
//                 opacity: 0,
//                 stagger: 0.1,

//             });

//             // GSAP 애니메이션 설정
//             let s4_tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".s4_txt_group",
//                     start: "top bottom-=50%",
//                     end: "top+=250 bottom-=50%",
//                     scrub: true,
//                     // markers: true,
//                 },
//             });

//             // 각 <span> 요소에 순차적으로 색 변경 애니메이션 적용
//             s4_tl.to(".s4_txt_group p span", {
//                 duration: 2,
//                 color: "#fff",
//                 stagger: 0.2,  // 각 단어가 0.1초 간격으로 순차적으로 색이 변하도록 설정
//             });

//             /* section5 */
//             gsap.to('.section5', {
//                 scrollTrigger: {
//                     trigger: '.section5',
//                     start: "toptop+=20% top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                     onEnter: function () {
//                         $('.section5').addClass('on');
//                     },
//                     onEnterBack: function () {
//                         $('.section5').addClass('on');
//                     },
//                     onLeave: function () {
//                         $('.section5').removeClass('on');
//                     },
//                     onLeaveBack: function () {
//                         $('.section5').removeClass('on');
//                     },
//                 },
//             });




//             var split = new SplitText(".s5_tit_group h2", { type: "chars" });
//             var split2 = new SplitText(".s5_tit_group p", { type: "chars" });

//             gsap.from(split.chars, {
//                 scrollTrigger: {
//                     trigger: '.section5',
//                     start: "top top+=50%",
//                     end: "top+=20% top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                 },
//                 y: -20,
//                 rotation: '90deg',
//                 opacity: 0,
//                 stagger: 0.2,
//             });
//             gsap.from(split2.chars, {
//                 scrollTrigger: {
//                     trigger: '.section5',
//                     start: "top+=10% top+=50%",
//                     end: "top+=30% top+=50%",
//                     scrub: 1,
//                     // markers: true,
//                 },
//                 y: -10,
//                 // rotation:'90deg',
//                 opacity: 0,
//                 stagger: 0.2,
//             });
//             $('.s5_list_group li').each(function () {
//                 gsap.from($(this), {
//                     scrollTrigger: {
//                         trigger: $(this),
//                         start: "top top+=50%",
//                         end: "top+=30% top+=50%",
//                         scrub: 1,
//                         // markers: true,
//                     },
//                     x: '-50%',
//                     opacity: 0,
//                 });
//             });



//             /* section6 */
//             let s6_tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     // endTrigger:".s2_con",
//                     start: "top top",
//                     end: "bottom+=4000 bottom",
//                     scrub: true,
//                     pin: true,
//                     // markers:true
//                 }
//             });

//             const s6Split = new SplitText($('.s6_tit_group1'), { type: "chars" });
//             const s6Split2 = new SplitText($('.s6_tit_group p'), { type: "chars" });
//             gsap.from(s6Split.chars, {
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     start: "top-=50 top",
//                     end: "top+=200 top",
//                     scrub: true,
//                     // markers:true
//                 },
//                 duration: 2,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,
//             });

//             gsap.from(s6Split2.chars, {
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     start: "top-=10 top",
//                     scrub: true,
//                     // markers:true
//                 },
//                 duration: 2,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,
//             });

//             gsap.from('.section6', {
//                 scrollTrigger: {
//                     trigger: ".section6",
//                     start: "top+=30% bottom-=50%",
//                     end: "top+=50% bottom-=50%",
//                     scrub: true,
//                     // markers: true,
//                 },
//                 opacity: 0,

//             });

//             // 원의 전체 길이를 계산하여 strokeDasharray와 strokeDashoffset에 설정
//             const s6_path = document.querySelector(".s6_line");
//             const s6_pathLength = s6_path.getTotalLength();

//             s6_path.style.strokeDasharray = s6_pathLength;
//             s6_path.style.strokeDashoffset = s6_pathLength;
//             // console.log('s6_pathLength='+s6_pathLength);
//             // gsap.to(s6_path, {
//             //     strokeDashoffset: 0, // 0으로 설정하면 원의 길이만큼 stroke가 그려짐
//             //     scrollTrigger: {
//             //         trigger: ".s6_tl",
//             //         start: "top top",
//             //         end: "top+=4000 top",
//             //         scrub: 1,
//             //         markers: true
//             //     }
//             // });

//             /* counter */
//             const num1 = $(".s6_dot_group1 .num");
//             const num2 = $(".s6_dot_group2 .num");
//             const num3 = $(".s6_dot_group3 .num");
//             const num4 = $(".s6_dot_group4 .num");

//             // gsap.from(num1, {
//             //   textContent: 0,
//             //   duration: 4,
//             //   ease: Power1.easeIn,
//             //   snap: { textContent: 1 },
//             //   stagger: 0.5,
//             //   // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//             // });


//             s6_tl
//                 .to(s6_path, { strokeDashoffset: '107%', })
//                 .addLabel("mylabel1")
//                 .to('.s6_dot_group1 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel1")
//                 .to('.s6_dot_group1 .s6_dot_txt_group', { opacity: 1,className:'+=on'}, "mylabel1-=0.5")
//                 .to('.s6_dot_group1',{className:"s6_dot_group s6_dot_group1 on"})
//                 .from(num1, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel1-=0.5")

//                 .to(s6_path, { strokeDashoffset: '82%', })
//                 .addLabel("mylabel2")
//                 .to('.s6_dot_group2 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel2")
//                 .to('.s6_dot_group2 .s6_dot_txt_group', { opacity: 1 }, "mylabel2-=0.5")
//                 .to('.s6_dot_group2',{className:"s6_dot_group s6_dot_group2 on"})
//                 .from(num2, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
                    
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel2-=0.5")

//                 .to(s6_path, { strokeDashoffset: '58%', })
//                 .addLabel("mylabel3")
//                 .to('.s6_dot_group3 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel3")
//                 .to('.s6_dot_group3 .s6_dot_txt_group', { opacity: 1 }, "mylabel3-=0.5")
//                 .to('.s6_dot_group3',{className:"s6_dot_group s6_dot_group3 on"})
//                 .from(num3, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel3-=0.5")

//                 .to(s6_path, { strokeDashoffset: '35%', })
//                 .addLabel("mylabel4")
//                 .to('.s6_dot_group4 .s6_dot', { backgroundColor: "#00D0FF" }, "mylabel4")
//                 .to('.s6_dot_group4 .s6_dot_txt_group', { opacity: 1 }, "mylabel4-=0.5")
//                 .to('.s6_dot_group4',{className:"s6_dot_group s6_dot_group4 on"})
//                 .from(num4, {
//                     textContent: 0,
//                     duration: 2,
//                     ease: Power1.easeIn,
//                     snap: { textContent: 1 },
//                     stagger: 0.5,
//                     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//                 }, "mylabel4-=0.5")

//                 .to(s6_path, { strokeDashoffset: 0, })
//         });
//     // }, 2000);
//     }, 1000);
//     };
//     windowW = $(window).innerWidth();
// });

// function otherJS() {
//     /* section7 */
//     $(".s7_con_group").click(function () {
//         if ($(this).hasClass('on') == false) {
//             $(".s7_con_group").removeClass("on");
//             $(this).addClass("on");
//             const h3Text = $(this).find('h3');
//             var s7split = new SplitText($(this).find('h2'), { type: "chars" });
//             var s7split2 = new SplitText($(this).find('p'), { type: "chars" });
//             gsap.from(s7split.chars, {
//                 duration: 1,
//                 y: 20,
//                 opacity: 0,
//                 stagger: 0.1,
//             });
//             gsap.from(h3Text, {
//                 duration: 1,
//                 x: -40,
//                 opacity: 0,
//                 stagger: 0.1,
//             });
//             gsap.from(s7split2.chars, {
//                 duration: 1,
//                 y: 5,
//                 opacity: 0,
//                 stagger: 0.01,
//             });
//         }
//     })

//     /* section08 */
//     $(document).on('click', '.fna_list_group li', function () {
//         if ($(this).hasClass("on")) {
//             return; // 클릭 이벤트 종료
//         }
//         // 활성화 클래스 변경
//         $(".fna_list_group li").removeClass("on");
//         $(this).addClass("on");
    
//         // 모든 fna_answer_group을 슬라이드 업
//         $(".fna_list_group li").find('.fna_answer_group').stop(true, true).slideUp(300);
    
//         // 클릭한 요소의 fna_answer_group을 슬라이드 다운
//         $(this).find('.fna_answer_group').stop(true, true).slideDown(300);
//     });



    


//     // 첫 번째 선택 항목이 선택되었을 때 다음 단계 활성화
//     $(".s9_select1 li").on("click", function () {
//         $(this).toggleClass("on"); // 복수 선택 가능하도록 toggle 기능

//         if ($(".s9_select1 li.on").length > 0) {
//             $(".s9_contact_list").eq(1).addClass("on"); // 두 번째 선택 항목 활성화
//         } else {
//             // 첫 번째 선택이 모두 해제되면 이후 단계 비활성화
//             $(".s9_contact_list").slice(1, 4).removeClass("on");
//             $(".s9_contact_list .s9_select li").removeClass("on"); // 선택 초기화
//             $(".next").removeClass("on"); // NEXT 버튼 비활성화
//         }
//         checkAllSteps();

//         if ($('.section9').hasClass('contact_on')) {
//             $('#robot').addClass('hide');
//         } else {
//             $('#robot').removeClass('hide');
//         };
//     });

//     // 두 번째부터 네 번째까지는 단일 선택
//     $(".s9_contact_list:not(:first) .s9_select li").on("click", function () {
//         const $list = $(this).closest(".s9_select");
//         $list.find("li").removeClass("on"); // 다른 선택을 비활성화
//         $(this).addClass("on");

//         // 현재 단계의 선택 여부에 따라 다음 단계 활성화
//         const index = $(this).closest(".s9_contact_list").index();
//         if (index < 3 && $(this).hasClass("on")) {
//             $(".s9_contact_list").eq(index + 1).addClass("on");
//         }
//         checkAllSteps();
//     });

//     // 모든 단계가 완료되면 NEXT 버튼 활성화
//     function checkAllSteps() {
//         if (
//             $(".s9_contact_list").eq(0).find("li.on").length > 0 &&
//             $(".s9_contact_list").eq(1).find("li.on").length > 0 &&
//             $(".s9_contact_list").eq(2).find("li.on").length > 0 &&
//             $(".s9_contact_list").eq(3).find("li.on").length > 0
//         ) {
//             $(".next").addClass("on");
//         } else {
//             $(".next").removeClass("on");
//         }
//     }


//     $(document).on("click", ".next.on", function () {
//         $(".s9_contact_bx_group").addClass("next_on");
//     });

//     $(".prev").click(function () {
//         $(".s9_contact_bx_group").removeClass("next_on")
//     })
//     $(".section9 .close, .s9_filter").click(function () {
//         $(".section9").removeClass("contact_on")
//         if ($('.section9').hasClass('contact_on')) {
//             $('#robot').addClass('hide');
//         } else {
//             $('#robot').removeClass('hide');
//         };
//     })
//     $(".contact_btn").click(function () {
//         $(".section9").addClass("contact_on");
//         if ($('.section9').hasClass('contact_on')) {
//             $('#robot').addClass('hide');
//         } else {
//             $('#robot').removeClass('hide');
//         };
//     })
// }



