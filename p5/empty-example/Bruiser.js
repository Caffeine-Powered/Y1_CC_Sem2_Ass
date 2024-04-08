class Bruiser {

  constructor(speed) {
    this.speed = speed;
    let y;
    if (random(1) < 0.5) {

      y = random(-300, 0);
    } else {

      y = random(height, height + 300);
    }

    let x = random(-300, width + 300);
    this.pos = createVector(x, y);


  }


  draw() {
    push();
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, 40, 40);
    pop();
  }

  hasShot(bruiser) {
    for (let i = 0; i < this.bullets.length; i++) {
      if (dist(this.bullets[i].x, this.bullets[i].y, bruiser.pos.x, bruiser.pos.y) < 15) {
        this.bullets.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  ateYou() {
    return dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y) < 20;
  }

  update() {
    let difference = p5.Vector.sub(player.pos, this.pos);
    difference.limit(this.speed);
    this.pos.add(difference);
  }


}