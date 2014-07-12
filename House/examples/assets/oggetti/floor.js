function createMesh(geom, imageFile) {
          var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
          var mat = new THREE.MeshPhongMaterial();
          mat.map = texture; //attribuendo map alla texture abbiamo fatto il lavoro di base, questo per utilizzare la mappatura di default
          var mesh = new THREE.Mesh(geom, mat);
          return mesh;}
          
function floor(larghezza, profondita, altezza,imageFile){
var floor = createMesh(new THREE.BoxGeometry(larghezza, profondita,altezza ), imageFile);
return floor;

}