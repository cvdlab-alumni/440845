function pavimenti(){
	var p = new THREE.Object3D();
var pav = floor(34.8,24.5,0.1, "pv.jpg");
      pav.position.set(17.4,12.25,0);
      p.add(pav);
      
      var pavLiving = floor(15,13,0.1, "parq.jpg");
      pavLiving.position.set(8.25,7.25,1);
      p.add(pavLiving);
      
      var pavCorr = floor(6,13,0.1, "matt3.jpg");
      pavCorr.position.set(19.5,7.25,1);
      p.add(pavCorr);
      
      var pavCorrP = floor(0.8,13,0.1, "matt3.jpg");
      pavCorrP.position.set(16.25,7.25,1);
      p.add(pavCorrP);
      
      var pavS1 = floor(15,9.5,0.1, "moquette.jpg");
      pavS1.position.set(8.25,18.65,1);
     p.add(pavS1);
      
      var pavB1 = floor(3,9.5,0.1, "bagno.jpg");
      pavB1.position.set(18,18.65,1);
      p.add(pavB1);
      
      var pavB2 = floor(3,9.5,0.1, "bagno2.jpg");
      pavB2.position.set(21,18.65,1);
      p.add(pavB2);
      p.pavB2 = pavB2;
      
      var pavS2 = floor(10.5,9.5,0.1, "yellow.jpg");
      pavS2.position.set(28,18.65,1);
      p.add(pavS2);
      
      var pavS3 = floor(10.5,13.5,0.1, "parq.jpg");
      pavS3.position.set(28,7.25,1);
      p.add(pavS3);
      
      return p;
      }