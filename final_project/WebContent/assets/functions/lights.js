function light(){
	sc = new THREE.Object3D();
	
	var light1 = new THREE.SpotLight(0xffffff);  
    light1.position.set(21,9,5);
    light1.intensity = 0;
   // light1.distance =2;
    light1.angle = Math.PI/2;
   var target1 = new THREE.Object3D();
   target1.position.set(9,-40,20);
    
    var box1 = box(3,3,3); 
    box1.position.set(21,12,5);
    sc.add(box1);
    sc.box1 = box1;
   
    
    light1.target = target1; 
    //light1.rotation.z = Math.PI/2;
    //light1.target.position.set(23,20,5);
    sc.add(light1);
    sc.light1 = light1;
   // sc.add(new THREE.PointLightHelper(light1,4));
    
    var light2 = new THREE.SpotLight(0xffffff); 
    light2.position.set(3,12,5);
    light2.intensity = 0;
   //light2.distance = ;
    light2.angle = Math.PI/2;
    var target2 = new THREE.Object3D();
    target2.position.set(-20,0,9);
    light2.target = target2;
    sc.add(light2);
    sc.light2 = light2;
    
    var box2 = box(3,3,9); 
    box2.position.set(3,12,3);
    sc.add(box2);
    sc.box2 = box2;
    //s.add(new THREE.PointLightHelper(light2,1));
    
  /*  var light3 = new THREE.SpotLight(0xffffff); 
    light3.position.set(14.5,16,3.5);
    light3.intensity = 2;
    light3.distance = 30;
    light3.angle = 10;
    var target3 = new THREE.Object3D();
    target3.position.set(12,18,0);
    light3.target = target3;
    sc.add(light3);
    sc.light3 = light3;
    //s.add(new THREE.PointLightHelper(light3,1));
    
    var light4 = new THREE.SpotLight(0xffffff); 
    light4.position.set(32.5,17,2);
    light4.intensity = 4;
    light4.distance = 30;
    light4.angle = 10;
    var target4 = new THREE.Object3D();
    target4.position.set(28,16,2);
    light4.target = target4;
    light4.rotation.y = Math.PI/2;
    sc.add(light4);
    sc.light4 = light4;
    //s.add(new THREE.PointLightHelper(light4,1));
    
    var light5 = new THREE.SpotLight(0xffffff); 
    light5.position.set(17,23,2);
    light5.intensity = 2;
    light5.distance = 30;
    light5.angle = 10;
    var target5 = new THREE.Object3D();
    target5.position.set(17,23,1);
    light5.target = target5;
    //light5.rotation.y = Math.PI/2;
    sc.add(light5);
    sc.light5 = light5;
    //s.add(new THREE.PointLightHelper(light5,1));
    
    var light6 = new THREE.SpotLight(0xffffff); 
    light6.position.set(32.5,10,2);
    light6.intensity = 2;
    light6.distance = 30;
    light6.angle = 10;
    var target6 = new THREE.Object3D();
    target6.position.set(30,10,1.5);
    light6.target = target6;
    //light5.rotation.y = Math.PI/2;
    sc.add(light6);
    sc.light6 = light6;
    
    var light7 = new THREE.SpotLight(0xffffff); 
    light7.position.set(21,13,2);
    light7.intensity = 2;
    light7.distance = 30;
    light7.angle = 10;
    var target7 = new THREE.Object3D();
    target7.position.set(21,13,1);
    light7.target = target7;
    //light5.rotation.y = Math.PI/2;
    sc.add(light7);
    sc.light7 = light7;
    
    var light8 = new THREE.SpotLight(0xffffff); 
    light8.position.set(32.5,5,2);
    light8.intensity = 2;
    light8.distance = 30;
    light8.angle = 10;
    var target8 = new THREE.Object3D();
    target8.position.set(30,5,1.5);
    light8.target = target8;
    //light5.rotation.y = Math.PI/2;
    sc.add(light8); 
    sc.light8 = light8;
    */
    sc.rotation.x = Math.PI/2;
    sc.rotation.y = Math.PI;
    sc.rotation.z = Math.PI;
    sc.position.set(-50,0,0);
    sc.scale.set(3,3,3);
    
    return sc;
}