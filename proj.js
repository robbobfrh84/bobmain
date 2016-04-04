//----------------------------------------------------------------------------------------------------
//----------         PROJECT HEADQUARTERS           --------------------------------------------------
//----------------------------------------------------------------------------------------------------
// This JavaScript file is created to simplify the adding and editing of the
// individual project's files and text; seperate from all the other
// JavaScript layout and animation files.

function Skill(type,projects){ //using Object Method here mostly for practice.
	this.type = type;            //...2D array may be simpler. But, I like the
	this.projects = projects; }   //...clarity of objects after doing it.

var web = new Skill('Web Development', [
  'Sudoku',
  'riiple',
  'Profile',
  'Tic-tac-toe',
  'Maps'
]);
var mic = new Skill('Microcontroller & CNC', ['CNC','Controller','Gcode Editor','LCD']);
var des = new Skill('Design', ['Airbush Cups','Woodshop','Cogs','hotplate']);
var woo = new Skill('Woodworking', ['Shed','Folding Chair','Squirrel Guard','Wood Mugs']);

var skills = [web,mic,des,woo];
var sCnt = 0; var oldPos=1;

function projSwap(pos){ console.log(skills[sCnt].projects[pos]);
  if (pos !== oldPos){
	  var deSelect = document.getElementById('proj'+oldPos);
		regElmAnimate(deSelect, 'height', 0.1, 1.05, 'vw', 4.5, 2.8,'none');
		var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 4.5,'none');
		setTimeout(function(){projTab.style.backgroundColor = 'rgba(102,155,235,0.3)';},500);
		oldPos = pos;}}

function projHover(pos){
	if (pos !== oldPos){
		var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 2.8, 3.5,'none');}}

function projOff(pos){
	var projTab = document.getElementById('proj'+pos);
	if (pos !== oldPos){ regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 2.8,'none');}}
