"use strict"
let editor = document.getElementById("editor");
editor.setAttribute("width","600px");
editor.setAttribute("height","400px");
let ca0 = editor.getContext("2d");


let mousex = 0;
let mousey = 0;
editor.onmousemove = function(mevent) {
mousex = mevent.offsetX;
mousex = mousex * (600 / editor.clientWidth);
mousey = mevent.offsetY;
mousey = mousey * (400 / editor.clientHeight);
};

let md = 0;    //マウス押下（1）

//--------------
addEventListener("mousedown",function() {
  md = 1;
  console.log(md)
})
addEventListener("mouseup",function() {
  md = 0;
  console.log(md)
})
//--------------

//メインループ
let mainLoop = setInterval(function() {
  ca0.clearRect(0, 0, 600, 400);
  ca0.fillRect(mousex - 2, mousey - 2, 4, 4);
},1000 / 60);
