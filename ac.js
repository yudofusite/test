"use strict"
let editor = document.getElementById("editor");
editor.setAttribute("width","600px");
editor.setAttribute("height","400px");
let ca0 = editor.getContext("2d");

let mousex = 0;
let mousey = 0;
editor.onmousemove = function(mevent) {
mousex = mevent.offsetX;
mousey = mevent.offsetY;
ca0.clearRect(0, 0, 600, 400);
ca0.fillRect(mousex, mousey, 4, 4);
};
