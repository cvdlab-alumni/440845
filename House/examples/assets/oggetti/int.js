 function walls(){ 
	scene = new THREE.Object3D();
	
	var pareteS3 = floor(10.8, 0.1, 10, "white.jpg");
    pareteS3.position.set(28,0.9,5);
    scene.add(pareteS3);
    
    var pareteS2 = floor(0.1, 9.2, 10, "gaypride.png");
    pareteS2.position.set(33.3,18.7,5);
    scene.add(pareteS2);
    
    var pareteCorr = floor(6.5, 0.1, 10, "white.jpg");
    pareteCorr.position.set(19.5,13.9,5);
    scene.add(pareteCorr);
    
    var pareteB = floor(6.5, 0.1, 10, "white.jpg");
    pareteB.position.set(19.5,23.3,5);
    scene.add(pareteB);
    
    var pareteB2 = floor(6.5, 0.1, 10, "white.jpg");
    pareteB2.position.set(19.5,14.5,5);
    scene.add(pareteB2);
    
    var pareteS1 = floor(0.1, 9.2, 10, "cel.jpg");
    pareteS1.position.set(0.9,18.7,5);
    scene.add(pareteS1);
    
    var pareteBbianco = floor(0.1, 9.2, 8, "bagno.jpg");
    pareteBbianco.position.set(19.1,18.7,5);
    scene.add(pareteBbianco);
    
    var pareteBblu = floor(0.1, 9.2, 8, "bagno2.jpg");
    pareteBblu.position.set(19.7,18.7,5);
    scene.add(pareteBblu);
    
    var verde1 = floor(10.5, 0.1, 3.3, "mint.jpg");
    verde1.position.set(28,23.3,2.8);
    scene.add(verde1);
    
    var verde2 = floor(10.5, 0.1, 2.5, "mint.jpg");
    verde2.position.set(28,23.3,8.7);
    scene.add(verde2);
    
    var verde3 = floor(3.8, 0.1, 3.2, "mint.jpg");
    verde3.position.set(24.8,23.3,6);
    scene.add(verde3);
    
    var verde4 = floor(3.6, 0.1, 3.2, "mint.jpg");
    verde4.position.set(31.5,23.3,6);
    scene.add(verde4);

    var fuxia1 = floor(0.05, 3.8, 10, "cuori.jpg");
    fuxia1.position.set(22.9,16,5);
    scene.add(fuxia1);
    
    var fuxia2 = floor(0.05, 3.8, 10, "cuori.jpg");
    fuxia2.position.set(22.9,21.8,5);
    scene.add(fuxia2);
    
    var fuxia3 = floor(0.05, 2, 3, "cuori.jpg");
    fuxia3.position.set(22.9,18.9,8.5);
    scene.add(fuxia3);
    
    var bblu1 = floor(0.1, 3.8, 10, "bagno2.jpg");
    bblu1.position.set(22.3,16,5);
    scene.add(bblu1);
    
    var bblu2 = floor(0.1, 3.8, 10, "bagno2.jpg");
    bblu2.position.set(22.3,21.8,5);
    scene.add(bblu2);
    
    var bblu3 = floor(0.1, 2, 3, "bagno2.jpg");
    bblu3.position.set(22.3,18.9,8.5);
    scene.add(bblu3);
    
    var bb1 = floor(0.05, 3.8, 10, "bagno.jpg");
    bb1.position.set(16.4,16,5);
    scene.add(bb1);
    
    var bb2 = floor(0.05, 3.8, 10, "bagno.jpg");
    bb2.position.set(16.4,21.8,5);
    scene.add(bb2);
    
    var bb3 = floor(0.05, 2, 3, "bagno.jpg");
    bb3.position.set(16.4,18.9,8.5);
    scene.add(bb3);
    
    var parl1 = floor(0.1, 3.8, 10, "white.jpg");
    parl1.position.set(15.8,16,5);
    scene.add(parl1);
    
    var parl2 = floor(0.1, 3.8, 10, "white.jpg");
    parl2.position.set(15.8,21.8,5);
    scene.add(parl2);
    
    var parl3 = floor(0.1, 2.5, 3, "white.jpg");
    parl3.position.set(15.8,19,8.5);
    scene.add(parl3);
    
    var po1 = floor(3.85, 0.1, 10, "turq.jpg");
    po1.position.set(25,14.4,5);
    scene.add(po1);
    
    var po2 = floor(3.85, 0.1, 10, "turq.jpg");
    po2.position.set(31.35,14.4,5);
    scene.add(po2);
    
    var po3 = floor(2.7, 0.1, 3, "turq.jpg");
    po3.position.set(28.2,14.4,8.5);
    scene.add(po3);
    ////
   
    ////
    var s5 = floor(15, 0.1, 3, "toystoryandy.jpg");  //alto
    s5.position.set(8.5,14.45,8.35);
    scene.add(s5);   
    
  
    
    var s8 = floor(15, 0.1, 3, "flowers.jpg");  //alto
    s8.position.set(8.5,13.88,8.35);
    scene.add(s8);
    
    var s9 = floor(6.25, 0.1, 6, "flowers.jpg"); //dx
    s9.position.set(12.8,13.93,3.8);
    scene.add(s9);
    
    var s10 = floor(6.25, 0.1, 6, "flowers.jpg"); //sx
    s10.position.set(4,13.93,3.8);
    scene.add(s10); 
    var q11 = floor(3.85, 0.1, 9, "orange.jpg");
    q11.position.set(25,7.75,4.5);
    scene.add(q11);
    
    var q12 = floor(3.85, 0.1, 9, "orange.jpg");
    q12.position.set(31.35,7.75,4.5);
    scene.add(q12);
    
    var q13 = floor(2.7, 0.1, 3, "orange.jpg");
    q13.position.set(28.2,7.75,7.5);
    scene.add(q13);
    ///
    var q14 = floor(3.85, 0.1, 9, "orange.jpg");
    q14.position.set(25,7,4.5);
    scene.add(q14);
    
    var q15 = floor(3.85, 0.1, 9, "orange.jpg");
    q15.position.set(31.35,7,4.5);
    scene.add(q15);
    
    var q16 = floor(2.7, 0.1, 3, "orange.jpg");
    q16.position.set(28.2,7,7.5);
    scene.add(q16);
    ///
    var d1 = floor (0.05, 13, 2.2, "flowers.jpg");
    d1.position.set(1, 7.5, 8.9);
    scene.add(d1);
    var d2 = floor (0.05, 4.25, 6.75, "mintt.jpg");
    d2.position.set(1, 3, 4.5);
    scene.add(d2);
    var d3 = floor (0.05, 4.25, 6.75, "mintt.jpg");
    d3.position.set(1, 11.75, 4.5);
    scene.add(d3);
    var d4 = floor (0.05, 4.5, 3.75, "mintt.jpg");
    d4.position.set(1, 7.4,2.5);
    scene.add(d4);
   
    var f1 = floor(6, 0.05,2.2, "cel.jpg");
    f1.position.set(19.5, 1, 8.9);
    scene.add(f1);
    var f2 = floor(1.75, 0.05,8, "cel.jpg");
    f2.position.set(17.25, 1, 4);
    scene.add(f2);
    var f3 = floor(1.75, 0.05,8, "cel.jpg");
    f3.position.set(21.75, 1, 4);
    scene.add(f3);
    ///
    var g1 = floor (0.05,3.4, 9, "orange.jpg");
    g1.position.set(33.4, 7.25, 5.5);
    scene.add(g1);
    var g2 = floor (0.05,2.2, 9, "orange.jpg");
    g2.position.set(33.4, 2, 5.5);
    scene.add(g2);
    var g3 = floor (0.05,2.2, 9, "orange.jpg");
    g3.position.set(33.4, 13, 5.5);
    scene.add(g3);
    var g4 = floor (0.05,2.75, 3.6, "white.jpg");
    g4.position.set(33.4, 4.25, 2.75);
    scene.add(g4);
    var g5 = floor (0.05,2.9, 3.6, "white.jpg");
    g5.position.set(33.4,10.45, 2.75);
    scene.add(g5);
    var g6 = floor (0.05,2.75, 2.2, "white.jpg");
    g6.position.set(33.4, 4.25, 8.9);
    scene.add(g6);
    var g7 = floor (0.05,2.9, 2.2, "white.jpg");
    g7.position.set(33.4,10.45, 8.9);
    scene.add(g7);
    
return scene;
}