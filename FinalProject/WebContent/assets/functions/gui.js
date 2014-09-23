 function createGUI(scene, switchFP, sky){
	 controls = new function(){
		this.switchFP = switchFP;
		this.landscape = false;
		this.badWeather = false;
		this.goodWeatherBack =false;
		this.docciaOn = false;
		this.docciaOff = false;
	};

	var gui = new dat.GUI();
	var rain = particleWater(40000, 1000, 1000, 500, -200, 0, -100, "assets/textures/general/water.png");
	var doccia = particleWater(3000, 8, 18 , 8, 11, 6, -69, "assets/textures/general/water.png");
	
	
	gui.add(controls, "switchFP");
	gui.add(controls, "landscape").onChange(function(e){
		if(e){
			scene.remove(sky.skybox);
			scene.add(sky.skybox1);
			landscape= true;
		} else {
			scene.remove(sky.skybox1);
			scene.add(sky.skybox);
			landscape = false;
		}
	});  
	
	///per la pioggia
	gui.add(controls, "badWeather").onChange(function(e){
		
			if (landscape===true){
				
				
				pioggia(scene,rain);
				
			}
			
			
  
	});  
	gui.add(controls, "goodWeatherBack").onChange(function(e){
		if (landscape === true){
			landscape = false;
			scene.remove(rain);
			scene.remove(sky.skybox1);
			scene.add(sky.skybox);
		
		}
		
		
		
      
});
	gui.add(controls, "docciaOn").onChange(function(e){
		
		
			
			
			muoviAcqua(scene,doccia);
			 document.getElementById('audioShower').play();
			
		
		

});  
gui.add(controls, "docciaOff").onChange(function(e){
		
		
			
			
			scene.remove(doccia);
			
		
		
		

});  
	
	return controls;
 }