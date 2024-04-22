let bruiserDead;                                    

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
    stroke(0);
    fill(100, 255, 100);
    rect(this.pos.x, this.pos.y, 30, 30);
    if (this.pos.y >= player.pos.y) {
      h = -8;
    } else {
      h = +5;
    }
    fill(100, 255, 100);
    rect(this.pos.x + 20, this.pos.y+h, 10, 10);
    fill(100, 255, 100);
    rect(this.pos.x - 20, this.pos.y+h, 10, 10);
    fill(100,100,255);
    rect(this.pos.x, this.pos.y+7, 30, 15);
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