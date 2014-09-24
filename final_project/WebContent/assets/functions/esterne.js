function esterni(){
	var est = new THREE.Object3D();
	 
    var p1 = new punto(0.0,0.0);
    var p2 = new punto(0.343,0.0);
    var p3 = new punto(0.343,0.099);
    var p4 = new punto(0.0,0.099);
    var forma1 = forma([p1,p2,p3,p4]);
    
    
    var pi1 = new punto(0.132,0.09); //senso orario + abbasso numeri
    var pi2 = new punto(0.162,0.09);
    var pi3 = new punto(0.162,0.020);
    var pi4 = new punto(0.132,0.020); 
    
    var muroBucato1 = buca(forma1,[pi1,pi2,pi3,pi4]);
    
    var fi1 = new punto(0.272,0.019); //senso orario
    var fi2 = new punto(0.305,0.019);
    var fi3 = new punto(0.305,0.049);
    var fi4 = new punto(0.272,0.049); 
    
    var muroBucato2 = buca(muroBucato1,[fi1,fi2,fi3,fi4]);
    
    var fii1 = new punto(0.210,0.019); //senso orario
    var fii2 = new punto(0.240,0.019);
    var fii3 = new punto(0.240,0.049);
    var fii4 = new punto(0.210,0.049); 
    
    var muroBucato3 = buca(muroBucato2,[fii1,fii2,fii3,fii4]);
    
    var muroGeometry1 = creaGeometry(muroBucato2);
    var muro1 = createBumpMesh(muroGeometry1, "seam.jpg",15,15 );
    muro1.scale.set(100,100,20);
    muro1.rotation.y = Math.PI;
    muro1.rotation.x = 3*Math.PI/2;
   
    muro1.position.set(34.3,-0.2,9.9);
    
    est.add(muro1);
    
    var b1 = new punto(0.0,0.0);
    var b2 = new punto(0.248,0.0);
    var b3 = new punto(0.248,0.099);
    var b4 = new punto(0.0,0.099);
    var forma2 = forma([b1,b2,b3,b4]);
    
   
    var pl1 = new punto(0.145,0.045);
    var pl2 = new punto(0.190,0.045);
    var pl3 = new punto(0.190,0.075);
    var pl4 = new punto(0.145,0.075);
    var muroBucato4 = buca(forma2,[pl1,pl2,pl3,pl4]);
    
    var muroGeometry2 = creaGeometry(muroBucato4);
    var muro2 = createBumpMesh(muroGeometry2, "seam.jpg",15,15 );
    muro2.scale.set(100,100,20);
    muro2.position.set(-0.2,24.18,0);
    muro2.rotation.z = -Math.PI/2;
    muro2.rotation.y = - Math.PI/2;
    est.add(muro2);
    
    var c1 = new punto(0.0,0.0);
    var c2 = new punto(0.248,0.0);
    var c3 = new punto(0.248,0.099);
    var c4 = new punto(0.0,0.099);
    var forma3 = forma([b1,b2,b3,b4])
    
    
    var pm1 = new punto(0.122,0.044);
    var pm2 = new punto(0.152,0.044);
    var pm3 = new punto(0.152,0.079);
    var pm4 = new punto(0.122,0.079);
    var muroBucato5 = buca(forma3,[pm1,pm2,pm3,pm4]);
    
    var pn1 = new punto(0.183,0.044);
    var pn2 = new punto(0.212,0.044);
    var pn3 = new punto(0.212,0.079);
    var pn4 = new punto(0.183,0.079);
    var muroBucato6 = buca(muroBucato5,[pn1,pn2,pn3,pn4]);
    
    var muroGeometry3 = creaGeometry(muroBucato6);
    var muro3 = createBumpMesh(muroGeometry3, "seam.jpg",15,15 );
    muro3.scale.set(100,100,20);
    muro3.position.set(34.5,24.38,0);
    muro3.rotation.z = -Math.PI/2;
    muro3.rotation.y = - Math.PI/2;
    est.add(muro3);
    
    var d1 = new punto(0.0,0.0);
    var d2 = new punto(0.350,0.0);
    var d3 = new punto(0.350,0.099);
    var d4 = new punto(0.0,0.099);
    var forma4 = forma([d1,d2,d3,d4]);
    
    var pj1 = new punto(0.041,0.075); //dx
    var pj2 = new punto(0.075,0.075);
    var pj3 = new punto(0.075,0.042);
    var pj4 = new punto(0.041,0.042); 
    
    var muroBucato7 = buca(forma4,[pj1,pj2,pj3,pj4]);
    
    var fj1 = new punto(0.244,0.075); //sx
    var fj2 = new punto(0.279,0.075);
    var fj3 = new punto(0.279,0.042);
    var fj4 = new punto(0.244,0.042); 
    
    var muroBucato8 = buca(muroBucato7,[fj1,fj2,fj3,fj4]);
    
    var muroGeometry4 = creaGeometry(muroBucato8);
    var muro4 = createBumpMesh(muroGeometry4, "seam.jpg",15,15 );
    muro4.scale.set(100,100,20);
    muro4.position.set(34.5,24.38,0);
    
    muro4.rotation.y =  Math.PI;
    muro4.rotation.x =  Math.PI/2;
    est.add(muro4);
    
    
    est.rotation.x = Math.PI/2;
    est.rotation.y = Math.PI;
    est.rotation.z = Math.PI;
    est.position.set(-50,0,0);
    est.scale.set(3,3,3);
    
    return est;
}