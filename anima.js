var svgElement = 'http://www.w3.org/2000/svg';

//////////CREATE SVG ELEMENTS///////////////////////////////////////////////////
function drawGrid(numVLines,numHLines,thin,fifth,tenth,color){
  lines = (100/numVLines); hlines = (100/numHLines);
  for (var i = 0; i <= numVLines; i++){ fat = thin;
    if(i%5===0){fat=fifth;} if(i%10===0||i===0){fat=tenth;}
    createLine(lines*i,0,lines*i,100,fat,color,'vert'+i); }
  for (var i = 0; i <= numHLines; i++){ fat = thin;
    if(i%5===0){fat=fifth;} if(i%10===0||i===0){fat=tenth;}
    createLine(0,hlines*i,100,hlines*i,fat,color,'horiz'+i);}}

function createBlockText(x,y,size,opacity,color,txID,elClass,text){
  var txID = createEl('mainSVG','text',[['x',x+'%'],['y',y+'%'],['font-size',size]
  ,['opacity',opacity],['fill',color],['class',elClass],['id',txID]]);
  txID.appendChild(document.createTextNode(text)); return txID; }

function createLine(x1,y1,x2,y2,width,color,lnID,opacity){
  var newEl = createEl('mainSVG','line',[['id',lnID],['stroke-width',width],['stroke',color]
    ,['x1',x1+'%'],['y1',y1+'%'],['x2',x2+'%'],['y2',y2+'%'],['opacity',opacity]]); return newEl;}

function createPath(path, width, color, arcID){
  createEl('mainSVG','path',[['id', arcID],['stroke-width',width],['stroke',color]
  ,['d',path],['fill', 'none']])}

function createRect(x,y,width,height,fill,bordWidth,bordColor,opacity, recID){
  var newEl = createEl('mainSVG','rect',[['id',recID],['stroke-width',bordWidth+'%']
  ,['stroke',bordColor],['x',x+'%'],['y', y+'%'],['width',width+'%'],['height',height+'%']
  ,['opacity', opacity],['fill',fill]]); return newEl;}

function createEl(container,type,att){
  var newObj = document.createElementNS(svgElement, type);
  for (var i=0; i<att.length; i++){ newObj.setAttributeNS(null, att[i][0],att[i][1]); }
  document.getElementById(container).appendChild(newObj); return newObj; }

  function updateEl(Id, att) {
      for (var i=0; i<att.length; i++){
        document.getElementById(Id).setAttribute(att[i][0],att[i][1]);
        //NEED TO UPDATE FOR SVG!!!
        //document.getElementById(Id).setAttributeNS(att[i][0],att[i][1]);
    }
  }

//////////CREATE BUTTONS////////////////////////////////////////////////////////
function createBtn(btn, cir){ var on = false;
  var btn = document.getElementById(btn); mainSVG.appendChild(btn);
  var cir = document.getElementById(cir);
  btn.onmouseover = function(){
    if (on === false){
      cir.style.fill = 'rgb(210,210,210)'; cir.style.r = '2.3%';
      blowUp(btn,cir,1,2,75,100); on = true;}}
  btn.onmouseleave = function(){
     cir.style.fill = 'rgb(230,230,230)';cir.style.r = '2%'; on = false;}}

function createBarBtn(btn,lnID,box,drop,speed1,ramp1,speed2,ramp2){
  var sX = parseFloat(lnID.getAttribute('x1'));
  var sY = parseFloat(lnID.getAttribute('y1'));
  var eX = parseFloat(lnID.getAttribute('x2'));
  var eY = parseFloat(lnID.getAttribute('y2'));
  btn.onmouseover = function(){
    linePulse(sX,sY,eX,eY,lnID,true,speed1,ramp1);
    box.style.fill = 'rgb(200,200,210)';
  }
  btn.onmouseleave = function(){
    linePulse(sX,sY,eX,eY,lnID,false,speed2,ramp2);
    box.style.fill = 'url(#grad1)';
    if(drop==='l'){linePulse(25,12.5,25,50,dropL,false,0.5,1.15);}
    if(drop==='r'){linePulse(75,12.5,75,50,dropR,false,0.5,1.15);}
  }
  btn.onmousedown = function(){ webDevClick();
    if(drop==='l'){linePulse(25,12.5,25,50,dropL,true,0.5,1.15);}
    if(drop==='r'){linePulse(75,12.5,75,50,dropR,true,0.5,1.15);}}}

function webDevClick(){
  console.log('example for later');
}

////////////////////////////////////////////////////////////////////////////////
//////////          ANIMATION STATION          /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function linePulse(sX,sY,eX,eY,lnID,grow,speed,ramp){ var end = false;
  var x = Math.abs(sX-eX); var y = Math.abs(sY-eY); var newX=sX; var newY=sY;
  if (grow){ lnID.setAttributeNS(null, 'opacity', 1); }
  function go(){ x -= speed; y-= speed; speed*=ramp;
    if(sX > eX && x > 0){end=false; if(grow){newX=eX+x;} else {newX=sX-x;}}
    if(sX < eX && x > 0){end=false; if(grow){newX=eX-x;} else {newX=sX+x;}}
    if(sY > eY && y > 0){end=false; if(grow){newY=eY+y;} else {newY=sY-y;}}
    if(sY < eY && y > 0){end=false; if(grow){newY=eY-y;} else {newY=sY+y;}}
    if(end === true){
      if (!grow){lnID.setAttributeNS(null, 'opacity', 0);}
      lnID.setAttributeNS(null,'x2',eX+'%');
      lnID.setAttributeNS(null,'y2',eY+'%');
      return; }
    lnID.setAttributeNS(null, 'x2',newX+'%');
    lnID.setAttributeNS(null, 'y2',newY+'%');
    end = true;
    requestAnimationFrame(go);} go();}

function fadeIn(varName, element, speed, start, end){
  function go(){
    if (element === 'box-shadow'){
      varName.style.boxShadow = '0px 0px 25px rgba(80,80,80,'+start+') inset';
    } else { varName.style.opacity = start;} start+=speed;
    if (start <= end){ requestAnimationFrame(go); } } go(); }

function blowUp(varName, cir, speed, ramp, start, end){ var x; var y;
  var cx = parseFloat(cir.getAttribute('cx'));
  var cy = parseFloat(cir.getAttribute('cy'));
  function go(){ start+=speed*ramp;
    x = cx*((end-start)/100); y = cy*((end-start)/100);
    varName.setAttribute('width',start+'%'); varName.setAttribute('y',y+'%');
    varName.setAttribute('height',start+'%'); varName.setAttribute('x',x+'%');
    if (start <= end){ requestAnimationFrame(go); } } go(); }

function arreyFade(arrEL, speed, start, end){
  function go(){
    for (var i = 0; i < arrEL.length;i++){
      var intb = arrEL[i];
      intb.style.opacity = start;
    }
    start+=speed;
    if (start <= end){ requestAnimationFrame(go); }  } go(); }

////////////////////////////////////////////////////////////////////////////////
//////////          Random Functions         ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function rgbR(){
  return [random(0,255), random(0,255), random(0,255)];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//example: lnID.setAttributeNS(null, 'stroke', 'rgb('+rgbR()+')');


////////////////////////////////////////////////////////////////////////////////
//////////          EASTER EGGS              ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function crazyLine(){
//   var dir = 1; var back = 2; var sx = 25; var sy = 25; var ex = 25; var ey = 25;
//   setInterval(function(){
//     dir=back;
//     while (dir === back){ dir = random(1,4);} sx=ex; sy=ey;
//     if (dir === 1){ ex += 2.5; back = 2;} if (dir === 2){ ex -= 2.5; back = 1;}
//     if (dir === 3){ ey += 2.5; back = 4;} if (dir === 4){ ey -= 2.5; back = 3;}
//     linePulse(sx,sy,ex,ey,2,'firebrick','testLine',0.1,1.05);},100);}
//
//
// function egg1(){
//   createLine(15,72.4,15,95,3,'red','cra',1);
//   console.log('Egg Clicked');
//   crazyLine();
// }
