var svgElement = 'http://www.w3.org/2000/svg';

//////////CREATE SVG ELEMENTS///////////////////////////////////////////////////
function drawGrid(numOfLines,thin,fifth,tenth,color){ lines = (100/numOfLines);
  for (var i = 0; i <= numOfLines; i++){ fat = thin;
    if(i%5===0){fat=fifth;} if(i%10===0||i===0){fat=tenth;}
    createLine(0,lines*i,100,lines*i,fat,color,'vert'+i);
    createLine(lines*i,0,lines*i,100,fat,color,'horiz'+i); } }

function createBlockText(x,y,size,opacity,color,txID,elClass,text){
  var txID = createEl('mainSVG','text',[['x',x+'%'],['y',y+'%'],['font-size',size]
  ,['opacity',opacity],['fill',color],['class',elClass],['id',txID]]);
  txID.appendChild(document.createTextNode(text)); return txID; }

function createLine(x1,y1,x2,y2,width,color,lnID){
  var newEl = createEl('mainSVG','line',[['id',lnID],['stroke-width',width],['stroke',color]
    ,['x1',x1+'%'],['y1',y1+'%'],['x2',x2+'%'],['y2',y2+'%']]); return newEl;}

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

function createButtons(btn, cir){
  var btn = document.getElementById(btn); mainSVG.appendChild(btn);
  var cir = document.getElementById(cir);
  btn.onmouseover = function(){
     cir.style.fill = 'rgb(210,210,210)'; cir.style.r = '2.2%'};
  btn.onmouseout = function(){
     cir.style.fill = 'rgb(230,230,230)';cir.style.r = '2%'};}

////////////////////////////////////////////////////////////////////////////////
//////////          ANIMATION STATION          /////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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

function lineGrow(startX,startY,endX,endY,width,color,lineID,speed,ramp){
  var lineID = createLine(startX,startY,startX,startY,width,color,lineID);
  var x = Math.abs(startX-endX); var y = Math.abs(startY-endY);
  var placeX = startX; var placeY = startY; var end = false;
  function goxxx(){ x -= speed; y -= speed; speed*=ramp;
    if (startX > endX && x > 0) { end = false; placeX = endX+x; }
    if (startX < endX && x > 0) { end = false; placeX = endX-x; }
    if (startY > endY && y > 0) { end = false; placeY = endY+y; }
    if (startY < endY && y > 0) { end = false; placeY = endY-y; }
    if (end === true) { lineID.setAttributeNS(null,'x2',endX+'%');
      lineID.setAttributeNS(null,'y2',endY+'%'); return; }
    lineID.setAttributeNS(null,'x2',placeX+'%');
    lineID.setAttributeNS(null,'y2',placeY+'%');
    end = true; requestAnimationFrame(goxxx);
  } goxxx();
}
