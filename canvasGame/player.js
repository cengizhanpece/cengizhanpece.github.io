class Player{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        ctx.fillRect(this.x, this.y, this.width, this.height);  
    } 
    
    playerControl() {
        document.onkeydown = function(e) {
            switch (e.keyCode) {
                case 37:
                    if(x>0){
                        ctx.fillStyle = "#FF0000";
                        ctx.clearRect(x, y, rectWidth, rectHeight);
                        x-= game_speed;
                        ctx.fillRect(x, y, rectWidth, rectHeight);
                    }
                    break;
                case 39:
                    if(x<game_width-rectWidth){
                        ctx.fillStyle = "#FF0000";
                        ctx.clearRect(x, y, rectWidth, rectHeight);
                        x+= game_speed;
                        ctx.fillRect(x, y, rectWidth, rectHeight);
                    }
                    break;
                case 32:
                    var bullet = new Bullet();
                    
                    
                    break;
            };
        }
    }
    
    
    
    
}