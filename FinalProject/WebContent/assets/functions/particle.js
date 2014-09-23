function particleWater(n, px, py, pz, nx, ny, nz, path){

	var particleCount = n,
	particles = new THREE.Geometry(),
	pMaterial = new THREE.ParticleBasicMaterial({
		color: 0xFFFFFF,
		size: 0.1,
		transparent: true, 
		opacity: 1,
		map: THREE.ImageUtils.loadTexture(
				path),
				blending: THREE.AdditiveBlending,
				transparent: true
	});

	//	now create the individual particles
	for (var p = 0; p < particleCount; p++) {

		// create a particle with random
		// position values, -250 -> 250
		var pX = Math.random()  *px + nx,
		pY = Math.random() *py + ny,
		pZ = Math.random() *pz   +nz,
		particle = new THREE.Vertex(
				new THREE.Vector3(pX, pY, pZ)
		);
	
		// add it to the geometry
		particles.vertices.push(particle);
	}

	//create the particle system
	var particleSystem = new THREE.ParticleSystem(  particles, pMaterial);
	particleSystem.sortParticles = true;
	//particleSystem.visible =false;
	//particleSystem.material = pMaterial;
	o = new THREE.Object3D();
	o.add(particleSystem);
	//return particleSystem;
	return o;
}



