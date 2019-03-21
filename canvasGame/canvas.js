/* global document canvas lifediv ctx rectWidth rectHeight
   game_width game_height game_speed life x y*/

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    var rectWidth = 100;
    var rectHeight = 50;
    const game_width = 800;
    const game_height = 600;
    const game_speed = 70;
    var x = game_width/2 - rectWidth/2;
    var y = game_height - rectHeight - 10;
    var fallSpeed = 700;
    var spawnSpeed = 700;
    var life = 3;
    var lifediv = document.getElementById("life");
    lifediv.innerHTML = "LIFE = " + life;
    var skor = 0;
    var skordiv = document.getElementById("skor");
    skordiv.innerHTML = "SKOR = " + skor;
    var boxs = new Array();
    var bullets = new Array();
   

