class Bullet{                       //sets up bullet class
    constructor(x,y,angle){         //sets up constructor for 
        this.x = x;                 //sets up individual variable for x
        this.y = y;                 //sets up individual variable for y
        this.angle = angle;         //sets up individual variable for angle
        this.speed = 16;            //sets up individial variable for speed
    }                               //these variables only apply to this instance of
                                    //the bullet in the array


    draw(){                         //draw funciton
        push();                     //isolates code
        noStroke();                 //disables outlines
        fill(255,0,0);              //sets fill colour to red
        circle(this.x,this.y,10);   //draws a circle at the local x y variable
        fill(255,255,0);            //sets fill colour to yellow
        circle(this.x,this.y,5);    //draws a smaller circle at the local x y variables
        pop();                      //end code isolation
    }

    update(){                                       //update function
        this.x += this.speed*cos(this.angle);       //local x variable + the speed variable times the cosine of this local angle
        this.y += this.speed*sin(this.angle);       //local y variable + the speed variable times sine of this local angle
    }
}