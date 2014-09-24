function openDoor5(perno){
	var open = new TWEEN.Tween(perno.position).to({
		x :-1.5 ,
		y:1,
		z : -59
	}, 300).start();
	
}
function closeDoor5(perno){
	var close = new TWEEN.Tween(perno.position).to({
		x :- 1.5 ,
		y:1,
		z : -53.5
	}, 1000).start();
	
}
function openDoorIn(perno){
	var open = new TWEEN.Tween(perno.rotation).to({
		x :Math.PI/2 ,
		y: Math.PI,
		z : Math.PI/6
	}, 2000).easing(TWEEN.Easing.Linear.None).start();
	
}
function closeDoorIn(perno){
	var open = new TWEEN.Tween(perno.rotation).to({
		x :Math.PI/2 ,
		y: Math.PI,
		z : Math.PI
	}, 2000).easing(TWEEN.Easing.Linear.None).start();
	
}
function openRoof(perno){
	var open = new TWEEN.Tween(perno.rotation).to({
		x :Math.PI/2 ,
		y:2*Math.PI/3,
		z : 0
	}, 2000).easing(TWEEN.Easing.Linear.None).start();
	
}
function closeRoof(perno){
	var close = new TWEEN.Tween(perno.rotation).to({
		x :Math.PI/2 ,
		y: 0,
		z : 0
	}, 1000).easing(TWEEN.Easing.Linear.None).start();
	
}

function openDoor6(perno){
	var open = new TWEEN.Tween(perno.position).to({
		x :18.5 ,
		y:1,
		z : -59
	}, 300).start();
	
}
function closeDoor6(perno){
	var close = new TWEEN.Tween(perno.position).to({
		x :18.5 ,
		y:1,
		z : -53.5
	}, 1000).start();
	
}
function openWindow(finestra,a,b,c){
	var open = new TWEEN.Tween(finestra.position).to({
		x :a ,
		y:b,
		z : c
	}, 1000).start();
	
}
function closeWindow(finestra,a,b,c){
	var close = new TWEEN.Tween(finestra.position).to({
		x :a,
		y:b,
		z : c
	}, 1000).start();
	
}

function muoviAcqua(scena,particelle){
	scena.add(particelle);
	//particelle.visible = true;
	
	var acqua = new TWEEN.Tween(particelle.position).to({
		x : 0,
		y: -4,
		z : 0
	}, 1000).repeat(Infinity).start();
	
	
}

function pioggia(scena,particelle){
	
	scena.add(particelle);
	//scena.fog = new THREE.Fog('#c0c0c0', 500, 500);
	var acqua = new TWEEN.Tween(particelle.position).to({
		x : 0,
		y: -50,
		z : 0
	}, 1000).repeat(Infinity).start();
}