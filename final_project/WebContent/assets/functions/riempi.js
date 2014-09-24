function fill(){
	var sc = new THREE.Object3D();
	
	house = createHouse(); 
    house.rotation.y = Math.PI;
    sc.add(house);
    
    muri= esterni();
    muri.rotation.y = Math.PI;
    sc.add(muri);
    
    pareti =walls();
    pareti.rotation.y = Math.PI;
    sc.add(pareti);
    
    floor = pavimenti();
    floor.rotation.y = Math.PI;
    sc.add(floor);
    sc.floor = floor;
    
    finestre = w();
    finestre.rotation.y = Math.PI;
    sc.add(finestre);
    sc.finestre = finestre;
    
    mobili = load();
    mobili.rotation.y = Math.PI;
    sc.add(mobili);
    
    //acqua = particleWater();
    //acqua.rotation.y = Math.PI;
    //sc.add(acqua);
    
    boxDoccia = box(6,15,6);
    boxDoccia.isAcqua = false;
    boxDoccia.rotation.y = Math.PI;
    boxDoccia.position.set(12,10,-67);
    sc.add(boxDoccia);
    sc.boxDoccia = boxDoccia;
    
    boxWater = box(5,5,5);
    boxWater.rotation.y = Math.PI;
    boxWater.position.set(4,6,-46);
    sc.add(boxWater);
    sc.boxWater = boxWater;
    
    var geometryD = new THREE.BoxGeometry( 6,0.5,6 );
	var materialD = new THREE.MeshPhongMaterial( {color: 0xD3D3D3} );
	var cubeD = new THREE.Mesh( geometryD, materialD );
	cubeD.position.set(13,23,-67);
	sc.add(cubeD);
    
  /*  boxCampanello = box(3,3,3);
    boxCampanello.position.set(1,15,2);
    sc.add(boxCampanello);
    sc.boxCampanello = boxCampanello; */
    
    var geometry = new THREE.BoxGeometry( 3,2,0.5 );
	var material = new THREE.MeshPhongMaterial( {color: 0xFF7F00} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(2,15,2);
	sc.add(cube);
	
	var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
	var material = new THREE.MeshPhongMaterial( {color: 0xFF7F00} );
	var bottone = new THREE.Mesh( geometry, material );
	bottone.position.set(2,15,2);
	sc.add( bottone );
	sc.bottone = bottone;
    
    
    
    
    
  /*  porte = doors();
    porte.rotation.y = Math.PI;
   
  sc s.add(porte);
  sc s.porte = porte;  */
    
    var portaIngresso = porta(2.7,0.5,7,17.95,-0.15,1,"wood.jpg");
    
    portaIngresso.rotation.y = Math.PI;
    portaIngresso.rotation.x = Math.PI/2;
    portaIngresso.rotation.y = Math.PI;
    portaIngresso.rotation.z = Math.PI;
    portaIngresso.position.set(4.4,3,0);
    portaIngresso.scale.set(3,3,3);
    
    sc.add(portaIngresso);
    sc.portaIngresso = portaIngresso;
    //sc.portaIngressoIn = portaIngresso.portaIn;
    
    var porta1 = porta(2.5, 0.5, 6, 7.15, 14, 1, "legno.jpg",1,5);
    porta1.rotation.y = Math.PI;
    porta1.rotation.x = Math.PI/2;
    porta1.rotation.y = Math.PI;
    porta1.rotation.z = Math.PI;
    porta1.position.set(31,0.5,-21.5);
    porta1.scale.set(3,3,3);
    sc.add(porta1);
    sc.porta1 = porta1;
    
    var porta2 = porta(2.5, 0.5, 6, 26.8, 14, 1, "legno.jpg");
    porta2.rotation.y = Math.PI;
    porta2.rotation.x = Math.PI/2;
    porta2.rotation.y = Math.PI;
    porta2.rotation.z = Math.PI;
    porta2.position.set(30.65,2.75,-42);
    porta2.scale.set(3,3,3);
    sc.add(porta2);
    sc.porta2 = porta2;
    
    var porta3 = porta(2.5, 0.5, 6, 26.8, 7, 1, "legno.jpg");
    porta3.rotation.y = Math.PI;
    porta3.rotation.x = Math.PI/2;
    porta3.rotation.y = Math.PI;
    porta3.rotation.z = Math.PI;
    porta3.position.set(-29,2,-41.5);
    porta3.scale.set(3.3,3.3,3);
    sc.add(porta3);
    sc.porta3 = porta3;
    
   /* var porta4 = porta(2.4, 0.3, 6, 16.1, 6, 1, "legno.jpg");
    porta4.rotation.y = Math.PI;
    porta4.rotation.z = Math.PI/2;
    sc.add(porta4);
    sc.porta4 = porta4;
    */
    var porta5 = porta(2, 0.3, 6, 16.3, 17.85, 1, "pallini.jpg");
    porta5.rotation.y = Math.PI;
    porta5.rotation.z = Math.PI/2;
    porta5.rotation.x = Math.PI/2;
    porta5.rotation.z = 3*Math.PI/2;
    porta5.position.set(-1.5,1,-53.5);
    porta5.scale.set(3,3.3,3.3);
    sc.add(porta5);
    sc.porta5 = porta5;
    
    var porta6 = porta(2, 0.3, 6, 22.9, 17.85, 1, "lineerosa.jpg");
    porta6.rotation.y = Math.PI;
    porta6.rotation.z = Math.PI/2;
    porta6.rotation.x = Math.PI/2;
    porta6.rotation.z = 3*Math.PI/2;
    porta6.position.set(18.5,1,-53.5);
    porta6.scale.set(3,3.3,3.3);
    sc.add(porta6);
    sc.porta6 = porta6; 
    
    var pav = porta(36,24.5,1,-53,31,-73, "roof.jpg");
    pav.scale.set(3,3,2);
    pav.rotation.x =Math.PI/2;
    
     
      
      sc.add(pav); 
      sc.pav = pav;

   /*
    var porta7 = porta(2, 0.3, 6, 22.9, 9.4, 1, "legno.jpg");
    porta7.rotation.y = Math.PI;
    porta7.rotation.z = Math.PI/2;
    sc.add(porta7);
    sc.porta7 = porta7;
    
    var porta8 = porta(2, 0.3, 6, 22.9, 3.4, 1, "legno.jpg");
    porta8.rotation.y = Math.PI;
    porta8.rotation.z = Math.PI/2;
    sc.add(porta8);
    sc.porta8 = porta8;
    */
    
	return sc;
}