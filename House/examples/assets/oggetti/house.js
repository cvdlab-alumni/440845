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
            new THREE.MeshLambertMaterial({color: 0xFFDAB9, side: THREE.DoubleSide, shading: THREE.FlatShading}),
            new THREE.MeshBasicMaterial({overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
            ];
          mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
            
          scene.add(mesh); });
 return   scene ;     
}