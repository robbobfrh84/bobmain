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
  // 'Tic-tac-toe',
  'Maps'
]);

var mic = new Skill('Microcontroller & CNC', ['CNC','Controller','Gcode Editor','LCD']);
var des = new Skill('Design', ['Airbush Cups','Woodshop','Cogs','hotplate']);
var woo = new Skill('Woodworking', ['Shed','Folding Chair','Squirrel Guard','Wood Mugs']);


var projs = [web,mic,des,woo];
