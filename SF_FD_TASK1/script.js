const scene=new THREE.Scene(),
camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000),
renderer=new THREE.WebGLRenderer({canvas:document.getElementById("bg"),antialias:!0});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth,innerHeight);
camera.position.setZ(30);
const geometry=new THREE.TorusKnotGeometry(10,3,100,16),
material=new THREE.MeshStandardMaterial({color:0xf39c12,wireframe:!1}),
torus=new THREE.Mesh(geometry,material);
scene.add(torus);
const pointLight=new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
scene.add(pointLight);
const ambientLight=new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);
function addStar(){
  const g=new THREE.SphereGeometry(.25,24,24),
  m=new THREE.MeshStandardMaterial({color:0xffffff}),
  s=new THREE.Mesh(g,m);
  s.position.set((Math.random()-0.5)*200,(Math.random()-0.5)*200,(Math.random()-0.5)*200);
  scene.add(s)
}
Array(200).fill().forEach(addStar);
function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x+=.01;
  torus.rotation.y+=.005;
  torus.rotation.z+=.01;
  camera.position.z+=(.5*Math.sin(Date.now()*0.0005))-camera.position.z;
  renderer.render(scene,camera)
}
window.addEventListener("resize",()=>{
  camera.aspect=innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight)
});
animate();
