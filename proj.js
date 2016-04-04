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

var holdpos=0;


function projSwap(pos){ console.log(skills[sCnt].projects[pos]);
  if (pos !== oldPos){



	  var deSelect = document.getElementById('proj'+oldPos);
		// deSelect.style.pointerEvents = 'auto';
		// deSelect.style.height = '2.8vw';
		regElmAnimate(deSelect, 'height', 0.1, 1.05, 'vw', 4.8, 2.8,'none');


		var projTab = document.getElementById('proj'+pos);
		// projTab.style.pointerEvents = 'none';
		// projTab.style.verticalAlign = 'text-bottom';
		// regElmAnimate(projTab, 'background-color', 0.05, 1, 'rgba(255,255,255,', 0.1, 0.9,'none');
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 4.8,'none');
		// projTab.style.height = '4.8vw';
		oldPos = pos;
	}
}

function projHover(pos){ console.log(skills[sCnt].projects[pos]);
	if (pos !== oldPos){
		holdpos=pos;
		var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 2.8, 3.5,projBarHoverFade);
		// projTab.style.height = '3.5vw';

	}
}

function projOff(pos){ console.log(skills[sCnt].projects[pos]);
	if (pos !== oldPos){
		var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 2.8,'none');
	}
}

function projBarHoverFade(){ console.log('fade');
	var projTab = document.getElementById('proj'+holdpos);
	// projTab.style.backgroundColor = 'white';
	regElmAnimate(projTab, 'background-color', 0.03, 1, 'rgba(255,255,255,', 0.1, 0.9,'none');
}
