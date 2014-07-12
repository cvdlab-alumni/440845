function windows(larghezza, profondita, altezza ){
	var geometry = new THREE.BoxGeometry(larghezza, profondita, altezza);
	var material = new THREE.MeshLambertMaterial({color: 0xADD8E6, transparent: true, opacity: 0.5});
	var f = new THREE.Mesh(geometry, material);
	//f.position.set(p_largh, p_prof, p_alt);
	
	return f;
	
}

function w(){
	var scene = new THREE.Object3D();
	
	var w1 = windows(3.5,3,0.5);
    w1.rotation.x = Math.PI/2;
    w1.position.set(5.25,0,6.5);
    scene.add(w1);
    
    var w2 = windows(3.5,3,0.5);
    w2.rotation.x = Math.PI/2;
    w2.position.set(12,0,6.5);
    scene.add(w2);
    
    var w3 = windows(4.2,4,0.5);
    w3.rotation.x = Math.PI/2;
    w3.position.set(8.2,24,6);
    scene.add(w3);
    
    var w4 = windows(4,3,0.5);
    w4.rotation.x = Math.PI/2;
    w4.position.set(28,24,6);
    scene.add(w4);
    
    var w5 = windows(5,3,0.5);
    w5.rotation.x = Math.PI/2;
    w5.rotation.y = Math.PI/2;
    w5.position.set(0,7.25,6);
    scene.add(w5);
    
    var w6 = windows(4,3.5,0.5);
    w6.rotation.x = Math.PI/2;
    w6.rotation.y = Math.PI/2;
    w6.position.set(34,4.5,6.25);
    scene.add(w6);
    
    var w7 = windows(4,3.5,0.5);
    w7.rotation.x = Math.PI/2;
    w7.rotation.y = Math.PI/2;
    w7.position.set(34,10.5,6.25);
    scene.add(w7);
    
    return scene;
}