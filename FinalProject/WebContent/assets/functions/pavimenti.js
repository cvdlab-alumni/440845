function pavimenti(){
	var p = new THREE.Object3D();
/*var pav = floor(36,24.5,1, "roof.jpg",2,2);
      pav.position.set(17,12.25,28);
      pav.opacity = 1;
      p.add(pav); 
      p.pav = pav; */
      
      var pavLiving = floor(15,13,0.1, "parq.jpg",1,1);
      pavLiving.position.set(8.25,7.25,0.9);
      p.add(pavLiving);
      
      var pavCorr = floor(6,13,0.1, "matt3.jpg",1,1);
      pavCorr.position.set(19.5,7.25,0.9);
      p.add(pavCorr);
      
      var pavCorrP = floor(0.8,13,0.1, "matt3.jpg",1,1);
      pavCorrP.position.set(16.25,7.25,0.9);
      p.add(pavCorrP);
      
      var pavS1 = floor(15,9.5,0.1, "moquette.jpg",1,1);
      pavS1.position.set(8.25,18.65,0.9);
     p.add(pavS1);
      
      var pavB1 = floor(3,9.5,0.1, "bagno.jpg",1,1);
      pavB1.position.set(18,18.65,0.9);
      p.add(pavB1);
      
      var pavB2 = floor(3,9.5,0.1, "bagno2.jpg",1,3);
      pavB2.position.set(21,18.65,0.9);
      p.add(pavB2);
      p.pavB2 = pavB2;
      
      var pavS2 = floor(10.5,9.5,0.1, "yellow.jpg",1,1);
      pavS2.position.set(28,18.65,0.9);
      p.add(pavS2);
      
      var pavS3 = floor(10.5,13.5,0.1, "parq.jpg",1,1);
      pavS3.position.set(28,7.25,0.9);
      p.add(pavS3);
      
      p.rotation.x = Math.PI/2;
      p.rotation.y = Math.PI;
      p.rotation.z = Math.PI;
      p.position.set(-50,2,0);
      p.scale.set(3,3,1);
      return p;
      }