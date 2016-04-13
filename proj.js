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
  [{ name: 'Sudoku', link: 'http.www.espn.com', slide: [
	  {graphic: 'media/sud0.png', class: 'pic', caption: 'Place caption 1 here....'},
  	{graphic: 'media/sud1.png', class: 'pic', caption: 'Place caption 2 here....'},
		{graphic: 'media/sudVid0.mov', class: 'vid', caption: 'Place caption 2 here....'},
  	{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'PYTHON proccessing games vid here!'}
	]},
	{ name: 'riiple', link: 'http.www.espn.com', slide: [
	  {graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
  	{graphic: 'SVGs/aboutMe.svg', class: 'svg', caption: 'Place caption 2 here....'},
  	{graphic: 'media/sud2.png', class: 'pic', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Portfolio', link: 'http.www.espn.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
  	{graphic: 'SVGs/aboutMe.svg', class: 'svg', caption: 'Place caption 2 here....'},
  	{graphic: 'media/sud2.png', class: 'pic', caption: 'Place caption 2 here....'}
	]},
	{ name: 'Tic-tac-toe', link: 'http.www.espn.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'Mouse Speed', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]}
]);

//-----------------------------------------------------------------------------------------------------------
var mic = new Skill('Microcontroller & CNC',
	[{ name: 'CNC', link: 'http.www.astronomynow.com', slide: [
		{graphic: 'media/cncVid0.svg', class: 'wideVid', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'Gcode Editor', link: 'http.www.astronomynow.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'C++ Driver', link: 'http.www.astronomynow.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'LCD Display', link: 'http.www.astronomynow.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]}
]);

//-----------------------------------------------------------------------------------------------------------
var des = new Skill('Design',
	[{ name: 'Stincils', link: 'http.www.nasa.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'Woodshop', link: 'http.www.nasa.gov',slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'Clock', link: 'http.www.nasa.gov',slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
]);

//-----------------------------------------------------------------------------------------------------------
var woo = new Skill('Woodworking',
	[{ name: 'Shed', link: 'http.www.npr.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'Critter Block', link: 'http.www.npr.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'Mugs', link: 'http.www.npr.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
]);


var skills = [web,mic,des,woo];
var sCnt = 0; var oldPos=1;

console.log('(new) skill: '+skills[sCnt].skill);
console.log('New project: '+skills[sCnt].projects[0].name);
console.log('New link: '   +skills[sCnt].projects[0].link);
console.log('New graphic: '+skills[sCnt].projects[0].slide[0].graphic);
console.log('New class: '+skills[sCnt].projects[0].slide[0].class);
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


		// var carouselCnt = document.getElementById('carouselCnt');
		while (carouselCnt.firstChild) {
		  carouselCnt.removeChild(carouselCnt.firstChild);
		}

		var carousel = document.getElementById('carousel');
		var items = carousel.getElementsByClassName('item');
		console.log('num of children: ', carousel.childNodes.length);
		while (items[0]) {
    	items[0].parentNode.removeChild(items[0]);
			console.log('num with item class: ', items.length);
		}
		console.log('num of children: ', carousel.childNodes.length);

		// while (carousel.firstChild) {
		// 	var items = document.getElementsByClassName('item')
		//   carousel.removeChildren(carousel.items);
		// }

		for (var i = 0; i < skills[sCnt].projects[pos].slide.length; i++){
			console.log(skills[sCnt].projects[pos].slide[i].graphic);
			var slideDot = document.createElement("LI");
      slideDot.setAttribute('data-target','#myCarousel');
			slideDot.setAttribute('data-slide-to',i);
			if(i===0){ slideDot.setAttribute('class','active');} //else {slideDot.setAttribute('class','');}
			carouselCnt.appendChild(slideDot);
			$('#myCarousel').carousel('cycle');

//CHANGE TO INCLUDE THIS VARIABLE IN OJBECT
			var getFileType = skills[sCnt].projects[pos].slide[i].graphic.split('.').pop();
			if (getFileType === 'png'){ var fileType = 'pic';}
			if (getFileType === 'svg'){ var fileType = 'svg';}
			if (getFileType === 'mov'){ var fileType = 'vid';}
			console.log(getFileType, fileType);

			var insertMedia = document.createElement('div');
			if (i===0){ insertMedia.innerHTML = '<div class="item active"><div><img src='
		  	+skills[sCnt].projects[pos].slide[i].graphic+ ' class='+fileType+' /></div><div class="carousel-caption" ><p class="mediaGraph scrollVisable">Caption goes here...</p></div></div>';
			} else {
				insertMedia.innerHTML = '<div class="item"><div><img src='
		  	+skills[sCnt].projects[pos].slide[i].graphic+' class='+fileType+' /></div><div class="carousel-caption" ><p class="mediaGraph scrollVisable">Caption goes here...</p></div></div>';
			}

      carousel.insertBefore(insertMedia.firstChild, prevAP);
		}
		console.log(skills[sCnt].projects[pos]);
}


//Hover and hover leave effects....-----------------------------------------------------------------
function projHover(pos){ if (pos !== oldPos){ var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 2.8, 3.5,'none');}}
function projOff(pos){ var projTab = document.getElementById('proj'+pos); if (pos !== oldPos){
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 2.8,'none'); }}
