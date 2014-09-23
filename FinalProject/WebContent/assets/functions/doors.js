function doors(){
	var sc = new THREE.Object3D();
	
	 var portaIngresso = porta(3,0.5,7,17.95,-0.15,1,"wood.jpg");
     sc.add(portaIngresso);
     sc.portIngresso = portaIngresso;
     
     var porta1 = porta(2.5, 0.5, 6, 7.15, 14, 1, "wood.jpg",1,5);
     sc.add(porta1);
     sc.porta1 = porta1;
     
     var porta2 = porta(2.5, 0.5, 6, 26.8, 14, 1, "darker_wood.jpg");
     sc.add(porta2);
     sc.porta2 = porta2;
     
     var porta3 = porta(2.5, 0.5, 6, 26.8, 7, 1, "linee.jpg");
     sc.add(porta3);
     sc.porta3 = porta3;
     
     var porta4 = porta(2.4, 0.3, 6, 16.1, 6, 1, "legno.jpg");
     porta4.rotation.z = Math.PI/2;
     sc.add(porta4);
     sc.porta4 = porta4;
     
     var porta5 = porta(2, 0.3, 6, 16.3, 17.85, 1, "pallini.jpg");
     porta5.rotation.z = Math.PI/2;
     sc.add(porta5);
     sc.porta5 = porta5;
     
     var porta6 = porta(2, 0.3, 6, 22.9, 17.85, 1, "lineerosa.jpg");
     porta6.rotation.z = Math.PI/2;
     sc.add(porta6);
     sc.porta6 = porta6;
    
     var porta7 = porta(2, 0.3, 6, 22.9, 9.4, 1, "legno.jpg");
     porta7.rotation.z = Math.PI/2;
     sc.add(porta7);
     sc.porta7 = porta7;
     
     var porta8 = porta(2, 0.3, 6, 22.9, 3.4, 1, "legno.jpg");
     porta8.rotation.z = Math.PI/2;
     sc.add(porta8);
     sc.porta8 = porta8;
     
     sc.rotation.x = Math.PI/2;
     sc.rotation.y = Math.PI;
     sc.rotation.z = Math.PI;
     sc.position.set(-50,0,0);
     sc.scale.set(3,3,3);
     
	return sc;
}