let scene,camera,renderer;
let width = window.innerWidth;
let height = window.innerHeight;

let sun = {};
let mercury = {};
let venus = {};
let earth = {};
let moon = {};
let mars = {};
let jupiter = {};
let saturn = {};
let uranus = {};
let neptune = {};
let pluto = {};
let light;
let backgroundTexture;

function setUp() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();

  backgroundTexture = new THREE.TextureLoader().load('Images/stars.jpg');
  scene.background = backgroundTexture;

  camera.position.y = 20;
  camera.position.z = 100;
  //camera.lookAt(0,0,0);
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  sun.geometry = new THREE.SphereGeometry(10,32,32);
  sun.texture = new THREE.TextureLoader().load('Images/sunmap.jpg');
  sun.material = new THREE.MeshBasicMaterial({color:0xffff00, map: sun.texture});
  sun.mesh = new THREE.Mesh(sun.geometry, sun.material);
  scene.add(sun.mesh);
  //console.log(sun.mesh.position);

  mercury.geometry = new THREE.SphereGeometry(2,32,32);
  mercury.texture = new THREE.TextureLoader().load('Images/mercurymap.jpg');
  mercury.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: mercury.texture});
  mercury.mesh = new THREE.Mesh(mercury.geometry, mercury.material);
  mercury.phi = 0;
  mercury.theta = 0;
  mercury.r = 20;
  scene.add(mercury.mesh);

  venus.geometry = new THREE.SphereGeometry(4,32,32);
  venus.texture = new THREE.TextureLoader().load('Images/venusmap.jpg');
  venus.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: venus.texture});
  venus.mesh = new THREE.Mesh(venus.geometry, venus.material);
  venus.phi = 0;
  venus.theta = 0;
  venus.r = 30;
  scene.add(venus.mesh);

  earth.geometry = new THREE.SphereGeometry(5,32,32);
  earth.texture = new THREE.TextureLoader().load('Images/earthmap1k.jpg');
  earth.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: earth.texture});
  earth.mesh = new THREE.Mesh(earth.geometry, earth.material);
  earth.phi = 0;
  earth.theta = 0;
  earth.r = 40;
  scene.add(earth.mesh);

  moon.geometry = new THREE.SphereGeometry(0.5,32,32);
  moon.texture = new THREE.TextureLoader().load('Images/moonmap1k.jpg');
  moon.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: moon.texture});
  moon.mesh = new THREE.Mesh(moon.geometry, moon.material);
  moon.base = earth.mesh.clone();
  moon.phi = 0;
  moon.theta = 0;
  moon.r = 5;
  scene.add(moon.mesh);

  mars.geometry = new THREE.SphereGeometry(3,32,32);
  mars.texture = new THREE.TextureLoader().load('Images/mars_1k_color.jpg');
  mars.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: mars.texture});
  mars.mesh = new THREE.Mesh(mars.geometry, mars.material);
  mars.phi = 0;
  mars.theta = 0;
  mars.r = 50;
  scene.add(mars.mesh);

  jupiter.geometry = new THREE.SphereGeometry(9,32,32);
  jupiter.texture = new THREE.TextureLoader().load('Images/jupitermap.jpg');
  jupiter.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: jupiter.texture});
  jupiter.mesh = new THREE.Mesh(jupiter.geometry, jupiter.material);
  jupiter.phi = 0;
  jupiter.theta = 0;
  jupiter.r = 60;
  scene.add(jupiter.mesh);

  saturn.geometry = new THREE.SphereGeometry(8,32,32);
  saturn.ring = new THREE.RingGeometry(8.5, 10, 32);
  saturn.ringTexture = new THREE.TextureLoader().load('Images/saturnringcolor.jpg');
  saturn.texture = new THREE.TextureLoader().load('Images/saturnmap.jpg');
  saturn.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: saturn.texture});
  saturn.ringMaterial = new THREE.MeshBasicMaterial({color:0x9999ff, map: saturn.ringTexture, side: THREE.DoubleSide});
  saturn.mesh = new THREE.Mesh(saturn.geometry, saturn.material);
  saturn.ringmesh = new THREE.Mesh(saturn.ring, saturn.ringMaterial);
  saturn.phi = 0;
  saturn.theta = 0;
  saturn.r = 70;
  saturn.ringmesh.rotation.x = 2;
  scene.add(saturn.mesh);
  scene.add(saturn.ringmesh);

  uranus.geometry = new THREE.SphereGeometry(6,32,32);
  uranus.texture = new THREE.TextureLoader().load('Images/uranusmap.jpg');
  uranus.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: uranus.texture});
  uranus.mesh = new THREE.Mesh(uranus.geometry, uranus.material);
  uranus.phi = 0;
  uranus.theta = 0;
  uranus.r = 80;
  scene.add(uranus.mesh);

  neptune.geometry = new THREE.SphereGeometry(7,32,32);
  neptune.texture = new THREE.TextureLoader().load('Images/neptunemap.jpg');
  neptune.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: neptune.texture});
  neptune.mesh = new THREE.Mesh(neptune.geometry, neptune.material);
  neptune.phi = 0;
  neptune.theta = 0;
  neptune.r = 90;
  scene.add(neptune.mesh);

  pluto.geometry = new THREE.SphereGeometry(1,32,32);
  pluto.texture = new THREE.TextureLoader().load('Images/plutomap1k.jpg');
  pluto.material = new THREE.MeshBasicMaterial({color:0x9999ff, map: pluto.texture});
  pluto.mesh = new THREE.Mesh(pluto.geometry, pluto.material);
  pluto.phi = 0;
  pluto.theta = 0;
  pluto.r = 100;
  scene.add(pluto.mesh);

  light = new THREE.PointLight( 0xff6600, 20, 100);
  light.position.set(0,0,0);
  scene.add(light);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  sun.mesh.rotation.y += 0.01;

  mercury.mesh.position.x = mercury.r * Math.sin(mercury.theta) * Math.cos(mercury.phi);
  mercury.mesh.position.y = mercury.r * Math.sin(mercury.theta) * Math.sin(mercury.phi);
  mercury.mesh.position.z = mercury.r * Math.cos(mercury.theta);
  mercury.theta += 0.1;

  venus.mesh.position.x = venus.r * Math.sin(venus.theta) * Math.cos(venus.phi);
  venus.mesh.position.y = venus.r * Math.sin(venus.theta) * Math.sin(venus.phi);
  venus.mesh.position.z = venus.r * Math.cos(venus.theta);
  venus.theta += 0.08;

  earth.mesh.position.x = earth.r * Math.sin(earth.theta) * Math.cos(earth.phi);
  earth.mesh.position.y = earth.r * Math.sin(earth.theta) * Math.sin(earth.phi);
  earth.mesh.position.z = earth.r * Math.cos(earth.theta);
  earth.theta += 0.05;

  moon.base = earth.mesh.clone();
  moon.mesh.position.x = moon.r * Math.sin(moon.theta) * Math.cos(moon.phi) + moon.base.position.x;
  moon.mesh.position.y = moon.r * Math.sin(moon.theta) * Math.sin(moon.phi) + moon.base.position.y;
  moon.mesh.position.z = moon.r * Math.cos(moon.theta) + moon.base.position.z;
  moon.theta -= 0.01;

  mars.mesh.position.x = mars.r * Math.sin(mars.theta) * Math.cos(mars.phi);
  mars.mesh.position.y = mars.r * Math.sin(mars.theta) * Math.sin(mars.phi);
  mars.mesh.position.z = mars.r * Math.cos(mars.theta);
  mars.theta += 0.03;

  jupiter.mesh.position.x = jupiter.r * Math.sin(jupiter.theta) * Math.cos(jupiter.phi);
  jupiter.mesh.position.y = jupiter.r * Math.sin(jupiter.theta) * Math.sin(jupiter.phi);
  jupiter.mesh.position.z = jupiter.r * Math.cos(jupiter.theta);
  jupiter.theta += 0.01;

  saturn.mesh.position.x = saturn.r * Math.sin(saturn.theta) * Math.cos(saturn.phi);
  saturn.mesh.position.y = saturn.r * Math.sin(saturn.theta) * Math.sin(saturn.phi);
  saturn.mesh.position.z = saturn.r * Math.cos(saturn.theta);
  saturn.ringmesh.position.x = saturn.mesh.position.x;
  saturn.ringmesh.position.y = saturn.mesh.position.y;
  saturn.ringmesh.position.z = saturn.mesh.position.z;
  saturn.ringmesh.rotation.z += 0.008;
  saturn.theta += 0.008;

  uranus.mesh.position.x = uranus.r * Math.sin(uranus.theta) * Math.cos(uranus.phi);
  uranus.mesh.position.y = uranus.r * Math.sin(uranus.theta) * Math.sin(uranus.phi);
  uranus.mesh.position.z = uranus.r * Math.cos(uranus.theta);
  uranus.theta += 0.006;

  neptune.mesh.position.x = neptune.r * Math.sin(neptune.theta) * Math.cos(neptune.phi);
  neptune.mesh.position.y = neptune.r * Math.sin(neptune.theta) * Math.sin(neptune.phi);
  neptune.mesh.position.z = neptune.r * Math.cos(neptune.theta);
  neptune.theta += 0.004;

  pluto.mesh.position.x = pluto.r * Math.sin(pluto.theta) * Math.cos(pluto.phi);
  pluto.mesh.position.y = pluto.r * Math.sin(pluto.theta) * Math.sin(pluto.phi);
  pluto.mesh.position.z = pluto.r * Math.cos(pluto.theta);
  pluto.theta += 0.002;

  renderer.render(scene, camera);
}
setUp();
