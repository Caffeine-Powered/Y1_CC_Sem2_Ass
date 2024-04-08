let player;               //player var
let gun;                  //gun var for gun sprite
let cursor;               //cursor var for cursor sprite
let zombies = [];
let zombieSpawnTime = 300;
let frame = 0;
let score = 0;
let level = 0;
let health = 3;

function setup() {
  createCanvas(800, 800);
  player = new Player();

  cursor = new Sprite();
  cursor.img = 'Assets/crosshair.png';
  cursor.diameter = 10;
  cursor.layer = 3;
 
  gun = new Sprite();
  gun.img = 'Assets/Gunspr.png';
  gun.offset.x = 35;
  gun.layer = 4;
  gun.scale = .5;

 /**  gun = new Sprite(width / 2, height / 2, 30, 10);
  gun.color = 'green';
  gun.offset.x = 35;
  gun.layer = 4;
**/
}

function draw() {

  if (score == 50){
    level = 2;
  }

  if (level == 0) {
    Menu();
  } else if (level == 1) {
    drawlevel1();
  } else if (level == 2) {
    drawlevel2();
  }
}
  


  
