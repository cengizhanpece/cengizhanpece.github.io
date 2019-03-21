class Bullet{
    constructor() {
        this.y = y-rectHeight/2;
        this.width = 20;
        this.height = 20;
        this.x = x + (rectWidth/2-this.width/2);
        this.collision = false;
        bullets.push(this); 
        ctx.fillStyle ="#4dd2ff";
        ctx.fillRect(this.x, this.y, this.width, this.height);       
    } 
    
    
    
    
    collisionCheck(){
        for(var i = 0; i < bullets.length; i++){
            for(var j = 0; j < boxs.length; j++){
                if(boxs[j].x - bullets[i].width + 1 <= bullets[i].x &&
                   (boxs[j].x + boxs[j].width) >= bullets[i].x &&
                    
                   boxs[j].y + boxs[j].height >= bullets[i].y
                  
                  ){
                    
                    if(boxs[j].collision === false && bullets[i].collision === false 
                        && bullets[i].y > 0)
                      { 
                        ctx.clearRect(boxs[j].x, boxs[j].y, boxs[j].width, boxs[j].height);
                        ctx.clearRect(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height);
                        boxs[j].collision = true;
                        bullets[i].collision = true;
                          console.log(bullets[i].x + "  S:" + boxs[j].x + "  F:" + (boxs[j].x+boxs[j].width));
                          
                          
                        skor++;  
                        skordiv.innerHTML = "SKOR = " + skor;
                        return true;
                        }
                }
            }
        }
    }
      
    fire(){
            if(this.collision === false && this.y > 0 - this.height ){
                console.log(this.collisionCheck());
                ctx.clearRect(this.x, this.y, this.width, this.height);  
                this.y -= 10;
                ctx.fillStyle = "#4dd2ff";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
       
    }  
}