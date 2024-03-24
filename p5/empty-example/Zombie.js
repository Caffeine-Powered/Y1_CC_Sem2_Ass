class zombie {

  constructor(speed) {
    this.speed = speed;
    let y;
    if (random(1) < 0.5) {
      // from the top
      y = random(-300, 0);
    } else {
      // from the bottom
      y = random(height, height + 300);
    }

    let x = random(-300, width + 300);
    this.pos = createVector(x, y);
  }


  draw() {
    push();
    fill(100, 255, 100);
    rect(this.pos.x, this.pos.y, 20, 20);
    pop();
  }


  update() {
    let difference = p5.Vector.sub(player.pos, this.pos);
    difference.limit(this.speed);
    this.pos.add(difference);
  }
}