function track(){
	
	
	      var stats = initStats();
	      // create a scene, that will hold all our elements such as objects, cameras and lights.
	      var scene = new THREE.Scene();
	      // create a camera, which defines where we're looking at.
	      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	      // create trackball controls
	      var trackballControls = new THREE.TrackballControls(camera);
	      // create a render and set the size
	      var webGLRenderer = new THREE.WebGLRenderer();
	      webGLRenderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
	      webGLRenderer.setSize(window.innerWidth, window.innerHeight);
	      // position and point the camera to the center of the scene
	      camera.position.set(-30,20,30);
	      camera.lookAt(new THREE.Vector3(0, 0, 0));
	      // add spotlights
	      
	       var projector = new THREE.Projector();
	      document.addEventListener('mousedown', onDocumentMouseDown, false);
	      
	      var spotLight1 = new THREE.SpotLight(0xffffff);
	      spotLight1.position.set(-30, 40, 50);
	      spotLight1.intensity = 1;
	      scene.add(spotLight1);
	      var spotLight2 = new THREE.SpotLight(0xffffff);
	      spotLight2.position.set(30, -40, -50);
	      spotLight2.intensity = 2;
	      scene.add(spotLight2); 
	      
	      l = light();
	      scene.add(l);
	      
	      var portaIngresso = porta(3,0.5,7,17.95,-0.15,1,"wood.jpg");
	      scene.add(portaIngresso);
	      
	      var porta1 = porta(2.5, 0.5, 6, 7.15, 14, 1, "fiori.jpg");
	      scene.add(porta1);
	      var porta2 = porta(2.5, 0.5, 6, 26.8, 14, 1, "darker_wood.jpg");
	      scene.add(porta2);
	      var porta3 = porta(2.5, 0.5, 6, 26.8, 7, 1, "linee.jpg");
	      scene.add(porta3);
	      
	      var porta4 = porta(2.4, 0.3, 6, 16.1, 6, 1, "legno.jpg");
	      porta4.rotation.z = Math.PI/2;
	      scene.add(porta4);
	      
	      var porta5 = porta(2, 0.3, 6, 16.3, 17.85, 1, "pallini.jpg");
	      porta5.rotation.z = Math.PI/2;
	      scene.add(porta5);
	      
	      var porta6 = porta(2, 0.3, 6, 22.9, 17.85, 1, "lineerosa.jpg");
	      porta6.rotation.z = Math.PI/2;
	      scene.add(porta6);
	     
	      var porta7 = porta(2, 0.3, 6, 22.9, 9.4, 1, "legno.jpg");
	      porta7.rotation.z = Math.PI/2;
	      scene.add(porta7);
	      
	      var porta8 = porta(2, 0.3, 6, 22.9, 3.4, 1, "legno.jpg");
	      porta8.rotation.z = Math.PI/2;
	      scene.add(porta8);
	      
	      var windows = w();
	      scene.add(windows);


	      
	      var est = esterni();
	      scene.add(est);
	      
	     var pav = pavimenti();
	     scene.add(pav);
	    
	    
	     var interni = walls();
	     scene.add(interni);
	     
	     
	      
	      // add the output of the renderer to the html element
	      $('body').append(webGLRenderer.domElement);
	      // call the render function
	      var step = 0;
	      // setup the control gui
	      var controls = new function () {
	    	  this.switchLight1 = false;
	         // this.showVideo = false;

	    	  this.switchLight2 = false;
	    	  this.switchLight3 = false;
	    	  this.switchLight4 = false;
	    	  this.switchLight5 = false;
	    	  this.switchLight6 = false;
	    	  this.switchLight7 = false;
	    	  this.switchLight8 = false;
	      };
	     /* var audio = document.createElement('audio');
	      var source = document.createElement('source');
	      source.src = '/assets/sounds/switch.mp3';
	      audio.appendChild(source);
	      audio.play();*/
	      
	      
	      var gui = new dat.GUI();
	      gui.add(controls,'switchLight1').onChange(function(e){
	    	  l.light1.onlyShadow = e;
	  		document.getElementById('audio').play();

	    	  
	      });
	      gui.add(controls,'switchLight2').onChange(function(e){
	    	  l.light2.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      gui.add(controls,'switchLight3').onChange(function(e){
	    	  l.light3.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      gui.add(controls,'switchLight4').onChange(function(e){
	    	  l.light4.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      gui.add(controls,'switchLight5').onChange(function(e){
	    	  l.light5.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      gui.add(controls,'switchLight6').onChange(function(e){
	    	  l.light6.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      gui.add(controls,'switchLight7').onChange(function(e){
	    	  l.light7.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      gui.add(controls,'switchLight8').onChange(function(e){
	    	  l.light8.onlyShadow = e;
	    	  document.getElementById('audio').play();
	      });
	      
	      
	      var mesh;
	      ///carica casa
	      var loader = new THREE.OBJLoader();
	      loader.load('assets/models/casa3.obj', function (obj) {
	        global_o = obj;
	        // var material = new THREE.MeshLambertMaterial({color: 0xaaaaaa});
	        // material.side = THREE.DoubleSide;
	        // obj.children[0].material = material;
	        // mesh = obj.children[0];
	        var multiMaterial = [
	          new THREE.MeshLambertMaterial({color: 0xFFDAB9, side: THREE.DoubleSide, shading: THREE.FlatShading}),
	          new THREE.MeshBasicMaterial({overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
	          ];
	        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
	          
	        scene.add(mesh); });
	        
	        
	 var forniture = load();
	 scene.add(forniture);

	 var sphereGeometry = new THREE.SphereGeometry(0.4,20,20);
	 var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x09F911});
	 var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
	 sphere.castShadow = true;

	 // position the sphere
	 sphere.position.set(5,5.25,1.5);

	 // add the sphere to the scene
	 scene.add(sphere);
	 
	 var ballTween = new TWEEN.Tween(sphere.position).to({
			x : 5,
			y : 5.25,
			z : 1.5
		}, 1000)
		// .easing(TWEEN.Easing.Linear.None)
		.easing(TWEEN.Easing.Bounce.Out).start(); 
	 
	 var ballTween2 = new TWEEN.Tween(sphere.position).to({
			x : 5,
			y : 5.25,
			z : 5
		}, 1000)
		// .easing(TWEEN.Easing.Linear.None)
		.easing(TWEEN.Easing.Bounce.Out).start(); 
	 
	 ballTween.chain(ballTween2);
	 ballTween2.chain(ballTween);
	 ballTween.chain(ballTween2); 
	   
	 var portaTween = new TWEEN.Tween(portaIngresso.rotation).to({
		 x:0,
		 y:0,
		 z: -Math.PI/2
	 
	 },2000).easing(TWEEN.Easing.Bounce.Out).start();
	 var portaTween2 = new TWEEN.Tween(portaIngresso.rotation).to({
		 x:0,
		 y:0,
		 z: 0
	 
	 },2000).easing(TWEEN.Easing.Bounce.Out).start();
	 
	 portaTween.chain(portaTween2);
	 portaTween2.chain(portaTween);
	 portaTween.chain(portaTween2); 
	      
	      
	      
	      render();
	      function render() {
	        stats.update();
	        trackballControls.update();
	        TWEEN.update();
	       
	        // render using requestAnimationFrame
	        requestAnimationFrame(render);
	        webGLRenderer.render(scene, camera);
	      }
	      var projector = new THREE.Projector();
	      var tube;

	      function onDocumentMouseDown(event) {

	        event.preventDefault();

	        var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
	        projector.unprojectVector(vector, camera);

	        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

	        var intersects = raycaster.intersectObjects([portaIngresso.portaIn]);
	        var intersects1 = raycaster.intersectObjects([porta1.portaIn]);
	        var intersects2 = raycaster.intersectObjects([porta2.portaIn]);
	        var intersects3 = raycaster.intersectObjects([porta3.portaIn]);
	        var intersects4 = raycaster.intersectObjects([porta4.portaIn]);
	        var intersects5 = raycaster.intersectObjects([porta5.portaIn]);
	        var intersects6 = raycaster.intersectObjects([porta6.portaIn]);
	        var intersects7 = raycaster.intersectObjects([porta7.portaIn]);
	        var intersects8 = raycaster.intersectObjects([porta8.portaIn]);

	        if (intersects.length > 0) {
	          portaIngresso.rotation.z = Math.PI/2;
	          

	          var points = [];
	          var origin = raycaster.ray.origin.clone();
	          console.log(origin);
	          points.push(new THREE.Vector3(-30, 39.8, 30));
	          points.push(intersects[0].point);


	          var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	          var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	          if (tube) scene.remove(tube);

	          if (controls.showRay) {
	            tube = new THREE.Mesh(tubeGeometry, mat);
	            scene.add(tube);
	          }
	        }
	        if (intersects1.length > 0) {
	            porta1.rotation.z = Math.PI/2;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        if (intersects2.length > 0) {
	            porta2.rotation.z = Math.PI/2;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        if (intersects3.length > 0) {
	            porta3.rotation.z = Math.PI/2;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        
	        if (intersects4.length > 0) {
	            porta4.rotation.z = Math.PI;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        if (intersects5.length > 0) {
	            porta5.rotation.z = -Math.PI;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        if (intersects6.length > 0) {
	            porta6.rotation.z = Math.PI;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        if (intersects7.length > 0) {
	            porta7.rotation.z = -Math.PI;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        if (intersects8.length > 0) {
	            porta8.rotation.z = -Math.PI;
	            

	            var points = [];
	            var origin = raycaster.ray.origin.clone();
	            console.log(origin);
	            points.push(new THREE.Vector3(-30, 39.8, 30));
	            points.push(intersects1[0].point);


	            var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
	            var tubeGeometry = new THREE.TubeGeometry(new THREE.SplineCurve3(points), 60, 0.001);

	            if (tube) scene.remove(tube);

	            if (controls.showRay) {
	              tube = new THREE.Mesh(tubeGeometry, mat);
	              scene.add(tube);
	            }
	          }
	        
	        
	        
	      } //end mouse down 
	      function initStats() {
	        var stats = new Stats();
	        stats.setMode(0); // 0: fps, 1: ms
	        $('body').append(stats.domElement);
	        return stats;
	      }
	   
	
}