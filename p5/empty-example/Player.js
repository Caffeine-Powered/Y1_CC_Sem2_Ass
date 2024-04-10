let gunShot;

class Player {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.angle = 0;
    this.bullets = [];
  }

  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(255);
    rect(0, 0, 20, 20);
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

  /**shoot() {
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
    gunShot.play();
  }
**/
  shoot() {
    if (bulletCount > 0) {
      this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
      gunShot.play();
      bulletCount--;
      if (bulletCount == 0) {

          bulletCount = 6;
        }

      }

    }
    // if (reloadWait = 300) {
    //   bulletCount = 6;
    //   reloadWait = 0;
  }


//}






