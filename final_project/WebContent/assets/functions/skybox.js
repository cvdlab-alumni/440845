function skyBox(){
	var scena = new THREE.Object3D();
	

var directions = ["siege_left", "siege_right", "siege_top", "grasslight", "siege_back", "siege_front"];
	//var directions = ["xpos", "xneg", "zpos", "zneg", "ypos", "yneg"];
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push(new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture("assets/textures/general/"+ directions[i] + ".jpg"),
			side: THREE.BackSide,
			format:THREE.RGBFormat
		}));
	var skybox_material = new THREE.MeshFaceMaterial(materialArray);
	var skybox = new THREE.Mesh(new THREE.CubeGeometry(500,200,500), skybox_material);
	skybox.color = new THREE.Color('#FFFFFF');
	skybox.position.set(-70,100,50);
	scena.add(skybox);
	
	var directions1 = ["stratosphere_left", "stratosphere_right", "stratosphere_top", "grass", "stratosphere_back", "stratosphere_front"];
	//var directions = ["xpos", "xneg", "zpos", "zneg", "ypos", "yneg"];
	var materialArray1 = [];
	for (var i = 0; i < 6; i++)
		materialArray1.push(new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture("assets/textures/general/"+ directions1[i] + ".jpg"),
			side: THREE.BackSide,
			format:THREE.RGBFormat
		}));
	var skybox_material1 = new THREE.MeshFaceMaterial(materialArray1);
	var skybox1 = new THREE.Mesh(new THREE.CubeGeometry(500,200,500), skybox_material1);
	skybox1.color = new THREE.Color('#FFFFFF');
	skybox1.position.set(-70,100,50);
	scena.add(skybox1);
	
	
	
	scena.skybox=skybox; 
	scena.skybox1=skybox1;
		
		
	
	return scena;
}