let player;

function setup() {
createCanvas(700,700);
player = new Player();

cursor = new Sprite();
  cursor.img = 'Assets/crosshair.png';
  cursor.diameter = 50;
  cursor.layer = 3;
  cursor.scale = 2;

}

function draw() {
background (100,100,100);
rectMode(CENTER);
player.draw();
player.update();

cursor.position.x = mouseX;
cursor.position.y = mouseY;
}

function mouseClicked(){
  player.shoot();
}
