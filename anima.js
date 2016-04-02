var svgElement = 'http://www.w3.org/2000/svg';

////////////////////////////////////////////////////////////////////////////////
/////////          CREATE SVG ELEMENTS          ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
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

function createCir(cx,cy,r,fill,bordWidth,bordColor,opacity, cirID){
  var newEl = createEl('mainSVG','circle',[['id',cirID],['stroke-width',bordWidth+'%']
  ,['stroke',bordColor],['cx',cx+'%'],['cy', cy+'%'],['r',r+'%']
  ,['opacity', opacity],['fill',fill]]); return newEl;}

function createEl(container,type,att){
  var newObj = document.createElementNS(svgElement, type);
  for (var i=0; i<att.length; i++){ newObj.setAttributeNS(null, att[i][0],att[i][1]); }
  document.getElementById(container).appendChild(newObj); return newObj; }

function updateSVG(elm, att) {
  for (var i=0; i<att.length; i++){
    elm.setAttributeNS(null, att[i][0],att[i][1]);
  }
}

////////////////////////////////////////////////////////////////////////////////
/////////          CREATE BUTTONS & HOVERS        //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function createBtn(btn, cir){ var on = false;
  var btn = document.getElementById(btn); mainSVG.appendChild(btn);
  var cir = document.getElementById(cir);
  btn.onmouseover = function(){
    if (on === false){
      cir.style.fill = 'rgb(210,210,210)'; cir.style.r = '2.3%';
      blowUp(btn,cir,1,2,75,100); on = true;}}
  btn.onmouseleave = function(){
     cir.style.fill = 'rgb(230,230,230)';cir.style.r = '2%'; on = false;}}

function createBarBtn(position,btn,lnID,box,drop,speed1,ramp1,speed2,ramp2){
  var sX = parseFloat(lnID.getAttribute('x1'));
  var sY = parseFloat(lnID.getAttribute('y1'));
  var eX = parseFloat(lnID.getAttribute('x2'));
  var eY = parseFloat(lnID.getAttribute('y2'));
  btn.onmouseover = function(){
    linePulse(sX,sY,eX,eY,lnID,true,speed1,ramp1,'none');
    box.style.fill = 'rgb(200,200,210)';}
  btn.onmouseleave = function(){
    lnID.setAttributeNS(null, 'opacity', 0);
    var offLine = createLine(sX,sY,eX,eY,3,'rgb(220,220,220)','offLine',1);
    linePulse(sX,sY,eX,eY,offLine,false,speed2,ramp2,'none');
    box.style.fill = 'url(#grad1)';

    // if(drop==='l'){
    //   linePulse(25,12.5,25,50,dropL,false,0.5,1.15,'none');}
    // if(drop==='r'){
    //   linePulse(75,12.5,75,50,dropR,false,0.5,1.15,'none');}
  }

  btn.onmousedown = function(){ swapProjs(1,true,position);

    if(position===0){
      createLine(0,12.4,25,12.4,5,'rgb(184,134,11)','under'+position,1);

      createLine(12.5,12.7,12.5,15,3,'rgb(220,220,220)','dropL0',0);
      linePulse(12.5,12.7,12.5,15,dropL0,true,0.5,1.15,'none');

      createLine(12.5,15,5,15,3,'rgb(220,220,220)','dropL1',0);
      linePulse(12.5,15,5,15,dropL1,true,0.5,1.15,'none');

    }
    if(drop==='l'){
      createRect(5,15,0.3,40,'url(#linGrad)',0,'none',1,'dropL');
      elmAnimate(dropL,'height',1.001,1.03,'%',0,40,'none');

      // linePulse(5,15,5,55,dropL,true,0.5,1.15,'none');
    }

    if(drop==='r'){
      linePulse(75,12.5,75,50,dropR,true,0.5,1.15,'none');}}}


      //SAVE FOR PROJECT TRANSITIONS
      // elmAnimate(polarGradR, 'x2',1.01,1.4,'%',0,100,'none');}
      // elmAnimate(polarGradR, 'x2',1.01,1.4,'%',100,20,'none');}


prevAP.onmouseover = function(){
  if(sCnt===0){var x=projs.length-1}else{var x=sCnt-1;}
  regElmAnimate(prevA, 'opacity', 0.05, 1, '', 0.1, 1,'none');}
prevAP.onmouseleave = function(){
  if(sCnt===0){var x=projs.length-1}else{var x=sCnt-1;}
  regElmAnimate(prevA, 'opacity', 0.05, 1, '', 1, 0.1,'none');}

nextAP.onmouseover = function(){
  if(sCnt===projs.length-1){var x=0}else{var x=sCnt+1;}
  regElmAnimate(nextA, 'opacity', 0.05, 1, '', 0.1, 1,'none');}
nextAP.onmouseleave = function(){
  if(sCnt===projs.length-1){var x=0}else{var x=sCnt+1;}
  regElmAnimate(nextA, 'opacity', 0.05, 1, '', 1, 0.1,'none');}

////////////////////////////////////////////////////////////////////////////////
//////////          ANIMATION STATION          /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function elmAnimate(elID, elm, speed, ramp, unit, start, end, func){ var loc = start;
  function go(){ speed*=ramp;
    if (start < end){ loc+=speed; } else { loc-=speed; }
    elID.setAttributeNS(null, elm, loc+unit);
    if (start < end && loc <= end){ requestAnimationFrame(go); }
    else if (start > end && loc >= end){ requestAnimationFrame(go); }
    else { if (func !== 'none') { func(); } elID.setAttributeNS(null, elm, end+unit);
    return; }} go();}
//^This function was created late and could be turned into a universal animation function.
//...And, could eliminate many of the functions below...
function regElmAnimate(elID, elm, speed, ramp, unit, start, end, func){ var loc = start;
  function go(){ speed*=ramp;
    if (start < end){ loc+=speed; } else { loc-=speed; }
    elID.setAttribute('style', elm+': '+loc+unit+';');
    if (start < end && loc <= end){ requestAnimationFrame(go); }
    else if (start > end && loc >= end){ requestAnimationFrame(go); }
    else { if (func !== 'none') { func(); return; }}} go();}

function linePulse(sX,sY,eX,eY,lnID,grow,speed,ramp,func,xx){ var end = false;
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
      if (func !== 'none'){ func(xx);}
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

function swapProjs(dir,fade,position){
  if (sCnt%2 === 0){ skillsBox[sCnt].style.fill = 'url(#grad1)';
  } else {skillsBox[sCnt].style.fill = 'url(#grad2)';}
  skillsBox[sCnt].style.opacity = 1; skillsBox[sCnt].style.filter = 'none';
  mainSVG.insertBefore(skillsBox[sCnt],vert0);
  if (position === 'n'){ sCnt+=dir; }else{sCnt=position;}
  if (sCnt >= projs.length){ sCnt=0;} if (sCnt <= -1){ sCnt=projs.length-1;}
  if (fade) {regElmAnimate(projBar, 'opacity', 0.02, 1.1, '', 1, 0,reSetProj);
  }else{reSetProj();}}

function reSetProj(){
  for(var i = 0; i < 5; i++){
    if (typeof projs[sCnt].projects[i] === 'undefined'){
      document.getElementById('proj'+i).style.display = 'none';
    } else {
      document.getElementById('proj'+i).style.display = 'inline-block';
      document.getElementById('proj'+i).innerHTML = projs[sCnt].projects[i];}}
  skillsBox[sCnt].style.filter = 'url(#dropShad)';
  skillsBox[sCnt].style.opacity = 0.5;
  mainSVG.appendChild(skillsBox[sCnt]); mainSVG.appendChild(skillsTxt[sCnt]);
  mainSVG.appendChild(skillsArr[sCnt]);
  regElmAnimate(projBar, 'opacity', 0.01, 1.1, '', 0, 1,'none');}

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
