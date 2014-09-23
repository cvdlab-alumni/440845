function start(){

	var camera, scene, renderer, renderer1;

	renderer1 = new THREE.WebGLRenderer();
	renderer1.setClearColor( 0xffffff ,1.0);
	renderer1.setSize( window.innerWidth, window.innerHeight );

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.up = new THREE.Vector3(0,1,0);
	camera.position.set(0,30,60);
	camera.lookAt (new THREE.Vector3(0,0,0));

	scene = new THREE.Scene();
	
	var house = fill();  
	scene.add(house);

	var sky = skyBox();
	scene.add(sky);
	scene.sky = sky;

	var light1 = new THREE.DirectionalLight( 0xffffff, 1.5 );
	light1.position.set( 1, 1, 1 );
	scene.add( light1 );

	var light2 = new THREE.DirectionalLight( 0xffffff, 0.75 );
	light2.position.set( -1, - 0.5, -1 );
	scene.add( light2 );  

	var lampadari = light();
	scene.add(lampadari);
	
	var specchio = createMirror(scene, renderer1, camera);
	scene.add(specchio);
	scene.specchio = specchio;

//	var projector = new THREE.Projector();
	document.addEventListener('mousedown',onDocumentMouseDown, false );

//	var geometry, material, mesh;
	var controls;
	var FP = false;  //inizialmente FP disattivato e TB attivata
	var trackballControls = new THREE.TrackballControls(camera);

	$('body').append(renderer1.domElement);

	var objects = [];

	var ray;

//	var blocker = document.getElementById( 'blocker' );
//	var instructions = document.getElementById( 'instructions' );


	var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

	if ( havePointerLock ) {
		var element = document.body;
		var pointerlockchange = function ( event ) {

			if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
				controls.enabled = true;
				FP = true;
				controls.getObject().position.set(9,9,50);   //9 è la larghezza

				$("#pointer").fadeIn(1000);
				controls.isOnObject(false);

				rayMove.ray.origin.y -= 4;
				var intersections = rayMove.intersectObjects(objects);
				if (intersections.length > 0) {
					var distance = intersections[0].distance;
					if (distance > 0 && distance < 4) {
						controls.isOnObject(true);
					}
				}

				controls.update();
			} else {
				controls.enabled = false;
				location.reload();  
				
			}
		}

		var pointerlockerror = function ( event ) {
			location.reload();
		}

		// Hook pointer lock state change events
		document.addEventListener( 'pointerlockchange', pointerlockchange, false );
		document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
		document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

		document.addEventListener( 'pointerlockerror', pointerlockerror, false );
		document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
		document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );
		document.addEventListener('mousedown',onDocumentMouseDown, false );


		var switchFP = function (){
			init();
			trackballControls.reset();

			element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

			if ( /Firefox/i.test( navigator.userAgent ) ) {
				var fullscreenchange = function ( event ) {

					if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
						document.removeEventListener( 'fullscreenchange', fullscreenchange );
						document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
						element.requestPointerLock();
					}
				}

				document.addEventListener( 'fullscreenchange', fullscreenchange, false );
				document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );

				element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
				element.requestFullscreen();

			} else {
				element.requestPointerLock();
			}
		};
	}

	controls = createGUI(scene, switchFP, sky);


	function init() {
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.up = new THREE.Vector3(0,1,0);
		camera.position.set(0,0,0);
		camera.lookAt (new THREE.Vector3(0,0,0));

		controls = new THREE.PointerLockControls( camera );
		scene.add( controls.getObject() );

		ray = new THREE.Raycaster();
		ray.ray.direction.set( 0, -1, 0 );

		//

		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor( 0xffffff );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		//

		window.addEventListener( 'resize', onWindowResize, false );
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function animate() {

		controls.isOnObject( false );
		ray.ray.origin.copy( controls.getObject().position );
		ray.ray.origin.y -= 10;
		var intersections = ray.intersectObjects( objects );
		if ( intersections.length > 0 ) {
			var distance = intersections[ 0 ].distance;
			if ( distance > 0 && distance < 10 ) {
				controls.isOnObject( true );
			}
		}

		controls.update();
	
	}
	render();

	function render() {
	
		trackballControls.update();
		TWEEN.update();
	    specchio.mirror.render();

		if (FP === true) {
			animate();
		}

		requestAnimationFrame(render);

		renderer1.render(scene, camera);
	}

	function onDocumentMouseDown(event) {
		var projector = new THREE.Projector();

		event.preventDefault();

		if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
			var vector = new THREE.Vector3(0, 0, 0.5);
			projector.unprojectVector(vector, camera);
			var raycaster = new THREE.Raycaster(vector,
					controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
		}

		else {
			var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
			projector.unprojectVector(vector, camera);
			var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

		}
		
		interseca(raycaster, house, document, lampadari,  scene);

	} 
}