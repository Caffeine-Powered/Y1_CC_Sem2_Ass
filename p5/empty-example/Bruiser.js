let bruiserDead;                    //sets up bruiserDead variable                

class Bruiser {//sets up class Bruiser

  constructor(speed) { //sets up constructor speed
    this.speed = speed; //sets context variable
    let y;//sets up y variable
    if (random(1) < 0.5) {   //if random number between 0 and 1 is greater than 0.5

      y = random(-300, 0);//y var equals a random number between -300 and 0
    } else {  //else

      y = random(height, height + 300);//y var = a random number between the height of the canbas + the canvas height + 300
    }

    let x = random(-300, width + 300);//sets x var to a random number between -300 and the canvas width + 300
    this.pos = createVector(x, y);//sets position and creates vector from using x and y variables


  }


  draw() {//draw function
    push(); //isolates code
    stroke(0); //sets outline to red
    fill(100, 255, 100);//sets shape fill colour to a darker green
    rect(this.pos.x, this.pos.y, 30, 30);//draws a rectangle at the contextual x and y positions generated above 30x30px
    //this is the code for the hands being raised or lowered for the players location
    if (this.pos.y >= player.pos.y) {//if this y position more or equal to the players y position 
      h = -8;// sets h variable to - 8
    } else {  //else 
      h = +5;// sets h to + 5
    }
    fill(100, 255, 100);  //sets shape fill to a darker green
    rect(this.pos.x + 20, this.pos.y + h, 10, 10);  //draws 5x5px square on the right of the zombie    
    rect(this.pos.x - 20, this.pos.y + h, 10, 10);  //draws 5x5px square on the left of the zombie  
    fill(100, 100, 255);//sets shape fill to bluish
    rect(this.pos.x, this.pos.y + 7, 30, 15);//draws a rect at the bottom of the zombie
    pop();  //end code isolation
  }

  hasShot(bruiser) { //function for shooing zombie
    for (let i = 0; i < this.bullets.length; i++) {//for a specific bullet in the arrray
      if (dist(this.bullets[i].x, this.bullets[i].y, bruiser.pos.x, bruiser.pos.y) < 15) {//if the position of a bullets from a zombie is less than 15
        this.bullets.splice(i, 1);//remove bullet from the array
        return true;//tells the zombie that it has been shot
      }
    }
    return false;//otherwise return false
  }

  ateYou() {//ate you function
    return dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y) < 20;//tells you when the zombie's position and the players position is less than 20px
  }

  update() { //update function
    let difference = p5.Vector.sub(player.pos, this.pos);   //lets the difference variable equal a vector from the player and contextual position
    difference.limit(this.speed); //limits the size of the variable by the speed variable
    this.pos.add(difference);   //adds difference to the context position variable
  }


}