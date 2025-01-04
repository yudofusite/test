"use strict"
let editor = document.getElementById("editor");
editor.setAttribute("width","600px");
editor.setAttribute("height","400px");
let ca0 = editor.getContext("2d");

console.log(editor.clientWidth);

let mousex = 0;
let mousey = 0;
editor.onmousemove = function(mevent) {
mousex = mevent.offsetX;
mousex = mousex * (600 / editor.clientWidth);
mousey = mevent.offsetY;
mousey = mousey * (400 / editor.clientHeight);
ca0.clearRect(0, 0, 600, 400);
ca0.fillRect(mousex, mousey, 4, 4);
};

let md = 0;    //マウス押下（1）

addEventListener("mousedown",function() {
  md = 1;
})
addEventListener("mouseup",function() {
  md = 0;
})
