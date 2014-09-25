View my project here http://maggiesid.github.io/final_project/start.html

Code organization:

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/start.html">start.html</a> Start page </br>
It imports all required libs and js code. The code is separated in different files ("assets/functions" folder) as described below:

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/animation.js">animation.js</a> Manages interactions by mouse (doors, windows, lights, doorbell and toilet) </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/boxes.js">boxes.js</a>functions which create trasparent boxes used for picking objects </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/esterne.js">esterne.js</a>functions which create external walls </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/floor.js">floor.js</a>functions which create parametrics bump meshes (used creating doors, floors, walls and roof) </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/forniture.js">forniture.js</a> Imports obj files  and places them in the scene </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/gui.js">gui.js</a> Manages dat.gui interface </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/house.js">house.js</a> Imports house obj from lar-cc </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/int.js">int.js</a> Creates internal walls </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/lights.js">lights.js</a> Creates lamps' lights </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/particle.js">particle.js</a> Creates particles  </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/house.js">pavimenti.js</a> Creates floors </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/porta.js">porta.js</a> Creates parametric doors, able to rotate </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/riempi.js">riempi.js</a> Fills the scene with the model of the house, walls, windows, floors, forniture and doors </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/shape.js">shape.js</a> Creates parametric walls </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/skybox.js">skybox.js</a> Creates two different landascapes for the scene </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/specchio.js">specchio.js</a> Creates a mirror </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/start.js">start.js</a>  Functions needed globally, like event handling, mesh building, camera switching, rendering and updates. </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/tween.js">tween.js</a>  Functions which define tween animations (doors, windows and water) </br>

<a href="https://github.com/cvdlab-cg/440845/blob/master/final_project/WebContent/assets/functions/window.js">window.js</a>  Creates windows </br>


FEATURES

Textures

.obj and .obj/.mtl model files import

Tween animations

TrackBallControl

PointerLockControl 

Object-Picking

Particle System

Skybox

Sound effects

Mirror 

