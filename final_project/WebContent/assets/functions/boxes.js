function box(x,y,z){
	var geometry = new THREE.BoxGeometry( x,y,z );
	var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, transparent: true, opacity: 0} );
	var cube = new THREE.Mesh( geometry, material );
	return cube;
}