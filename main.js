var fullpage = document.getElementById('mainSVG');

//--------------------------------------------------------Fadein main background
fadeIn(fullpage, 'opacity', 0.02,0,1);

//---------------------------------------------------------Place background grid
drawGrid(40,40,0.25,0.75,1.5,'cornflowerblue');

//---------------------------------declare main object variables created in HTML
var introBlock=[]; var copyBlock=[]; var proBlock=[];

//SEEMS TO BE MORE TROUBLE BOUNCING UP HERE TO GET IDS...
//....prob just move back where they're appended.
var bobMain = document.getElementById('bobMain');
var bobMainS = document.getElementById('bobMainS');
var infoBox = document.getElementById('infoBox');
var bulletBox = document.getElementById('bulletBox');
var mediaBox = document.getElementById('mediaBox');
var mediaSLeft = document.getElementById('mediaSLeft');
var mediaSRight = document.getElementById('mediaSRight');
var allBoxShadeTop = document.getElementById('allBoxShadeTop');
var allBoxShadeBot = document.getElementById('allBoxShadeBot');

//-----------------------------------------------FadeIn intro and Copyright text
function placetextBoxes(x,y,size,text,block){
  for (var i = 0; i < text.length; i++){
    block[i] = createBlockText((i*x)+0.6,y,size,0,'rgba(0,0,0,0.5)'
    ,'inBk'+i, 'allIntro', text[i]); }
  setTimeout(function(){arreyFade(block, 0.01, 0, 1);},750);}
placetextBoxes(2.5,1.8,16,'  A Journal & Presentation of Projects  ',introBlock);
placetextBoxes(2.505,62.1,12,'            © 2016 Bob Main',copyBlock);

//----------------------------------------------------------Draw intro underline
var introL=createLine(50,2.5,2.5,2.5,2,'rgb(150,150,150)','introL',0);
setTimeout(function(){linePulse(50,2.5,2.5,2.5,introL,true,0.2,1.03);},1500);
var introR=createLine(50,2.5,97.5,2.5,2,'rgb(150,150,150)','introR',0);
setTimeout(function(){linePulse(50,2.5,97.5,2.5,introR,true,0.2,1.03);},1500);

//-----------------------------------------------------------fadeIn Bob Main box
var nameBox = createRect(40,2.5,20,5,'rgb(220,220,220)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(nameBox, 'opacity', 0.02, 0, 1);},1750);

//------------------------------------------------------FadeIn By Bob Main Lines
var undBob = createLine(50,7.5,40,7.5,2,'rgb(150,150,150)','undBob',0);
setTimeout(function(){linePulse(50,7.5,40,7.5,undBob,true,0.1,1.05);},2500);
var undMain = createLine(50,7.5,40,7.5,2,'rgb(150,150,150)','undMain',0);
setTimeout(function(){linePulse(50,7.5,60,7.5,undMain,true,0.1,1.05);},2500);
var lBob = createLine(40,7.5,40,2.5,2,'rgb(150,150,150)','lBob',0);
setTimeout(function(){linePulse(40,7.5,40,2.5,lBob,true,0.1,1.05);},2500);
var rBob = createLine(60,7.5,60,2.5,2,'rgb(150,150,150)','rBob',0);
setTimeout(function(){linePulse(60,7.5,60,2.5,rBob,true,0.1,1.05);},2500);

//------------------------------------------------------------FadeIn By Bob Main
setTimeout(function(){fadeIn(bobMain, 'opacity', 0.01, 0, 1);},3000);
setTimeout(function(){fadeIn(bobMainS, 'opacity', 0.02, 0, 1);},3000);
mainSVG.appendChild(bobMainS); mainSVG.appendChild(bobMain);

//-------------------------------------------------------------FadeIn DropShadow
setTimeout(function(){fadeIn(fullpage, 'box-shadow', 0.03, 0, 1);},3500);

//--------------------------------Create Link buttons & icons with blowup effect
createBtn('contact', 'contactCir');
createBtn('about', 'aboutCir');
createBtn('twit', 'twitCir');
createBtn('git', 'gitCir');
createBtn('insta', 'instaCir');
createBtn('angel', 'angelCir');
setTimeout(function(){blowUp(contact,contactCir,2,3,0,100);},4000);
setTimeout(function(){blowUp(about,aboutCir,2,3,0,100);},3200);
setTimeout(function(){blowUp(twit,twitCir,2,3,0,100);},3400);
setTimeout(function(){blowUp(angel,angelCir,2,3,0,100);},3600);
setTimeout(function(){blowUp(git,gitCir,2,2,0,100);},3500);
setTimeout(function(){blowUp(insta,instaCir,2,3,0,100);},3800);
// createBtn('egg', 'eggCir');
// setTimeout(function(){blowUp(egg,eggCir,2,3,0,100);},1000);


//-----------------------------------Create background areas for rolling content
mainSVG.appendChild(infoBox); mainSVG.appendChild(mediaSLeft);
mainSVG.appendChild(bulletBox); mainSVG.appendChild(mediaSRight);
mainSVG.appendChild(allBoxShadeBot);
mainSVG.appendChild(mediaBox);
mainSVG.appendChild(allBoxShadeTop);

//------------------------------------Create Main Skill buttons with line effect
var dropL = createLine(25,12.4,25,50,3,'rgb(220,220,220)','dropL',0);
var dropR = createLine(75,12.4,75,50,3,'rgb(220,220,220)','dropL',0);

var webText = document.getElementById('webText'); mainSVG.appendChild(webText);
var webWin = createRect(0,10,25,2.6,'rgb(220,220,220)',0,'none',0,'webWin');
var webBox = document.getElementById('webBox');
var webLine = createLine(0,12.5,25,12.5,3,'rgb(220,220,220)','webLine',0);
createBarBtn(webWin,webLine,webBox,'l',0.75,1.15,0.75,1.15);

var micText = document.getElementById('micText'); mainSVG.appendChild(micText);
var micWin = createRect(25,10,25,2.6,'rgb(220,220,220)',0,'none',0,'micWin');
var micBox = document.getElementById('micBox');
var micLine = createLine(25,12.5,50,12.5,3,'rgb(220,220,220)','micLine',0);
createBarBtn(micWin,micLine,micBox,'l',0.75,1.15,0.75,1.15);

var desText = document.getElementById('desText'); mainSVG.appendChild(desText);
var desWin = createRect(50,10,25,2.6,'rgb(220,220,220)',0,'none',0,'desWin');
var desBox = document.getElementById('desBox');
var desLine = createLine(50,12.5,75,12.5,3,'rgb(220,220,220)','desLine',0);
createBarBtn(desWin,desLine,desBox,'r',0.75,1.15,0.75,1.15);

var wooText = document.getElementById('wooText'); mainSVG.appendChild(wooText);
var wooWin = createRect(75,10,25,2.6,'rgb(220,220,220)',0,'none',0,'wooWin');
var wooBox = document.getElementById('wooBox');
var wooLine = createLine(75,12.5,100,12.5,3,'rgb(220,220,220)','wooLine',0);
createBarBtn(wooWin,wooLine,wooBox,'r',0.75,1.15,0.75,1.15);
//------------------------------------------------------------------------------
//----------                PROJECTS            --------------------------------
//------------------------------------------------------------------------------

var webProjs = ['Sudoku','riiple','Profile','Tic-tac-toe'];
var micProjs = ['CNC','Controller','Gcode Editor','LCD'];
var desProjs = ['Airbush Cups','Woodshop','Cogs','hotplate'];
var wooProjs = ['Shed','Folding Chair','Squirrel Guard','Wood Mugs'];

//AWSOME OPERTUNITY TO US OBJECTS

function placeProjs(project){
  for(var i = 0; i < 5; i++){
  if (typeof project[i] === 'undefined'){
    document.getElementById('proj'+i).style.display = 'none';
  } else {
    document.getElementById('proj'+i).style.display = 'inline-block';
    document.getElementById('proj'+i).innerHTML = project[i];}
  }
}

placeProjs(webProjs);
placeProjs(micProjs);
placeProjs(desProjs);
placeProjs(wooProjs);

function leftArrowClick(){
  console.log('clicked Left');
  placeProjs(webProjs);
}

function rightArrowClick(){
  console.log('clicked Right');
  placeProjs(desProjs);

}



//------------------------------------------------------animate programming bind


////////// TEST ZONE ///////////////////////////////////////////////////////////

var leftArrow = document.getElementById('leftArrow');
mainSVG.appendChild(leftArrow);
var rightArrow = document.getElementById('rightArrow');
mainSVG.appendChild(rightArrow);

var projln = createLine(6.2,55,93.8,55,3,'rgba(0,0,0,0.5)','proln',1);



/*////////// CHECKLIST NOTES ///////////////////////////////////////////////////
-
-
-
--------- NOTES ---------
- Fade offset left-to-right in the box dispaly intro.
- I LIKE THE Idea of the solid color with drop shaddow for main stuff...
- underline balls on ends?
- already visited links change button's fill color.
*/
