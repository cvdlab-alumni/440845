function createHouse(){
	var scene = new THREE.Object3D();
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
            new THREE.MeshPhongMaterial({color: 0xFFDAB9, side: THREE.DoubleSide, shading: THREE.FlatShading}),
            new THREE.MeshPhongMaterial({overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
            ];
          mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
          mesh.rotation.x = Math.PI/2;
          mesh.rotation.y = Math.PI;
          mesh.position.set(50,0,0);
          mesh.scale.set(3,3,3);
          
            
          scene.add(mesh); });
 return   scene ;     
}