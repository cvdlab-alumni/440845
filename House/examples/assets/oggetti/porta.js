function createMesh(geom, imageFile) {
          var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
          var mat = new THREE.MeshPhongMaterial();
          mat.map = texture; //attribuendo map alla texture abbiamo fatto il lavoro di base, questo per utilizzare la mappatura di default
          var mesh = new THREE.Mesh(geom, mat);
          return mesh;}

function porta(larghezza, profondita, altezza, p_largh, p_prof, p_alt, imageFile){
	 var perno = new THREE.Object3D();
     var portaIn = createMesh(new THREE.BoxGeometry(larghezza, profondita,altezza ), imageFile);
     perno.position.set( p_largh, p_prof, p_alt);
     portaIn.position.set(larghezza/2,profondita/2,altezza/2); //metà dimensione della porta!! 
     perno.add(portaIn);
     perno.portaIn = portaIn;
     return perno;
}

