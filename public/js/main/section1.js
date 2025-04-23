import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

let camera, scene, renderer, pointLight, newLight, model, model2;

// Window size-related variables
let windowW = window.innerWidth;

// Initialize scene
function init() {
    const container = document.getElementById('container2');
    const c1Width = container.clientWidth;
    const c1Height = container.clientHeight;

    // Camera setup
    camera = new THREE.PerspectiveCamera(10, c1Width / c1Height, 0.1, 1000);
    camera.position.set(-0.1, -1, 7);
    scene = new THREE.Scene();

    // Responsive camera adjustments
    updateCameraPosition();

    // Lighting
    pointLight = new THREE.PointLight(0x0000ff, 10, 10);
    pointLight.position.set(0, 0, 1);
    scene.add(pointLight);

    newLight = new THREE.PointLight(0x800000, 10, 10);
    scene.add(newLight);

    // HDR background loader
    new RGBELoader().setPath('/src/assets/textures/').load('space_bg_3hdr.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        renderer.setClearColor(0x000000, 0);
        scene.environment = texture;

        // GLTF model loaders
        loadModels();
    });

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(c1Width, c1Height);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
}

// Update camera position based on window size
function updateCameraPosition() {
    if (window.innerWidth <= 500) {
        camera.position.z = 20;
    } else if (window.innerWidth <= 900) {
        camera.position.z = 14;
    } else if (window.innerWidth <= 1350) {
        camera.position.z = 12;
    } else {
        camera.position.z = 7;
    }
}

// Load GLTF models
function loadModels() {
    const loader = new GLTFLoader().setPath('/src/assets/models/gltf/section01/');
    loader.load('text_top.glb', (gltf) => {
        model = gltf.scene;
        scene.add(model);
        model.rotation.set(-0.38, -0.14, -0.03);
        model.position.set(-0.4, 0, 0);
        model.scale.set(1.2, 1.2, 1.2);
        model.visible = true;
    });

    loader.load('text_bottom.glb', (gltf) => {
        model2 = gltf.scene;
        scene.add(model2);
        model2.rotation.set(-0.38, -0.14, -0.03);
        model2.position.set(-0.1, -0.4, 0);
        model2.scale.set(1.2, 1.2, 1.2);
        model2.visible = true;
    });
}

// Resize handler
function onWindowResize() {
    const container = document.getElementById('container2');
    const c1Width = container.clientWidth;
    const c1Height = container.clientHeight;

    updateCameraPosition();

    camera.aspect = c1Width / c1Height;
    camera.updateProjectionMatrix();
    renderer.setSize(c1Width, c1Height);
}

// Mouse move handler
function onMouseMove(event) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1.2;

    const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    pointLight.position.copy(pos);
}

// Animation loop
function animate() {
    newLight.position.x = Math.sin(performance.now() / 1000 * 0.7) * 3;
    newLight.position.z = Math.cos(performance.now() / 1000 * 0.3) * 2;

    if (model) model.rotation.y += 0.005;
    if (model2) model2.rotation.y -= 0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Initialize and animate on load
init();
animate();
