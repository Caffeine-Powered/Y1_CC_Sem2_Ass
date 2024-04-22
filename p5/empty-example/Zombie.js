let zombieDead;


class Zombie {

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
    stroke(255, 0, 0);
    fill(100, 255, 100);
    rect(this.pos.x, this.pos.y, 20, 20);

    if (this.pos.y >= player.pos.y) {
      h = -8;
    } else {
      h = +5;
    }
    fill(100, 255, 100);
    rect(this.pos.x + 15, this.pos.y+h, 5, 5);
    fill(100, 255, 100);
    rect(this.pos.x - 15, this.pos.y+h, 5, 5);


    stroke(0);
    fill(100);
    rect(this.pos.x, this.pos.y + 7, 20, 8);
    fill(150);
    rect(this.pos.x + 5, this.pos.y + 7, 10, 8);
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y + 7, 2, 8);
    fill(0);
    rect(this.pos.x, this.pos.y - 8, 20, 5);
    pop();
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

  ateYou() {
    return dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y) < 20;
  }

  update() {
    let difference = p5.Vector.sub(player.pos, this.pos);
    difference.limit(this.speed);
    this.pos.add(difference);
  }


}