let player;               //player var
let gun;                  //gun var for gun sprite
let cursor;               //cursor var for cursor sprite
let zombies = [];
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
  cursor.scale = 2;

  gun = new Sprite(width / 2, height / 2, 30, 10);
  gun.color = 'green';
  gun.offset.x = 35;
  gun.layer = 4;


}

function draw() {
  if (level == 0) {
    Menu();
  } else if (level == 1) {
    drawlevel1();
  } else if (level == 2) {
    drawlevel2();
  }


  }
