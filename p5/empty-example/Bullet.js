class Bullet{
    constructor(x,y,angle){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 16;
    }


    draw(){
        push();
        noStroke();
        fill(255,255,0);
        circle(this.x,this.y,10);
        fill(255);
        circle(this.x,this.y,5);
        pop();
    }

    update(){
        this.x += this.speed*cos(this.angle);
        this.y += this.speed*sin(this.angle)
    }
}