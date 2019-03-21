var player = new Player(x,y, rectWidth, rectHeight);
player.playerControl(); /* Set Player Control */

setInterval(drawLine,1);
var loop = setTimeout(gameLoop, spawnSpeed); /* Start Game Loop */
var fallLoop = setTimeout(fall,fallSpeed);
setInterval(fireLoop,1);

function gameLoop(){ /* Kutu oluştur */
    var randomX = Math.random()*(game_width-rectWidth*2+ 120) /* random x position for fallin box */
    var box = new Box(randomX, rectWidth, rectHeight); /* create fallin box */
    drawLine();
}

function fall(){
    ctx.clearRect(0,0, game_width,game_height); /* clean screen */
    drawLine();
    ctx.fillStyle = "#FF0000"; /* player color */
    var player = new Player(x,y, rectWidth, rectHeight);/* reset player after clean screen */
     for(var i = 0; i < boxs.length; i++){
        boxs[i].boxFall(); /* fall every box in the boxs array */
    }
    if(life <= 0){ /* Game Over */
        console.log("lele");
        clearTimeout(fallLoop);
        clearTimeout(loop);
        document.onkeydown = "";
    }else{
        setTimeout(gameLoop, spawnSpeed);        
        setTimeout(fall,fallSpeed);
    }
}

function drawLine(){
    
    ctx.beginPath();
    ctx.moveTo(0, 450);
    ctx.lineTo(game_width, 450);
    ctx.stroke();
}

function fireLoop(){
    for(var i = 0; i < bullets.length; i++){
        if(bullets[i].y > - bullets[i].height ){
            bullets[i].fire(); 
        }
    }
}