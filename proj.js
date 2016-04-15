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
  [{ name: 'riiple', link: 'http://robbobfrh84.github.io/riiple/riipleProto1.html', slide: [
	  {graphic: 'media/riiPly.m4v', class: 'wideVid', caption: ''},
  	{graphic: 'media/riiCnr.png', class: 'customPng', caption: ''}
	]},
	{ name: 'Sudoku', link: 'http://robbobfrh84.github.io/Sudoku/sudoku', slide: [
		{graphic: 'media/sudFull.png', class: 'pic', caption: ''},
		{graphic: 'media/sudPyth.m4v', class: 'wideVidDark', caption: '•	To implement thousands of unique games, I wrote a python program to generate possible games and remove set amounts of random numbers depending on difficulty.'},
		{graphic: 'media/sudPlay.m4v', class: 'wideVid', caption: ''},
		{graphic: 'media/sudCom.png', class: 'pic', caption: ''}
	]},
	{ name: 'Portfolio', link: 'http://www.bobma.in', slide: [
		{graphic: 'media/portWireframe.svg', class: 'customSvg', caption: '...'},
		{graphic: 'media/portCode.png', class: 'pic', caption: ''},
  	{graphic: 'media/portPlay.m4v', class: 'wideVidDark', caption: ''}
	]}
]);

//-----------------------------------------------------------------------------------------------------------
var mic = new Skill('Microcontroller & CNC',
	[{ name: 'CNC', link: 'https://www.instagram.com/woodcraftersdesign/', slide: [
		{graphic: 'media/cnc/cncLapseCog.m4v', class: 'fullVid', caption: 'Place MCNC caption 1 here....'},
		{graphic: 'media/cnc/cncLapsePir.m4v', class: 'fullVid', caption: 'Place MCNC caption 1 here....'},
		{graphic: 'media/cnc/cncPro.png', class: 'pic', caption: '...'},
		{graphic: 'media/cnc/cncBlkTkl.png', class: 'pic', caption: ''},
		{graphic: 'media/cnc/cncPully.m4v', class: 'wideVid', caption: ''},
		{graphic: 'media/cnc/cncSnes.m4v', class: 'wideVid', caption: 'Old Super Nintendo controller came in handy as a fun hack for XYZ free-flow routing.'}

	]},
	{ name: 'Gcode Editor', link: 'http://www.usatoday.com', slide: [
		{graphic: 'media/pyIcons.svg', class: '', caption: 'gcode caption 1 here....'},
		{graphic: 'media/cnc/cncVine.m4v', class: 'wideVid', caption: 'Place MCNC caption 3 here....'}
	]},
	{ name: 'LCD Display', link: 'http.www.astronomynow.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]},
	{ name: 'C++ Driver', link: 'http.www.astronomynow.com', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'Place caption 1 here....'}
	]}
]);

//-----------------------------------------------------------------------------------------------------------
var des = new Skill('Design',
	[{ name: 'Stincils', link: 'http.www.nasa.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'stin caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'stin caption 2 here....'}
	]},
	{ name: 'Woodshop', link: 'http.www.nasa.gov',slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'woo caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'woo caption 2 here....'}
	]},
	{ name: 'Clock', link: 'http.www.nasa.gov',slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'clockcaption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'clocke caption 2 here....'}
	]},
]);

//-----------------------------------------------------------------------------------------------------------
var woo = new Skill('Woodworking',
	[{ name: 'Shed', link: 'http.www.npr.gov', slide: [
		{graphic: 'SVGs/squ.svg', class: 'svg', caption: 'shed caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'shede caption 2 here....'}
	]},
	{ name: 'Critter Block', link: 'http.www.npr.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'cr caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'cr caption 2 here....'}
	]},
	{ name: 'Mugs', link: 'http.www.npr.gov', slide: [
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'mug caption 1 here....'},
		{graphic: 'SVGs/tools.svg', class: 'svg', caption: 'mug caption 2 here....'}
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


function projSwap(pos, animationDown,osCnt){
  if(typeof osCnt === 'undefined'){osCnt = sCnt;}
  if (pos !== oldPos){
		//Transition effects: Drop, Pop, Fadeout, FadeIn, Color. AND, position update.
	  var deSelect = document.getElementById('proj'+oldPos);
		var projTab = document.getElementById('proj'+pos);
		if(animationDown){regElmAnimate(deSelect, 'height', 0.1, 1.05, 'vw', 4.5, 2.8,'none');
		} else { deSelect.setAttribute('style','height: 2.8;');}
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 4.5,'none');
		if(uploadDone){regElmAnimate(projInfo,'opacity',0.2, 1,'',1,0,'none');}
		if(uploadDone){setTimeout(function(){regElmAnimate(projInfo,'opacity',0.03, 1.1,'',0,1,'none');},150);}
		setTimeout(function(){projTab.style.backgroundColor = 'rgba(102,155,235,0.3)';},300);
		oldPos = pos; }

  //Get Info Text and then replace it with the new project.
	var projInfoText = document.getElementById('html'+skills[osCnt].projects[pos].name).innerHTML;
  setTimeout(function(){document.getElementById('projHtml').innerHTML = projInfoText;},150);

	if(skills[osCnt].projects[pos].link !== ''){
		linkIcon.style.opacity = '0.7';
		document.getElementById('linkHolder').setAttribute('href',skills[osCnt].projects[pos].link)
	} else { linkIcon.style.opacity = '0'; }


	while (carouselCnt.firstChild) {
	  carouselCnt.removeChild(carouselCnt.firstChild);
	}
	//var carousel = document.getElementById('carousel');
	var items = carousel.getElementsByClassName('item');

	while (items[0]) {
  	items[0].parentNode.removeChild(items[0]);
	}

	for (var i = 0; i < skills[osCnt].projects[pos].slide.length; i++){
		console.log(skills[osCnt].projects[pos].slide[i].graphic);
		var slideDot = document.createElement("LI");
    slideDot.setAttribute('data-target','#myCarousel');
		slideDot.setAttribute('data-slide-to',i);
		if(i===0){ slideDot.setAttribute('class','active');} //else {slideDot.setAttribute('class','');}
		carouselCnt.appendChild(slideDot);
		$('#myCarousel').carousel('cycle');

		var slideState = 'item';
		if (i===0){ slideState = 'item active';}
		var insertMedia = document.createElement('div');

		var setCaption ='';
		if (skills[osCnt].projects[pos].slide[i].caption === ''){
		var setCaption ='style="visibility: hidden;"';}

		var fileType = skills[osCnt].projects[pos].slide[i].graphic.split('.').pop();
		if (fileType === 'svg' || fileType === 'png'){
			insertMedia.innerHTML = '<div class="'+slideState+'"><div><img src='
	  	+skills[osCnt].projects[pos].slide[i].graphic+ ' class='+skills[osCnt].projects[pos].slide[i].class+
			' /></div><div class="carousel-caption" ><p class="mediaGraph scrollVisable" '+setCaption+'>'
				+skills[osCnt].projects[pos].slide[i].caption+'</p></div></div>';
		}
		if (fileType === 'm4v' || fileType === 'mp4'){
			insertMedia.innerHTML = '<div class="'+slideState+'">'
			+'<video autoplay loop muted="true" class='+skills[osCnt].projects[pos].slide[i].class+' >'
			+'<source src='+skills[osCnt].projects[pos].slide[i].graphic+' type="video/mp4">'
			+'</video><div class="carousel-caption"><p class="mediaGraph scrollVisable"  '+setCaption+'>'
			+skills[osCnt].projects[pos].slide[i].caption+'</p></div></div>';
		}
    carousel.insertBefore(insertMedia.firstChild, prevAP);
	}
	console.log(skills[osCnt].projects[pos]);
}


//Hover and hover leave effects....-----------------------------------------------------------------
function projHover(pos){ if (pos !== oldPos){ var projTab = document.getElementById('proj'+pos);
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 2.8, 3.5,'none');}}
function projOff(pos){ var projTab = document.getElementById('proj'+pos); if (pos !== oldPos){
		regElmAnimate(projTab, 'height', 0.1, 1.05, 'vw', 3.5, 2.8,'none'); }}
