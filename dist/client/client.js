import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xff0000);
const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const camera3 = new THREE.PerspectiveCamera(75, 1, 2, 10);
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const canvas1 = document.getElementById('c1');
const canvas2 = document.getElementById('c2');
const canvas3 = document.getElementById('c3');
const canvas4 = document.getElementById('c4');
// const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas})
const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });
// renderer.setSize(window.innerWidth, window.innerHeight)
renderer1.setSize(200, 200);
renderer2.setSize(200, 200);
// document.body.appendChild(renderer.domElement)
const controls = new OrbitControls(camera1, renderer1.domElement);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera1.position.z = 2;
camera2.position.y = 2;
camera2.lookAt(new THREE.Vector3(0, 0, 0));
camera3.position.z = 2;
camera4.position.x = 2;
camera4.lookAt(new THREE.Vector3(0, 0, 0));
var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer1.render(scene, camera1);
    renderer2.render(scene, camera2);
    renderer3.render(scene, camera3);
    renderer4.render(scene, camera4);
};
animate();
