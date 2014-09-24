function load(){
	var mesh = new THREE.Object3D();
	
////carica oggetto
   var loader1 = new THREE.OBJMTLLoader();
    loader1.addEventListener('load', function (event) {

      var clic = event.content;

      clic.scale.set(0.03, 0.03, 0.03);
      clic.rotation.x = Math.PI/2;
      //object.rotation.y = -Math.PI/2;
      clic.position.set(8, 19, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(clic);

    });


    loader1.load(
      'assets/models/clicClac.obj', 
      'assets/models/clicClac.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
    ////carica oggetto
     var loader2 = new THREE.OBJMTLLoader();
    loader2.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.035, 0.035, 0.035);
      object.rotation.x = Math.PI/2;
      //object.rotation.y = -Math.PI/2;
      object.position.set(-5.75, 35, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader2.load(
      'assets/models/lettoAzzurro.obj', 
      'assets/models/lettoAzzurro.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
    ////carica oggetto
    var loader3 = new THREE.OBJMTLLoader();
    loader3.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.03, 0.03, 0.03);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI/2;
      object.position.set(1, 3, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader3.load(
      'assets/models/sofa3.obj', 
      'assets/models/sofa3.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
    ////carica oggetto
    var loader4 = new THREE.OBJMTLLoader();
    loader4.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.032, 0.032, 0.032);
      object.rotation.x = Math.PI/2;
      //object.rotation.y = Math.PI/2;
      object.position.set(40, 35, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader4.load(
      'assets/models/lettoArancio.obj', 
      'assets/models/lettoArancio.mtl', 
      {side: THREE.DoubleSide}
    ); 
    ////carica oggetto
    var loader5 = new THREE.OBJMTLLoader();
    loader5.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.032, 0.032, 0.032);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(20, 16, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader5.load(
      'assets/models/mobileArancio.obj', 
      'assets/models/mobileArancio.mtl', 
      {side: THREE.DoubleSide}
    ); 
    ////carica oggetto
    var loader6 = new THREE.OBJMTLLoader();
    loader6.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.04, 0.04, 0.04);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(14.4, 15, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader6.load(
      'assets/models/bureauInfoOuvert.obj', 
      'assets/models/bureauInfoOuvert.mtl', 
      {side: THREE.DoubleSide}
    ); 
    ////carica oggetto
    var loader7 = new THREE.OBJMTLLoader();
    loader7.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.04, 0.04, 0.04);
      object.rotation.x = Math.PI/2;
      object.rotation.y = -Math.PI;
      object.position.set(31.5, 15.5, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader7.load(
      'assets/models/bureauInfoClair.obj', 
      'assets/models/bureauInfoClair.mtl', 
      {side: THREE.DoubleSide}
    ); 
    ////carica oggetto
    var loader8 = new THREE.OBJMTLLoader();
    loader8.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.03, 0.03, 0.03);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(12, 21, 5);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });


    loader8.load(
      'assets/models/bookcase.obj', 
      'assets/models/bookcase.mtl', 
      {side: THREE.DoubleSide}
    ); 
    ////carica oggetto
   var loader9 = new THREE.OBJMTLLoader();
    loader9.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.03, 0.03, 0.03);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(18,15.4, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });

    loader9.load(
      'assets/models/water.obj', 
      'assets/models/water.mtl', 
      {side: THREE.DoubleSide}
    ); 
////carica oggetto
    var loader10 = new THREE.OBJMTLLoader();
    loader10.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.03, 0.03, 0.03);
      object.rotation.x = Math.PI/2;
      //object.rotation.y = Math.PI;
      object.position.set(19.5,22.5, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });

    loader10.load(
      'assets/models/bidet.obj', 
      'assets/models/bidet.mtl', 
      {side: THREE.DoubleSide}
    ); 
////carica oggetto
    var loader11 = new THREE.OBJMTLLoader();
    loader11.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.04, 0.04, 0.04);
      object.rotation.x = Math.PI/2;
      object.rotation.y = -Math.PI/2;
      object.position.set(18.5,19, 4);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });

    loader11.load(
      'assets/models/small_lavatory.obj', 
      'assets/models/small_lavatory.mtl', 
      {side: THREE.DoubleSide}
    ); 
////carica oggetto
    var loader12 = new THREE.OBJMTLLoader();
    loader12.addEventListener('load', function (event) {

      var doccia = event.content;

      doccia.scale.set(0.035, 0.035, 0.035);
      doccia.rotation.x = Math.PI/2;
      doccia.rotation.y = -Math.PI/2;
      doccia.position.set(19.75,34.5, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(doccia);
      mesh.doccia = doccia;
      

    });

    loader12.load(
      'assets/models/doccia.obj', 
      'assets/models/doccia.mtl', 
      {side: THREE.DoubleSide}
    ); 
////carica oggetto
   var loader13 = new THREE.OBJMTLLoader();
    loader13.addEventListener('load', function (event) {

      var lav = event.content;

      lav.scale.set(0.02, 0.02, 0.02);
      lav.rotation.x = Math.PI/2;
     lav.rotation.y = Math.PI/2;
      lav.position.set(19.7,18, 3);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lav);
      mesh.lav = lav;
      

    });

    loader13.load(
      'assets/models/bathroom1.obj', 
      'assets/models/bathroom1.mtl', 
      {side: THREE.DoubleSide}
    ); 
////carica oggetto
  /*  var loader14 = new THREE.OBJMTLLoader();
    loader14.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.04, 0.04, 0.04);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(25,2.5, 0.85);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });

    loader14.load(
      'assets/models/kitchenSink.obj', 
      'assets/models/kitchenSink.mtl', 
      {side: THREE.DoubleSide}
    );  */
////carica oggetto
   /* var loader15 = new THREE.OBJMTLLoader();
    loader15.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(4, 4, 4);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(28.5,1, 1.8);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });

    loader15.load(
      'assets/models/refridgerator.obj', 
      'assets/models/refridgerator.mtl', 
      {side: THREE.DoubleSide}
    ); */
////carica oggetto
     var loader16 = new THREE.OBJMTLLoader();
    loader16.addEventListener('load', function (event) {

      var object = event.content;

      object.scale.set(0.03, 0.03, 0.03);
      object.rotation.x = Math.PI/2;
      object.rotation.y = Math.PI;
      object.position.set(14.5,16, 3.5);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(object);

    });

    loader16.load(
      'assets/models/lamp2.obj', 
      'assets/models/lamp2.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
////carica oggetto
    var loader17 = new THREE.OBJMTLLoader();
    loader17.addEventListener('load', function (event) {

      var lampada = event.content;

      lampada.scale.set(0.8, 0.8, 0.8);
      lampada.rotation.x = Math.PI/2;
      lampada.rotation.y = Math.PI;
      lampada.position.set(3,12, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lampada);
      mesh.lampada = lampada;
      

    });

    loader17.load(
      'assets/models/pedestal-vase-lamp.obj', 
      'assets/models/pedestal-vase-lamp.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
  /*  var loader18 = new THREE.OBJMTLLoader();
    loader18.addEventListener('load', function (event) {

      var lampada = event.content;

      lampada.scale.set(1.6, 1.6, 1.6);
      lampada.rotation.x = Math.PI/2;
      lampada.rotation.y = Math.PI;
      lampada.position.set(32.5,15, 2);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lampada);
      mesh.lampada = lampada;
      

    });

    loader18.load(
      'assets/models/farola1.obj', 
      'assets/models/farola1.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
    var loader19 = new THREE.OBJMTLLoader();
    loader19.addEventListener('load', function (event) {

      var lampada = event.content;

      lampada.scale.set(0.05, 0.05, 0.05);
      lampada.rotation.x = Math.PI/2;
      lampada.rotation.y = Math.PI;
      lampada.position.set(32.5,10, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lampada);
      mesh.lampada = lampada;
      

    });

    loader19.load(
      'assets/models/table_lamp.obj', 
      'assets/models/table_lamp.mtl', 
      {side: THREE.DoubleSide}
    ); 
    */
    var loader20 = new THREE.OBJMTLLoader();
    loader20.addEventListener('load', function (event) {

      var lampada = event.content;

      lampada.scale.set(6, 6, 7);
      lampada.rotation.x = Math.PI/2;
      lampada.rotation.y = Math.PI;
      lampada.position.set(22,15, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lampada);
      mesh.lampada = lampada;
      

    });

    loader20.load(
      'assets/models/little_lamp3.obj', 
      'assets/models/little_lamp3.mtl', 
      {side: THREE.DoubleSide}
    ); /*
    
    
   /* var loader21 = new THREE.OBJMTLLoader();
    loader21.addEventListener('load', function (event) {

      var lampada = event.content;

      lampada.scale.set(0.05, 0.05, 0.05);
      lampada.rotation.x = Math.PI/2;
      lampada.rotation.y = Math.PI;
      lampada.position.set(32.5,5, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lampada);
      mesh.lampada = lampada;
      

    });

    loader21.load(
      'assets/models/table_lamp.obj', 
      'assets/models/table_lamp.mtl', 
      {side: THREE.DoubleSide}
    ); */
    
    var loader22 = new THREE.OBJMTLLoader();
    loader22.addEventListener('load', function (event) {

      var lampada = event.content;

      lampada.scale.set(0.03, 0.03, 0.03);
      lampada.rotation.x = Math.PI/2;
      lampada.rotation.y = Math.PI;
      lampada.position.set(47,8, 1);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(lampada);
      mesh.lampada = lampada;
      

    });

    loader22.load(
      'assets/models/scrivania160W.obj', 
      'assets/models/scrivania160W.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
    var loader23 = new THREE.OBJMTLLoader();
    loader23.addEventListener('load', function (event) {

      var m = event.content;

      m.scale.set(0.06, 0.06, 0.06);
      //m.rotation.x = Math.PI/2;
      //m.rotation.y = Math.PI;
      m.rotation.x = Math.PI/2;
      m.position.set(4,13.75,7);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(m);
     
      

    }); 

    loader23.load(
      'assets/models/MontBlancFrame.obj', 
      'assets/models/MontBlancFrame.mtl', 
      {side: THREE.DoubleSide}
    ); 
    var loader24 = new THREE.OBJMTLLoader();
    loader24.addEventListener('load', function (event) {

      var m = event.content;

      m.scale.set(0.06, 0.06, 0.06);
      //m.rotation.x = Math.PI/2;
      //m.rotation.y = Math.PI;
      m.rotation.x = Math.PI/2;
      m.position.set(4.2,23.15,7);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(m);
     
      

    });

    loader24.load(
      'assets/models/ColoredFountainFrame.obj', 
      'assets/models/ColoredFountainFrame.mtl', 
      {side: THREE.DoubleSide}
    ); 
    var loader25 = new THREE.OBJMTLLoader();
    loader25.addEventListener('load', function (event) {

      var m = event.content;

      m.scale.set(0.06, 0.06, 0.06);
      //m.rotation.x = Math.PI/2;
      //m.rotation.y = Math.PI;
      m.rotation.x = Math.PI/2;
      m.position.set(13.50,23.15,7);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(m);
     
      

    });

    loader25.load(
      'assets/models/YosemiteFrame.obj', 
      'assets/models/YosemiteFrame.mtl', 
      {side: THREE.DoubleSide}
    ); 
     
 /*  var loader26 = new THREE.OBJMTLLoader();
    loader26.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(0.06, 0.06, 0.06);
     
      b.position.set(11,7,1.5);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader26.load(
      'assets/models/basketball.obj', 
      'assets/models/basketball.mtl', 
      {side: THREE.DoubleSide}
    );  */
	
/*	var loader27 = new THREE.OBJMTLLoader();
    loader27.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(0.03, 0.03, 0.03);
     
      b.position.set(5,6,1.5);
      b.rotation.x = Math.PI/2;
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader27.load(
      'assets/models/holdingFemale02.obj', 
      'assets/models/holdingFemale02.mtl', 
      {side: THREE.DoubleSide}
    );
    */
    var loader28 = new THREE.OBJMTLLoader();
    loader28.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(0.045, 0.045, 0.045);
     
      b.position.set(30,20,1.5);
      b.rotation.x = Math.PI/2;
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader28.load(
      'assets/models/bathmat.obj', 
      'assets/models/bathmat.mtl', 
      {side: THREE.DoubleSide}
    );
    var loader29 = new THREE.OBJMTLLoader();
    loader29.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(1, 1, 1);
     
      b.position.set(30,12,1.5);
      b.rotation.x = Math.PI/2;
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader29.load(
      'assets/models/dining-chair.obj', 
      'assets/models/dining-chair.mtl', 
      {side: THREE.DoubleSide}
    );
    
    var loader30 = new THREE.OBJMTLLoader();
    loader30.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(1, 1, 1);
     
      b.position.set(27,12,1.5);
      b.rotation.x = Math.PI/2;
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader30.load(
      'assets/models/dining-chair.obj', 
      'assets/models/dining-chair.mtl', 
      {side: THREE.DoubleSide}
    );
    
  /*  var loader31 = new THREE.OBJMTLLoader();
    loader31.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(0.02, 0.02, 0.02);
     
      b.position.set(20,6,1.5);
      b.rotation.x = Math.PI/2;
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader31.load(
      'assets/models/carpet.obj', 
      'assets/models/carpet.mtl', 
      {side: THREE.DoubleSide}
    ); */
    
    var loader32 = new THREE.OBJMTLLoader();
    loader32.addEventListener('load', function (event) {

      var b = event.content;

      b.scale.set(0.05, 0.05, 0.05);
     
      b.position.set(40,5,4);
      b.rotation.x = Math.PI/2;
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(b);
      mesh.b = b ;
     
      

    });

    loader32.load(
      'assets/models/flowers.obj', 
      'assets/models/flowers.mtl', 
      {side: THREE.DoubleSide}
    );
    
    var loader33 = new THREE.OBJMTLLoader();
    loader33.addEventListener('load', function (event) {

      var m = event.content;

      m.scale.set(0.09, 0.09, 0.09);
      //m.rotation.x = Math.PI/2;
      m.rotation.y = Math.PI/2;
      m.rotation.x = 1*Math.PI/2;
      m.position.set(1,20,7);
      
      //mesh = object;
      //scene.add(mesh);
      mesh.add(m);
     
      

    });

    loader33.load(
      'assets/models/TigerFrame.obj', 
      'assets/models/TigerFrame.mtl', 
      {side: THREE.DoubleSide}
    ); 
    
 
   
    mesh.rotation.x = Math.PI/2;
    mesh.rotation.y = Math.PI;
    mesh.rotation.z = Math.PI;
    mesh.position.set(-50,0,0);
    mesh.scale.set(3,3,3);
     
    
    



    
    
    return mesh;
}