function interseca(raycaster, house, document, lampadari,   scene){
	
	var intersects = raycaster.intersectObjects([house.portaIngresso.portaIn]);
	var intersects1 = raycaster.intersectObjects([house.porta1.portaIn]);
	var intersects2 = raycaster.intersectObjects([house.porta2.portaIn]);
	var intersects3 = raycaster.intersectObjects([house.porta3.portaIn]);
	var intersects5 = raycaster.intersectObjects([house.porta5.portaIn]);
	var intersects6 = raycaster.intersectObjects([house.porta6.portaIn]);

	var intersectsF1 = raycaster.intersectObjects([house.finestre.w1]);
	var intersectsF2 = raycaster.intersectObjects([house.finestre.w2]);
	var intersectsF3 = raycaster.intersectObjects([house.finestre.w3]);
	var intersectsF4 = raycaster.intersectObjects([house.finestre.w4]);
	var intersectsF5 = raycaster.intersectObjects([house.finestre.w5]);
	var intersectsF6 = raycaster.intersectObjects([house.finestre.w6]);
	var intersectsF7 = raycaster.intersectObjects([house.finestre.w7]);
	var intersectsWater = raycaster.intersectObjects([house.boxWater]);
	var intersectsRoof = raycaster.intersectObjects([house.pav.portaIn]);
	var intersectsL1 = raycaster.intersectObjects([lampadari.box1]);
	

	var intersectsCampanello = raycaster.intersectObjects([house.bottone]);

	if (intersectsCampanello.length > 0) {

		document.getElementById('audioDoorBell').play();
	}
	if (intersectsWater.length > 0) {

		document.getElementById('toilet').play();
	}
if (intersectsRoof.length > 0) {

		if (house.pav.rotation.y===0){
			document.getElementById('audioDoorOpen').play();

			openRoof(house.pav);
		} else {
			closeRoof(house.pav);
			document.getElementById('audioDoorClose').play();


		}
	}

	if (intersectsL1.length > 0) {
		if (lampadari.light1.intensity === 0){


			lampadari.light1.intensity = 4;
			//accesaL1 = true;
			document.getElementById('audioSwitch1').play();
		} else {
			lampadari.light1.intensity = 0;
			//accesaL1 = false;
			document.getElementById('audioSwitch2').play();


		} }
	var intersectsL2 = raycaster.intersectObjects([lampadari.box2]);


	if (intersectsL2.length > 0) {
		if (lampadari.light2.intensity===0){


			lampadari.light2.intensity = 2;
			//accesaL2 = true;
			document.getElementById('audioSwitch1').play();
		} else {
			lampadari.light2.intensity = 0;
			//accesaL2 = false;
			document.getElementById('audioSwitch2').play();


		} }



/*	var intersectsDoccia = raycaster.intersectObjects([house.boxDoccia]);
	var acqua = particleWater(3000, 8, 18 , 8, 11, 6, -69, "assets/textures/general/water.png");



	if (intersectsDoccia.length > 0) {
		console.log("intersecato boxDoccia");
		if (!house.boxDoccia.isAcqua){
			console.log("accesa");
			house.boxDoccia.isAcqua = true;
			muoviAcqua(scene,acqua);
		    document.getElementById('audioShower').play();
		}
		else {
			console.log("spenta");
			house.boxDoccia.isAcqua = false;
			scene.remove(acqua);
		}
			//muoviAcqua(scene,acqua);
			//document.getElementById('audioShower').play();
				
	} */



	if (intersects.length > 0) {
		if (house.portaIngresso.rotation.z===Math.PI){
			document.getElementById('audioDoorOpen').play();

			openDoorIn(house.portaIngresso);
		} else {
			closeDoorIn(house.portaIngresso);
			document.getElementById('audioDoorClose').play();


		} }
	if (intersectsF1.length > 0) {
		if (house.finestre.w1.position.z === 6.5){

			openWindow(house.finestre.w1,5.25,0,8.25);
		} else {

			closeWindow(house.finestre.w1,5.25,0,6.5);

		}
	} 
	if (intersectsF2.length > 0) {
		if (house.finestre.w2.position.z === 6.5){

			openWindow(house.finestre.w2,12,0,8.25);
		} else {

			closeWindow(house.finestre.w2,12,0,6.5);

		}
	} 
	if (intersectsF3.length > 0) {
		if (house.finestre.w3.position.z === 6){

			openWindow(house.finestre.w3,8.2,24,7.5);
		} else {

			closeWindow(house.finestre.w3,8.2,24,6);

		}
	} 
	if (intersectsF4.length > 0) {
		if (house.finestre.w4.position.z === 6){

			openWindow(house.finestre.w4,28,24,7.8);
		} else {

			closeWindow(house.finestre.w4,28,24,6);

		}
	} 
	if (intersectsF5.length > 0) {
		if (house.finestre.w5.position.z === 6){

			openWindow(house.finestre.w5,0,7.25,7.8);
		} else {

			closeWindow(house.finestre.w5,0,7.25,6);

		}
	} 
	if (intersectsF6.length > 0) {
		if (house.finestre.w6.position.z === 6.25){

			openWindow(house.finestre.w6,34,4.5,7.8);
		} else {

			closeWindow(house.finestre.w6,34,4.5,6.25);

		}
	} 
	if (intersectsF7.length > 0) {
		if (house.finestre.w7.position.z === 6.25){

			openWindow(house.finestre.w7,34,10.5,7.8);
		} else {

			closeWindow(house.finestre.w7,34,10.5,6.25);

		}
	} 

	if (intersects1.length > 0) {
		if (house.porta1.rotation.z===Math.PI){
			document.getElementById('audioDoorOpen').play();
			house.porta1.rotation.z = Math.PI/6;
		} else {

			house.porta1.rotation.z = Math.PI;
			document.getElementById('audioDoorClose').play();

		}
	}
	if (intersects2.length > 0) {
		if (house.porta2.rotation.z===Math.PI){
			document.getElementById('audioDoorOpen').play();
			house.porta2.rotation.z = Math.PI/6;
		} else {

			house.porta2.rotation.z = Math.PI;
			document.getElementById('audioDoorClose').play();

		}
	}
	if (intersects3.length > 0) {
		if (house.porta3.rotation.z===Math.PI){

			house.porta3.rotation.z = Math.PI/6;
		} else {

			house.porta3.rotation.z = Math.PI;
			document.getElementById('audioDoorClose').play();
		}
	}
	if (intersects5.length > 0) {
		if (house.porta5.position.z === -53.5){
			openDoor5(house.porta5);
			document.getElementById('audioSliding').play();

		} else {
			closeDoor5(house.porta5);
			document.getElementById('audioSliding').play();

		}
	}
	if (intersects6.length > 0) {
		if (house.porta6.position.z === -53.5){
			openDoor6(house.porta6);
			document.getElementById('audioSliding').play();

		} else {
			closeDoor6(house.porta6);
			document.getElementById('audioSliding').play();

		}
	} 
	
}