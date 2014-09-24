function createMirror(scene, webGLRenderer, camera){
	
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;
	groundMirror = new THREE.Mirror( webGLRenderer, camera, { clipBias: 0.003, textureWidth: WIDTH, textureHeight: HEIGHT, color: 0x777777 } );
	var planeGeo = new THREE.PlaneGeometry(250,200);

	var mirrorMesh = new THREE.Mesh( planeGeo, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
	mirrorMesh.position.set(-75,0.1,50);
	//scene.add( mirrorMesh );
	var verticalMirror = new THREE.Mirror( webGLRenderer, camera, { clipBias: 0.003, textureWidth: WIDTH, textureHeight: HEIGHT, color:0x889999 } );
	
	var verticalMirrorMesh = new THREE.Mesh( new THREE.PlaneGeometry( 10, 15 ), verticalMirror.material );
	verticalMirrorMesh.add( verticalMirror );
	verticalMirrorMesh.position.set(8,13,-41);
	
	verticalMirrorMesh.mirror = verticalMirror;
	
	//scene.add(verticalMirrorMesh);
	
	return verticalMirrorMesh;
}