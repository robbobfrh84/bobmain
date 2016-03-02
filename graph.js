var svgElement = "http://www.w3.org/2000/svg";

var pW = window.innerWidth; //window's pixel width
var xlines = 40;
var ylines = 50;

var xmargin = 5;//in percent
var oL = 2; //percent of lines that overlap to create crossing at edges
var ymargin = (pW*(xmargin/2))/100;//in pixels

var boldBreak1 = 5;//bold lines every...
var boldBreak2 = 10;//extra bold lines every...
var thin = 0.25;
var bold1 = 0.75;
var bold2 = 1.5;

var xgap = (100 - (xmargin*2)) / xlines;
var ygap = (pW*((100-(xmargin*2))/100))/xlines;

document.getElementById('mainSVG').style.height = (ygap*ylines)+(ymargin*2)+"px";

function drawLines(){
  for (var i = 0; i <= xlines; i++){
    if((i)%boldBreak1===0){ var lineW = bold1;} else { var lineW = thin;}
    if((i)%boldBreak2===0){ var lineW = bold2;}
    createEl("mainSVG","line",[["stroke-width",lineW],["id","hozi"+i]
      ,["x1",i*xgap+xmargin+"%"],["y1",ymargin-(pW*(oL/2)/100)+"px"]
      ,["x2",i*xgap+xmargin+"%"],["y2",(ygap*ylines)+ymargin+(pW*(oL/2)/100)+"px"]])

  }
  for (var i = 0; i <= ylines; i++){
    if((i)%boldBreak1===0){ var lineW = bold1;} else { var lineW = thin;}
    if((i)%boldBreak2===0){ var lineW = bold2;}
    createEl("mainSVG","line",[["stroke-width",lineW],["id","vert"+i]
      ,["x1",xmargin-oL+"%"],["y1",i*ygap+ymargin+"px"]
      ,["x2",100-xmargin+oL+"%"],["y2",i*ygap+ymargin+"px"]])
  }
}

function createEl(container,type,att){
  var newObj = document.createElementNS(svgElement, type);
  for (var i=0; i<att.length; i++){
    newObj.setAttributeNS(null, att[i][0],att[i][1]);
  }
  document.getElementById(container).appendChild(newObj);
}
drawLines();

window.onresize = function(event){
  console.log("resize")
  pW = window.innerWidth; //window's pixel width
  ymargin = (pW*(xmargin/2))/100;//in pixels
  xgap = (100 - (xmargin*2)) / xlines;
  ygap = (pW*((100-(xmargin*2))/100))/xlines;
  document.getElementById('mainSVG').style.height = (ygap*ylines)+(ymargin*2)+"px";
  for (var i = 0; i <= xlines;i++){
    if((i)%boldBreak1===0){ var lineW = bold1;} else { var lineW = thin;}
    if((i)%boldBreak2===0){ var lineW = bold2;}
    updateEl("hozi"+i,[["stroke-width",lineW],["id","hozi"+i]
    ,["x1",i*xgap+xmargin+"%"],["y1",ymargin-(pW*(oL/2)/100)+"px"]
    ,["x2",i*xgap+xmargin+"%"],["y2",(ygap*ylines)+ymargin+(pW*(oL/2)/100)+"px"]]);
  }
  for (var i = 0; i <= ylines; i++){
    if((i)%boldBreak1===0){ var lineW = bold1;} else { var lineW = thin;}
    if((i)%boldBreak2===0){ var lineW = bold2;}
    updateEl("vert"+i,[["stroke-width",lineW],["id","vert"+i]
      ,["x1",xmargin-oL+"%"],["y1",i*ygap+ymargin+"px"]
      ,["x2",100-xmargin+oL+"%"],["y2",i*ygap+ymargin+"px"]])
  }
}

function updateEl(Id, att) { //function used to update any attributes with DOM.
  for (var i=0; i<att.length; i++){
    document.getElementById(Id).setAttributeNS(null, att[i][0],att[i][1]);
} }



/*
----------Workflow...-----------------------------------------------
- change x/y to hor/vert

----------Not important ideas...------------------------------------
-- gradient margins so they fad off the page....
*/
