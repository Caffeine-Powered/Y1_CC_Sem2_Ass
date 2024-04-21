let gunShot;  //sets up gunshot variable

class Player {        //sets up Player class
  constructor() {           //sets up contructor
    this.pos = createVector(width / 2, height / 2); //sets up local variable as a p5 vector object
    this.angle = 0;                                 //sets the local angel variable to 0
    this.bullets = [];                              //sets up bullet array
  }

  draw() {                                          
    push();
    translate(this.pos.x, this.pos.y);
     fill(255);
    rect(0, 0, 20, 20);
    fill(255,0,0);
    rect(0,3,2,10);
    pop();


    gun.overlaps(crosshair);
    gun.rotateTowards(mouse, 0.5, 0);
    gun.moveTowards(this.pos.x, this.pos.y, 1, 0);
    if (mouseX < this.pos.x) {
      gun.mirror.y = true;
    } else {
      gun.mirror.y = false;
    }

    for (let bullet of this.bullets) {
      bullet.update();
      bullet.draw();
    }

  }

  update() {
    let xSpeed = 0;
    let ySpeed = 0;
    if (keyIsDown(65)) {  //if A key is pressed
      xSpeed = -3;
    }
    if (keyIsDown(68)) {  //if D key is pressed
      xSpeed = 3;
    }
    if (keyIsDown(87)) {  //if W key is pressed
      ySpeed = -3;
    }
    if (keyIsDown(83)) {  //if S ket is pressed
      ySpeed = 3;
    }
    this.pos.add(xSpeed, ySpeed);
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
  }

  hasShot(zombie) {
    for (let i = 0; i < this.bullets.length; i++) {
      if (dist(this.bullets[i].x, this.bullets[i].y, zombie.pos.x, zombie.pos.y) < 15) {
        this.bullets.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  shoot() {
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
    gunShot.play();
  }


}