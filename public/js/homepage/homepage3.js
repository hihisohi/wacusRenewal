// 마우스 따라다니는 선
$(document).ready(function () {
    // 브라우저의 크기에 맞게 막대의 크기 설정
    // function updateBarSizes() {
    //     $('.horizontal-bar').css({
    //         width: $('.line_mouse_section').width() + 'px'  // 가로 막대 길이는 line_mouse_section의 가로 크기
    //     });
    //     $('.vertical-bar').css({
    //         height: $('.line_mouse_section').height() + 'px' // 세로 막대 길이는 line_mouse_section의 세로 크기
    //     });
    // }

    // 화면 크기가 900px 이상일 때만 실행
    function checkWindowSize() {
        if ($(window).width() > 900) {
            // 초기 크기 설정
            updateBarSizes();

            // 브라우저 크기 변경 시 막대 크기 업데이트
            $(window).resize(function() {
                if ($(window).width() > 900) {
                    updateBarSizes();
                }
            });

            // .line_mouse_section 내에서만 마우스 움직임에 따라 막대 위치 조정
            // $('.line_mouse_section').mousemove(function(e) {
            //     var offsetX = $(this).offset().left; // .line_mouse_section의 왼쪽 위치
            //     var offsetY = $(this).offset().top;  // .line_mouse_section의 위쪽 위치
            //     var mouseX = e.pageX - offsetX; // 섹션 내 마우스 X 좌표
            //     var mouseY = e.pageY - offsetY; // 섹션 내 마우스 Y 좌표

            //     // 가로 막대 위치: 마우스 Y 좌표를 기준으로
            //     $('.horizontal-bar').css({
            //         left: 0, // 가로 막대는 섹션의 왼쪽 끝에 위치
            //         top: mouseY - 5 + 'px' // 마우스 Y 좌표를 기준으로
            //     });

            //     // 세로 막대 위치: 마우스 X 좌표를 기준으로
            //     $('.vertical-bar').css({
            //         left: mouseX - 5 + 'px', // 마우스 X 좌표를 기준으로
            //         top: 0 // 세로 막대는 섹션의 위쪽 끝에 위치
            //     });
                
            // });
        }
    }

    // 초기 체크
    checkWindowSize();

    // 윈도우 크기 변경 시 체크
    $(window).resize(function() {
        checkWindowSize();
    });
});
// 오른쪽 글씨 색 채워지기 
    gsap.registerPlugin(SplitText, ScrollTrigger);
    let ctx4
    // document.addEventListener('astro:page-load', () => {
    $(document).ready(function(){
        // TEXT ANI
        ctx4 && ctx4.revert();
        ctx4 = gsap.context(() => {
            ScrollTrigger.refresh();
            const splitText = new SplitText(".sec2 .right p", { type: "words, chars" });
            const textAni = gsap.timeline({})
            textAni.to(splitText.chars, {
                opacity : 1,
                stagger: 0.05,
                duration: 2,
                ease: "none",
                // y: 50,
            })
            ScrollTrigger.create({
                trigger: '.sec2',
                start: 'top center',
                end: 'bottom center',
                animation: textAni,
                pin: false,
                pinSpacing: false,
                // markers: true,
                scrub: true,
            })
        });
        document.addEventListener('astro:before-swap', () => {
            ctx4.revert();
        });
    });



// import * as THREE from 'three';

// // import Stats from 'three/addons/libs/stats.module.js';

// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
// import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
// import { GUI } from 'dat.gui';

// window.onload = () => {

//     const stoneEle = document.querySelector('#stone');

//     if (stoneEle) {
//         create3D('stone', 1, 0, 0.5); // 모델&ID명, 애니메이션숫자, Y위치, 크기
//         create3D('stoneRe', 1, 0, 0.5); // 모델&ID명, 애니메이션숫자, Y위치, 크기
//     }
// };

    
// function create3D(e, i, p, s) {

//     let mixer, windowW, windowW2;
//     windowW = $(window).innerWidth();
//     const clock = new THREE.Clock();
//     const container = document.getElementById(e);
//     // console.log(container);
//     // const stats = new Stats();
//     // container.appendChild( stats.dom );

//     let createWidth = $('#' + e).innerWidth();
//     let createHeight = $('#' + e).innerHeight();

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(createWidth, createHeight);
//     container.appendChild(renderer.domElement);

//     const pmremGenerator = new THREE.PMREMGenerator(renderer);

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);
//     scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

//     // light
//     const light = new THREE.PointLight(0xffffff, 50, 300);
//     light.position.set(2, 5, 1);
//     scene.add(light);
//     light.castShadow = true;

//     const camera = new THREE.PerspectiveCamera(20, createWidth / createHeight, 1, 100);
//     camera.position.set(15, 7, 8);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.target.set(0, 2, 0);
//     controls.update();
//     controls.enablePan = false;
//     controls.enableDamping = false;
//     controls.enableZoom = false;
//     controls.enableRotate = false;

//     const planeSize = 50;
//     const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
//     const planeMat = new THREE.MeshPhongMaterial({
//         color: 0x000000,
//         side: THREE.DoubleSide,
//     });
//     const plane = new THREE.Mesh(planeGeo, planeMat);
//     plane.rotation.x = Math.PI * -0.5;
//     scene.add(plane);
//     plane.receiveShadow = true;

//     const loader = new GLTFLoader();
//     loader.load('/@fs/home/ubuntu/wacus/src/assets/models/gltf/web/test_pyramid_3.glb', function (gltf) {
//             new RGBELoader().load('/@fs/home/ubuntu/wacus/src/assets/textures/light_4.hdr', function (texture) {
//                 texture.mapping = THREE.EquirectangularReflectionMapping;
//                 scene.environment = texture;
//                 scene.environmentIntensity = 1.5;
//                 scene.environmentRotation.set(4, 2, 1);
//             });

//             const model = gltf.scene;
//             model.position.set(0, p, 0);
//             model.scale.set(s, s, s);
//             scene.add(model);
//             model.rotation.y = 2;
//             model.visible = true;
//             mixer = new THREE.AnimationMixer(model);
//             for (let f = 0; f < i; f++) {
//                 mixer.clipAction(gltf.animations[f]).play();
//             }
//             model.castShadow = true;
//             renderer.setAnimationLoop(animate);

//             // Initial visibility check
//             visibleCheck();
//             $(window).scroll(function () {
//                 visibleCheck();
//             });

//             function visibleCheck() {
//                 model.visible = true;
//                 let wt = $(window).scrollTop();
//                 let wb = wt + $(window).innerHeight();
//                 let st = $('.section3').position().top; // 동적으로 업데이트
//                 let sh = $('.section3').outerHeight();
//                 let sb = st + sh;

//                 if (wt < sb && wb > st) {
//                     model.visible = true;
//                 } else {
//                     model.visible = false;
//                 }
//             }

//         }, undefined, function (e) {
//             console.error(e);
//     });

//     $(window).resize(function () {
//         windowW2 = $(window).innerWidth();
//         if (windowW - windowW2 !== 0) {
//             setTimeout(() => {
//                 createWidth = $('#' + e).innerWidth();
//                 createHeight = $('#' + e).innerHeight();
//                 camera.aspect = createWidth / createHeight;
//                 camera.updateProjectionMatrix();
//                 $('#' + e + ' canvas').attr('style', 'display: block; width: ' + createWidth + 'px; height: ' + createHeight + 'px; touch-action: none;');
//                 renderer.setSize(createWidth, createHeight);
//             }, 500);
//         }
//         windowW = $(window).innerWidth();
//     });

//     function animate() {
//         const delta = clock.getDelta();
//         mixer.update(delta);
//         controls.update();
//         renderer.render(scene, camera);
//     }
// }
