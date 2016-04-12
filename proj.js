//----------------------------------------------------------------------------------------------------
//----------         PROJECT HEADQUARTERS           --------------------------------------------------
//----------------------------------------------------------------------------------------------------
// This JavaScript file is created to simplify the adding and editing of the
// individual project's files and text; seperate from all the other
// JavaScript layout and animation files.

function Skill(skill, projects, slide){ //using Object Method here mostly for practice.
	this.skill = skill;                   //...2D array may be simpler. But, I like the
	this.projects = projects;             //...clarity of objects after doing it.
}

var web = new Skill('Web Development',
  [{ name: 'Sudoku', slide: [
	  {graphic: 'media/sud0.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
  	{graphic: 'media/sud1.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'media/sudVid0.mov', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
  	{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'PYTHON proccessing games vid here!'}
	]},
	{ name: 'riiple', slide: [
	  {graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
  	{graphic: 'SVGs/aboutMe.svg', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
  	{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Portfolio', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Tic-tac-toe', slide: [
	  {graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
  	{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Mouse Speed', slide: [
  	{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]}
]);

//-----------------------------------------------------------------------------------------------------------
var mic = new Skill('Microcontroller & CNC',
	[{ name: 'CNC', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Gcode Editor', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'C++ Driver', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'LCD Display', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]}
]);

//-----------------------------------------------------------------------------------------------------------
var des = new Skill('Design',
	[{ name: 'Stincils', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Woodshop', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Clock', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
]);

//-----------------------------------------------------------------------------------------------------------
var woo = new Skill('Woodworking',
	[{ name: 'Shed', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{praphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Critter Block', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{praphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Mugs', slide: [
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 1 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{graphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'},
		{praphic: 'tools.png', link: 'http.www.espn.com', caption: 'Place caption 2 here....'}
	]},
]);


var skills = [web,mic,des,woo];
var sCnt = 0; var oldPos=1;

console.log('(new) skill: '+skills[sCnt].skill);
console.log('New project: '+skills[sCnt].projects[0].name);
console.log('New graphic: '+skills[sCnt].projects[0].slide[0].graphic);
console.log('New link: '   +skills[sCnt].projects[0].slide[0].link);
console.log('New caption: '+skills[sCnt].projects[0].slide[0].caption);


function projSwap(pos){

  if (pos !== oldPos){
		//Transition effects: Drop, Pop, Fadeout, FadeIn, Color. AND, position update.
	  var deSelect = document.getElementById('proj'+oldPos);
		var projTab = document.getElementById('proj'+pos);
		regElmAnimate(deSelect, 'height', 0.1, 1.05, 'vw', 4.5, 2.8,'none');
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 4.5,'none');
		if(uploadDone){regElmAnimate(projInfo,'opacity',0.2, 1,'',1,0,'none');}
		if(uploadDone){setTimeout(function(){regElmAnimate(projInfo,'opacity',0.03, 1.1,'',0,1,'none');},150);}
		setTimeout(function(){projTab.style.backgroundColor = 'rgba(102,155,235,0.3)';},300);
		oldPos = pos; }
    //Get Info Text and then replace it with the new project.
		var projInfoText = document.getElementById('html'+skills[sCnt].projects[pos].name).innerHTML;
    setTimeout(function(){document.getElementById('projHtml').innerHTML = projInfoText;},150);


		var carouselCnt = document.getElementById('carouselCnt');
		while (carouselCnt.firstChild) {
		  carouselCnt.removeChild(carouselCnt.firstChild);
		}

		for (var i = 0; i < skills[sCnt].projects[pos].slide.length; i++){
			console.log(skills[sCnt].projects[pos].slide[i].graphic);
			var slideDot = document.createElement("LI");
      slideDot.setAttribute('data-target','#myCarousel');
			slideDot.setAttribute('data-slide-to',i);
			if(i===0){ slideDot.setAttribute('class','active');} //else {slideDot.setAttribute('class','');}
			carouselCnt.appendChild(slideDot);
			$('#myCarousel').carousel('cycle');


			if (typeof slide1VideoElm !== 'undefined'){
        document.getElementById('slide1Div').removeChild(slide1VideoElm);
      }
      document.getElementById('slide1cap').setAttribute('style','display: none;');
      var slide1 = document.getElementById('slide1Img');
      slide1.setAttribute('src',skills[sCnt].projects[pos].slide[i].graphic);
      slide1.className = 'SVG';
			slide1.style.display = 'initial';

		}
		console.log(skills[sCnt].projects[pos]);
}


//Hover and hover leave effects....-----------------------------------------------------------------
function projHover(pos){ if (pos !== oldPos){ var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 2.8, 3.5,'none');}}
function projOff(pos){ var projTab = document.getElementById('proj'+pos); if (pos !== oldPos){
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 2.8,'none'); }}
