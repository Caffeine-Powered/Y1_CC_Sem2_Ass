let gunShot;  //sets up gunshot variable

class Player {        //sets up Player class
  constructor() {           //sets up contructor
    this.pos = createVector(width / 2, height / 2); //sets up local variable as a p5 vector object
    this.angle = 0;                                 //sets the local angel variable to 0
    this.bullets = [];                              //sets up bullet array
  }

  draw() {                                         //draw function
    push();                                        //isolates code
    translate(this.pos.x, this.pos.y);             //moves the character to the local x and y postitions
     fill(255);                                    //changes shape fill to white
    rect(0, 0, 20, 20);                            //draws a square in the top left corner, 20x20px
    fill(255,0,0);                                 //changes shape fill to red
    rect(0,3,2,10);                                 //draws a rectangle in the center of the square
    pop();                                          //ends code isolations


    gun.overlaps(crosshair);                          //sets gun sprite to overlap the crosshair sprite
    gun.rotateTowards(mouse, 0.5, 0);                 //rotates the gun sprite towards the cursor with a small delay
    gun.moveTowards(this.pos.x, this.pos.y, 1, 0);    //moves the gun with the player sprite
    if (mouseX < this.pos.x) {                        //if the mouse is to the left of the player sprite
      gun.mirror.y = true;                            //mirror the gun on the y axis
    } else {                                          //else
      gun.mirror.y = false;                           //dont mirror the gun sprite
    }

    for (let bullet of this.bullets) {                //for each specific bullet in the array
      bullet.update();                                //run update function for the bullet
      bullet.draw();                                  //draw the bulley
    }

  }

  update() {                                           //player update function
    let xSpeed = 0;                                    //sets x speed to 0
    let ySpeed = 0;                                    //sets y speed to 0
    if (keyIsDown(65)) {                               //if A key is pressed
      xSpeed = -3;                                     //sets xspeed var to -3
    }
    if (keyIsDown(68)) {                               //if D key is pressed
      xSpeed = 3;                                      //sets xspeed var to 3
    }
    if (keyIsDown(87)) {                               //if W key is pressed
      ySpeed = -3;                                     //sets y speed to -3
    }
    if (keyIsDown(83)) {                               //if S ket is pressed
      ySpeed = 3;                                      //sets yspeed to 3
    }
    this.pos.add(xSpeed, ySpeed);                      //updates player position by adding xspeed and yspeed
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x); //creates a vector between the player and the cursor location
  }

  hasShot(zombie) {                                                                       //function for shooing zombie
    for (let i = 0; i < this.bullets.length; i++) {                                       //for a specific bullet in the arrray
      if (dist(this.bullets[i].x, this.bullets[i].y, zombie.pos.x, zombie.pos.y) < 15) {  //if the position of a bullets from a zombie is less than 15
        this.bullets.splice(i, 1);                                                        //remove bullet from the array
        return true;                                                                      //tells the zombie that it has been shot
      }
    }
    return false;                                                                         //otherwise return false
  }

  shoot() {                                                                               //shoot function
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));                    //add new bullet to array
    gunShot.play();                                                                       //play gunshot sound effect
  }


}