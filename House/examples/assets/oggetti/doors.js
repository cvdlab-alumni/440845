function doors(){
	var scene = new THREE.Object3D();
	
	 var portaIngresso = porta(3,0.5,7,17.95,-0.15,1,"wood.jpg");
     scene.add(portaIngresso);
     scene.portIngresso = portaIngresso;
     
     var porta1 = porta(2.5, 0.5, 6, 7.15, 14, 1, "fiori.jpg");
     scene.add(porta1);
     scene.porta1 = porta1;
     
     var porta2 = porta(2.5, 0.5, 6, 26.8, 14, 1, "darker_wood.jpg");
     scene.add(porta2);
     scene.porta2 = porta2;
     
     var porta3 = porta(2.5, 0.5, 6, 26.8, 7, 1, "linee.jpg");
     scene.add(porta3);
     scene.porta3 = porta3;
     
     var porta4 = porta(2.4, 0.3, 6, 16.1, 6, 1, "legno.jpg");
     porta4.rotation.z = Math.PI/2;
     scene.add(porta4);
     scene.porta4 = porta4;
     
     var porta5 = porta(2, 0.3, 6, 16.3, 17.85, 1, "pallini.jpg");
     porta5.rotation.z = Math.PI/2;
     scene.add(porta5);
     scene.porta5 = porta5;
     
     var porta6 = porta(2, 0.3, 6, 22.9, 17.85, 1, "lineerosa.jpg");
     porta6.rotation.z = Math.PI/2;
     scene.add(porta6);
     scene.porta6 = porta6;
    
     var porta7 = porta(2, 0.3, 6, 22.9, 9.4, 1, "legno.jpg");
     porta7.rotation.z = Math.PI/2;
     scene.add(porta7);
     scene.porta7 = porta7;
     
     var porta8 = porta(2, 0.3, 6, 22.9, 3.4, 1, "legno.jpg");
     porta8.rotation.z = Math.PI/2;
     scene.add(porta8);
     scene.porta8 = porta8;
     
	return scene;
}