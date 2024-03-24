let player;
let gun;
let cursor;
let zombies = [];

function setup() {
  createCanvas(800, 800);
  player = new Player();

  cursor = new Sprite();
  cursor.img = 'Assets/crosshair.png';
  cursor.diameter = 50;
  cursor.layer = 3;
  cursor.scale = 2;

  gun = new Sprite(width / 2, height / 2, 30, 10);
  gun.color = 'green';
  gun.offset.x = 35;
  gun.layer = 4;

}

function draw() {
  background(100, 100, 100);
  rectMode(CENTER);
  noCursor();
  player.draw();
  player.update();

  for (let zombie of zombies) {
    zombie.draw();
    zombie.update();
  }

  if (frameCount % 200 == 0) {
    zombies.push(new Zombie(2));
  }

  cursor.position.x = mouseX;
  cursor.position.y = mouseY;



}

function mouseClicked() {
  player.shoot();
}
