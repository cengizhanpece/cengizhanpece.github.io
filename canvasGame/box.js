class Box{
    constructor(randomX, width, height) {
        this.x = randomX;
        this.width = width;
        this.y = 0;
        this.height = height;
        this.bool = true;
        this.collision = false;
        ctx.clearRect(this.x, this.y, this.width, this.height);  
        ctx.fillRect(this.x, this.y, this.width, this.height);
        boxs.push(this); 
    } 
    
    boxFall(){
        if(this.y < 420 && this.collision === false){
            ctx.clearRect(this.x, this.y, this.width, this.height); 
            ctx.fillStyle = "#000000"; /* color for fallin box */
            this.y += game_speed;
            ctx.fillRect(this.x, this.y, this.width, this.height);  
           }
        else{
            if(this.bool === true && this.collision === false){
                ctx.clearRect(this.x, this.y, this.width, this.height);
                life--;
                lifediv.innerHTML= "LIFE = " + life;
                this.bool = false;
            }
        }
    }
}