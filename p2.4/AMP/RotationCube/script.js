var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new THREE.CubeTextureLoader();
loader.setPath('./Images/');
var textureCube = loader.load([
  'p1.jpg', 'p1.jpg',
  'p1.jpg', 'p1.jpg',
  'p1.jpg', 'p1.jpg'
]);

var texture = new THREE.TextureLoader().load('Images/p1.jpg');
var material2 = new THREE.MeshBasicMaterial({ map: texture});

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color:0xffffff, map:texture});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 4;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
animate();
