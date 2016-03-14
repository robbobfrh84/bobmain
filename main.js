var fullpage = document.getElementById('mainSVG');

//--------------------------------------------------------Fadein main background
fadeIn(fullpage, 'opacity', 0.02,0,1);

//---------------------------------------------------------Place background grid
drawGrid(40,0.25,0.75,1.5,'cornflowerblue');

//-------------------------------------------------declare main object variables
var introBlock=[]; var copyBlock=[]; var proBlock=[];
var bobMain=document.getElementById('bobMain');
var bobMainS=document.getElementById('bobMainS');

//-----------------------------------------------FadeIn intro and Copyright text
function placetextBoxes(x,y,size,text,block){
  for (var i = 0; i < text.length; i++){
    block[i] = createBlockText((i*x)+0.6,y,size,0,'rgba(0,0,0,0.5)'
    ,'inBk'+i, 'allIntro', text[i]); }
  setTimeout(function(){arreyFade(block, 0.01, 0, 1);},750);}
placetextBoxes(2.5,1.8,16,'  A Journal & Presentation of Projects  ',introBlock);
placetextBoxes(2.5,99.3,12,'            © 2016 Bob Main',copyBlock);

//----------------------------------------------------------Draw intro underline
setTimeout(function(){lineGrow(50,2.5,2.5,2.5,2
  ,'rgb(150,150,150)','leftLine',0.2,1.03);},1500);
setTimeout(function(){lineGrow(50,2.5,97.5,2.5,2
  ,'rgb(150,150,150)','rightLine',0.2,1.03);},1500);

//-----------------------------------------------------------fadeIn Bob Main box
var nameBox = createRect(40,2.5,20,5,'rgb(220,220,220)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(nameBox, 'opacity', 0.02, 0, 1);},1750);

//------------------------------------------------------FadeIn By Bob Main Lines
setTimeout(function(){lineGrow(50,7.5,40,7.5,2,'rgb(150,150,150)'
  ,'underBob',0.1,1.05);},2500);
setTimeout(function(){lineGrow(50,7.5,60,7.5,2,'rgb(150,150,150)'
  ,'underMain',0.1,1.05);},2500);
setTimeout(function(){lineGrow(40,7.5,40,2.5,2,'rgb(150,150,150)'
  ,'leftBob',0.1,1.05);},2500);
setTimeout(function(){lineGrow(60,7.5,60,2.5,2,'rgb(150,150,150)'
  ,'rightBob',0.1,1.05);},2500);

//------------------------------------------------------------FadeIn By Bob Main
setTimeout(function(){fadeIn(bobMain, 'opacity', 0.01, 0, 1);},3000);
setTimeout(function(){fadeIn(bobMainS, 'opacity', 0.02, 0, 1);},3000);
mainSVG.appendChild(bobMainS); mainSVG.appendChild(bobMain);

//-------------------------------------------------------------FadeIn DropShadow
setTimeout(function(){fadeIn(fullpage, 'box-shadow', 0.03, 0, 1);},3500);

//--------------------------------------------------------blowup buttons & icons
createButtons('contact', 'contactCir');
createButtons('about', 'aboutCir');
createButtons('twit', 'twitCir');
createButtons('git', 'gitCir');
createButtons('insta', 'instaCir');
createButtons('angel', 'angelCir');
setTimeout(function(){blowUp(contact,contactCir,2,3,0,100);},4000);
setTimeout(function(){blowUp(about,aboutCir,2,2,0,100);},3200);
setTimeout(function(){blowUp(twit,twitCir,2,3,0,100);},3400);
setTimeout(function(){blowUp(angel,angelCir,2,3,0,100);},3600);
setTimeout(function(){blowUp(git,gitCir,2,2,0,100);},3500);
setTimeout(function(){blowUp(insta,instaCir,2,3,0,100);},3800);

//------------------------------------------------------animate main skill boxes
var webBox = createRect(7.6,12.6,17.3,4.8,'rgba(220,220,220,0.75)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(webBox, 'opacity', 0.02, 0, 1);},100);

var micBox = createRect(27.6,12.6,17.3,4.8,'rgba(210,210,210,1)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(micBox, 'opacity', 0.02, 0, 1);},100);

var desBox = createRect(55.1,12.6,17.3,4.8,'rgba(210,210,210,1)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(desBox, 'opacity', 0.02, 0, 1);},100);

var wooBox = createRect(77.6,12.6,17.3,4.8,'rgba(210,210,210,1)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(wooBox, 'opacity', 0.02, 0, 1);},100);

//------------------------------------------------------animate programming bind

placetextBoxes(2.5,11.5,12,'     Programming                        ',proBlock);

setTimeout(function(){lineGrow(50,7.5,50,11.25,3,'rgb(150,150,150)'
  ,'underBob',0.2,1.05);},4200);
setTimeout(function(){lineGrow(50,11.25,6.25,11.25,2,'rgb(150,150,150)'
  ,'underBob',0.5,1.05);},4400);
setTimeout(function(){lineGrow(6.25,11.25,6.25,18.75,2,'rgb(150,150,150)'
  ,'underBob',0.2,1.05);},4700);



var redBox = createRect(0,12.5,25,37.5,'firebrick',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(redBox, 'opacity', 0.02, 0, 0.8);},4000);

var greenBox = createRect(25,12.5,50,37.5,'rgb(93,180,98)',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(greenBox, 'opacity', 0.02, 0, 0.8);},4500);

var yellowBox = createRect(75,12.5,25,37.5,'goldenrod',0,'none',0,'nameBox');
setTimeout(function(){fadeIn(yellowBox, 'opacity', 0.02, 0, 0.8);},5000);


////////// TEST ZONE ///////////////////////////////////////////////////////////


// lineGrow(5,5,5,25,3,'cornflowerblue','testLine',0.1,1.05);
// lineGrow(5,25,25,25,3,'cornflowerblue','testLine',0.1,1.05);
// lineGrow(25,25,25,5,3,'cornflowerblue','testLine',0.1,1.05);
// lineGrow(25,45,5,25,3,'cornflowerblue','testLine',0.1,1.05);

/*
////////// CHECKLIST NOTES ///////////////////////////////////////////////////
-
-
-
--------- NOTES ---------
- Fade offset left-to-right in the box dispaly intro.
- I LIKE THE Idea of the solid color with drop shaddow for main stuff...
- underline balls on ends?
- already visited links change button's fill color.
*/
