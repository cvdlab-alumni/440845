function createMesh(geom, imageFile) {
          var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
          ///
         
  	      ///
          var mat = new THREE.MeshPhongMaterial();
          mat.map = texture; //attribuendo map alla texture abbiamo fatto il lavoro di base, questo per utilizzare la mappatura di default
          ///
          
          

          
          var mesh = new THREE.Mesh(geom, mat);
          
          return mesh;}

function createBumpMesh(geom, imageFile,x,y,bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    geom.computeVertexNormals();
    var mat = new THREE.MeshBasicMaterial();
    mat.map = texture;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
    texture.repeat.set( x, y);
    texture.needsUpdate = true;

    var myMaterial = new THREE.MeshBasicMaterial({map:texture});
    if(bump)
    {
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
    bump.wrapS = bump.wrapT = THREE.RepeatWrapping; 
    //bump.repeat.set(x,y);
    bump.needsUpdate = true;
    myMaterial.bumpMap = bump;
    myMaterial.bumpScale = 0.3;
  }

  var myMesh = new THREE.Mesh(geom, myMaterial);
  return myMesh;
}
          
function floor(larghezza, profondita, altezza,imageFile, repX, repY){
var floor = createBumpMesh(new THREE.BoxGeometry(larghezza, profondita,altezza ), imageFile, repX, repY);
return floor;

}