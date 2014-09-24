 function walls(){ 
	s = new THREE.Object3D();
	
	var pareteS3 = floor(10.8, 0.1, 10, "white.jpg",1,1);
    pareteS3.position.set(28,0.9,5);
    s.add(pareteS3); 
    
    var pareteS2 = floor(0.1, 9.2, 10, "gaypride.png",1,1);
    pareteS2.position.set(33.3,18.7,5);
    s.add(pareteS2);
    
    var pareteCorr = floor(6.5, 0.1, 10, "white.jpg",1,1);
    pareteCorr.position.set(19.5,13.9,5);
    s.add(pareteCorr);
    
    var pareteB = floor(6.5, 0.1, 10, "white.jpg",1,1);
    pareteB.position.set(19.5,23.3,5);
    s.add(pareteB);
    
    var pareteB2 = floor(6.5, 0.1, 10, "white.jpg",1,1);
    pareteB2.position.set(19.5,14.5,5);
    s.add(pareteB2);
    
    var pareteS1 = floor(0.1, 9.2, 10, "cele.jpg",1,1);
    pareteS1.position.set(0.9,18.7,5);
    s.add(pareteS1);
    
    var pareteBbianco = floor(0.1, 9.2, 8, "bagno.jpg",1,1);
    pareteBbianco.position.set(19.1,18.7,5);
    s.add(pareteBbianco);
    
    var pareteBblu = floor(0.1, 9.2, 8, "bagno2.jpg",1,1);
    pareteBblu.position.set(19.7,18.7,5);
    s.add(pareteBblu); 
    
    var verde1 = floor(10.5, 0.1, 3.3, "mint.jpg",1,1);
    verde1.position.set(28,23.3,2.8);
    s.add(verde1);
    
    var verde2 = floor(10.5, 0.1, 2.5, "mint.jpg",1,1);
    verde2.position.set(28,23.3,8.7);
    s.add(verde2);
    
    var verde3 = floor(4.5, 0.1, 3.2, "mint.jpg",1,1);
    verde3.position.set(24.8,23.3,6);
    s.add(verde3);
    
    var verde4 = floor(3.6, 0.1, 3.2, "mint.jpg",1,1);
    verde4.position.set(31.5,23.3,6);
    s.add(verde4);  

    var fuxia1 = floor(0.05, 3.8, 10, "hearts.jpg",1.5,0.75);
    fuxia1.position.set(22.9,16,5);
    s.add(fuxia1);
    
    var fuxia2 = floor(0.05, 3.8, 10, "hearts.jpg",1.5,0.75);
    fuxia2.position.set(22.9,21.8,5);
    s.add(fuxia2);
   
    var fuxia3 = floor(0.05, 2, 3, "hearts.jpg",0.5,0.5);
    fuxia3.position.set(22.9,18.9,8.5);
    s.add(fuxia3);
    
    var bblu1 = floor(0.1, 3.8, 10, "bagno2.jpg",1.5,0.75);
    bblu1.position.set(22.3,16,5);
    s.add(bblu1);
    
    var bblu2 = floor(0.1, 3.8, 10, "bagno2.jpg",1.5,0.75);
    bblu2.position.set(22.3,21.8,5);
    s.add(bblu2);
    
    var bblu3 = floor(0.1, 2, 3, "bagno2.jpg",0.5,0.5);
    bblu3.position.set(22.3,18.9,8.5);
    s.add(bblu3);
    
    var bb1 = floor(0.05, 3.8, 10, "bagno.jpg",0.75,0.5);
    bb1.position.set(16.4,16,5);
    s.add(bb1);
    
    var bb2 = floor(0.05, 3.8, 10, "bagno.jpg",0.75,0.5);
    bb2.position.set(16.4,21.8,5);
    s.add(bb2);
    
    var bb3 = floor(0.05, 2, 3, "bagno.jpg",0.25,0.25);
    bb3.position.set(16.4,18.9,8.5);
    s.add(bb3);
    
    var parl1 = floor(0.1, 3.8, 10, "white.jpg",1,1);
    parl1.position.set(15.8,16,5);
    s.add(parl1);
    
    var parl2 = floor(0.1, 3.8, 10, "white.jpg",1,1);
    parl2.position.set(15.8,21.8,5);
    s.add(parl2);
    
    var parl3 = floor(0.1, 2.5, 3, "white.jpg",1,1);
    parl3.position.set(15.8,19,8.5);
    s.add(parl3);
    
    var po1 = floor(3.85, 0.1, 10, "turq.jpg",1,1);
    po1.position.set(25,14.4,5);
    s.add(po1);
    
    var po2 = floor(3.85, 0.1, 10, "turq.jpg",1,1);
    po2.position.set(31.35,14.4,5);
    s.add(po2);
    
    var po3 = floor(2.7, 0.1, 3, "turq.jpg",1,1);
    po3.position.set(28.2,14.4,8.5);
    s.add(po3);
    ////
   
    ////
    
    var s5 = floor(15, 0.1, 3, "toystoryandy.jpg");  //alto
    s5.position.set(8.5,14.45,8.35);
    s.add(s5);   
    
  
    
    var s8 = floor(15, 0.1, 3, "cele.jpg",2,1);  //alto
    s8.position.set(8.5,13.88,8.35);
    s.add(s8);
    
    var s9 = floor(6.25, 0.1, 6, "cele.jpg",1,1); //dx
    s9.position.set(12.8,13.93,3.8);
    s.add(s9);
    
    var s10 = floor(6.25, 0.1, 6, "cele.jpg",1,1); //sx
    s10.position.set(4,13.93,3.8);
    s.add(s10); 
    
    var q11 = floor(3.85, 0.1, 9, "orange.jpg",1,1);
    q11.position.set(25,7.75,4.5);
    s.add(q11);
    
    var q12 = floor(3.85, 0.1, 9, "orange.jpg",1,1);
    q12.position.set(31.35,7.75,4.5);
    s.add(q12);
    
    var q13 = floor(2.7, 0.1, 3, "orange.jpg",0.5,0.5);
    q13.position.set(28.2,7.75,7.5);
    s.add(q13);
    ///
    var q14 = floor(3.85, 0.1, 9, "orange.jpg",1,1);
    q14.position.set(25,7,4.5);
    s.add(q14);
    
    var q15 = floor(3.85, 0.1, 9, "orange.jpg",1,1);
    q15.position.set(31.35,7,4.5);
    s.add(q15);
    
    var q16 = floor(2.7, 0.1, 3, "orange.jpg",0.5,0.5);
    q16.position.set(28.2,7,7.5);
    s.add(q16);
    /// 
    var d1 = floor (0.05, 13, 2.2, "cele.jpg",1,1);
    d1.position.set(1, 7.5, 8.9);
    s.add(d1);
    var d2 = floor (0.05, 4.25, 6.75, "cele.jpg",1.5,1);
    d2.position.set(1, 3, 4.5);
    s.add(d2);
    var d3 = floor (0.05, 4.25, 6.75, "cele.jpg",1.5,1);
    d3.position.set(1, 11.75, 4.5);
    s.add(d3);
    var d4 = floor (0.05, 4.5, 3.75, "cele.jpg",1,1);
    d4.position.set(1, 7.4,2.5);
    s.add(d4);
   
    var f1 = floor(6, 0.05,2.2, "cele.jpg",1,1);
    f1.position.set(19.5, 1, 8.9);
    s.add(f1);
    var f2 = floor(1.75, 0.05,8, "cele.jpg",1,1);
    f2.position.set(17.25, 1, 4);
    s.add(f2);
    var f3 = floor(1.75, 0.05,8, "cele.jpg",1,1);
    f3.position.set(21.75, 1, 4);
    s.add(f3); 
    ///
    var g1 = floor (0.05,3.4, 9, "orange.jpg",1,1);
    g1.position.set(33.4, 7.25, 5.5);
    s.add(g1);
    var g2 = floor (0.05,2.2, 9, "orange.jpg",1,1);
    g2.position.set(33.4, 2, 5.5);
    s.add(g2);
    var g3 = floor (0.05,2.2, 9, "orange.jpg",1,1);
    g3.position.set(33.4, 13, 5.5);
    s.add(g3);
    
    var g4 = floor (0.05,2.75, 3.6, "white.jpg",1,1);
    g4.position.set(33.4, 4.25, 2.75);
    s.add(g4);
    var g5 = floor (0.05,2.9, 3.6, "white.jpg",1,1);
    g5.position.set(33.4,10.45, 2.75);
    s.add(g5);
    var g6 = floor (0.05,2.75, 2.2, "white.jpg",1,1);
    g6.position.set(33.4, 4.25, 8.9);
    s.add(g6);
    var g7 = floor (0.05,2.9, 2.2, "white.jpg",1,1);
    g7.position.set(33.4,10.45, 8.9);
    s.add(g7); 
    
    
    s.rotation.x = Math.PI/2;
    s.rotation.y = Math.PI;
    s.rotation.z = Math.PI;
    s.position.set(-50,0,0);
    s.scale.set(3,3,3);
    
return s;
}