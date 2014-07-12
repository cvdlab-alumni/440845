function forma(arrayDiPunti){
	var shape = new THREE.Shape();
	shape.moveTo(arrayDiPunti[0].getX(), arrayDiPunti[0].getY());
	for (var i = 1; i<arrayDiPunti.length; i++)
		shape.lineTo(arrayDiPunti[i].getX(), arrayDiPunti[i].getY());
	shape.lineTo(arrayDiPunti[0].getX(), arrayDiPunti[0].getY());
	return shape;
		
}

function buca(shape,arrayDiPunti){
	var bucato = new THREE.Shape();
	bucato.moveTo(arrayDiPunti[0].getX(), arrayDiPunti[0].getY());
	for (var i = 1; i<arrayDiPunti.length; i++)
		bucato.lineTo(arrayDiPunti[i].getX(), arrayDiPunti[i].getY());
	bucato.lineTo(arrayDiPunti[0].getX(), arrayDiPunti[0].getY());
	shape.holes.push(bucato);
	return shape;
		
}

function creaGeometry(shape){
	var geometry = new THREE.ExtrudeGeometry(shape, options);
	return geometry;
	
}



var options = {
	       amount: 0,
	       bevelThickness: 0.01,
	       bevelSize: 0,
	       bevelSegments: 10,
	       bevelEnabled: true,
	       curveSegments: 12,
	       steps: 1
	     };


function punto(x,y){
	this.x = x;
	this.y = y;
	
}
punto.prototype.getX = function() {
    return this.x;
};
punto.prototype.getY = function() {
    return this.y;
};


function createBumpMesh(geom, imageFile, bump) {
    var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile);
    geom.computeVertexNormals();
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;

    if (bump) {
      var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump);
      mat.bumpMap = bump;
      mat.bumpScale = -0.2;
    }

    var mesh = new THREE.Mesh(geom, mat);

    return mesh;
  }