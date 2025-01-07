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

//描画メインループ
let mainLoop = setInterval(function() {
  ca0.clearRect(0, 0, 600, 400);
  ca0.fillRect(mousex - 2, mousey - 2, 4, 4);
  if (mapdate.length > 0) {    //参照するマップデータが存在する場合
    editor_edit()
  }
},1000 / 60);

let mapdate = [[30]];    //マップデータ。
data_format(0);

let now_edit = 1;      //現在編集中のマップ
let new_map_edit = document.getElementById("new_map");
let map_num_in = document.getElementById("nowmapinput");
let maxvm = document.getElementById("maxvm");
new_map_edit.addEventListener("click",function() {
  mapdate.push([30]);
  map_num_in.max = mapdate.length;
  map_num_in.value = mapdate.length;
  now_edit = map_num_in.value;
  data_format(now_edit - 1);
  console.log("new_map" + mapdate.length);
  maxvm.textContent = "/" + mapdate.length;
});

function editor_edit() {
  ca0.strokeStyle = "#000030";
  ca0.lineWidth = 2;
}

function data_format(dfnum) {      //30 x 20配置、[[横の長さ],[一列目データ],[二列目データ]]
    mapdate[dfnum] = [];            //マップデータ新規設定　dfnumの値は配列番号（編集中のマップ番号-1）
    mapdate[dfnum].push([30]);
  for (var dfi = 0; dfi < 20;  dfi++) {
    mapdate[dfnum].push([]);
    for (var dfi2 = 0; dfi2 < 30; dfi2++) {
      mapdate[dfnum][dfi].push(0);
    }
  }
}
