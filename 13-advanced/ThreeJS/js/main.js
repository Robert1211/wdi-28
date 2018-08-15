let renderer, scene, camera, floor, cube, sphere, light, controller, step = 0;

function createRenderer() {
  const renderer = new THREE.WebGLRenderer();
  const scene = new THREE.Scene();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#16161d"); // Eigengrau!
  renderer.setPixelRatio(window.devicePixelRation || 1);
  renderer.shadowMap.enabled = true;
  return renderer;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    45, // FOV degrees
    window.innerWidth / window.innerHeight, // ratio
    0.1, // near
    1000, // far
  );
  camera.position.set(-30, 40, 30); // x, y, z
  camera.lookAt(0, 0, 0); // x, y, z
  return camera;
}

function createFloor() {
  const floorMaterial = new THREE.MeshLambertMaterial({
    color: "#cfd8dc",
  });
  const floorGeometry = new THREE.BoxGeometry(60, 0.1, 20);
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.receiveShadow = true;
  floor.position.set(15, 0, 0);
  return floor;
}

function createBox(x, y, z, color) {
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: color
  });
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(x, y, z);
  cube.castShadow = true;
  cube.receiveShadow = true;
  return cube;
}

function createSphere() {
  const sphereGeometry = new THREE.SphereGeometry(
    4, // radius
    30, // width segments
    30 // height segments
  );
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: "#039be5",
    // wireframe: true
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(20, 4, 0);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  return sphere;
}

// Constructor: call this as a constructor with: new Controller();
function Controller() {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
}

function addGui(controller) {
  const gui = new dat.GUI();
  gui.add(controller, "rotationSpeed", -0.3, 0.3);
  gui.add(controller, "bouncingSpeed", 0, 0.5);
}

function createLight() {
  const light = new THREE.PointLight("#ffffff");
  light.castShadow = true;
  light.position.set(15, 30, 0);
  light.shadow.mapSize.width = 2048; // Power of 2
  light.shadow.mapSize.height = 2048; // Power of 2
  return light;
}

function animate() {
  step += controller.bouncingSpeed;

  sphere.position.x = 20 + 10 * Math.cos(step);
  sphere.position.y = 4 + 10 * Math.abs(Math.sin(step));

  cube.rotation.x += controller.rotationSpeed;
  cube.rotation.y += controller.rotationSpeed;
  cube.rotation.z += controller.rotationSpeed;
  renderer.render(scene, camera);
  requestAnimationFrame(animate); // Our old friend recursion.
}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
}

function init() {
  renderer = createRenderer();
  scene = new THREE.Scene();

  camera = createCamera();

  const axes = new THREE.AxesHelper(20);
  scene.add(axes);

  floor = createFloor();
  scene.add(floor);

  cube = createBox(-4, 4, 0, "#ff8f00");
  scene.add(cube);

  sphere = createSphere();
  scene.add(sphere);

  light = createLight();
  scene.add(light);

  const pointLightHelper = new THREE.PointLightHelper(light);
  scene.add(pointLightHelper);

  controller = new Controller();
  const gui = addGui(controller);

  document.body.appendChild(renderer.domElement);
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  animate();
}

window.onload = init;
window.addEventListener('resize', resize);
