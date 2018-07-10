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
cube.rotation.z = 0.5;
cube.rotation.y = 0.3;
scene.background = texture;
scene.add(cube);

camera.position.z = 4;
let mousePos = {};
var ax = 0;
var ay = 0;

window.addEventListener('keydown',(evt)=>{
  let direction = camera.getWorldDirection(new THREE.Vector3(0,0,0)).clone();
  console.log(evt.code);
  switch (evt.code) {
    case "ArrowUp":
      direction.multiplyScalar(0.1);
      camera.position.add(direction);
      break;
    case "ArrowDown":
      direction.multiplyScalar(0.1);
      camera.position.sub(direction);
      break;
    case "ArrowLeft":
      camera.rotation.y += 0.1;
      break;
    case "ArrowRight":
      camera.rotation.y -= 0.1;
      break;
  }
});

window.addEventListener('mousemove',(evt)=>{
  if(mousePos.newx){
    mousePos.oldx = mousePos.newx;
  }
  if(mousePos.newy){
    mousePos.oldy = mousePos.newy;
  }
  mousePos.newx = evt.clientX;
  mousePos.newy = evt.clientY;
  //mousePos.oldx = mousePos.newx;
  //mousePos.oldy = mousePos.newy;
  mousePos.dx = mousePos.newx - mousePos.oldx;
  mousePos.dy = mousePos.newy - mousePos.oldy;
  ax += mousePos.dy * 0.1;
  ay += mousePos.dx * 0.1;
  camera.rotation.x = mousePos.newy * 0.01;
  camera.rotation.y = mousePos.newx * 0.01;
  //console.log(camera.rotation);
  console.log(mousePos);
  //console.log(ax, ay, mousePos.dy);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
}
animate();
