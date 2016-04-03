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

function projSwap(pos){
  for (var i = 0; i < projs[sCnt].projects.length; i++){
    if(i===pos){
      var porjTab = document.getElementById('proj'+pos);
    } else {
      var deSelect = document.getElementById('proj'+i);
      deSelect.style.height = '2.8vw';
      deSelect.style.verticalAlign = 'text-top';
      deSelect.style.transition = 'background-color .5s ease-in-out, height .10s ease-in-out,       margin-top .10s ease-in-out';
    }
  }
  console.log(pos);
  // porjTab.style.backgroundColor = 'rgba(255,255,255,0.6)';
  porjTab.style.height = '4.8vw';
  porjTab.style.verticalAlign = 'text-bottom';
  porjTab.style.transition = 'background-color .5s ease-in-out, height .10s ease-in-out,       margin-top .10s ease-in-out';
}
