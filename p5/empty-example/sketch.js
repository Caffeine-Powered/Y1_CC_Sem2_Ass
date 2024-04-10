let player;               //player var
let gun;                  //gun var for gun sprite
let crosshair;               //crosshair var for crosshair sprite
let zombies = [];
let zombieSpawnTime = 300;
let chasers = [];
let chaserSpawnTime = 300;
let zframe = 0;
let bframe = 0;
let score = 0;
let level = 0;
let playerHealth = 3;

function setup() {
  createCanvas(1000, 1000);
  userStartAudio()
  player = new Player();

  crosshair = new Sprite();
  crosshair.img = 'Assets/crosshair.png';
  crosshair.diameter = 10;
  crosshair.layer = 3;

  gun = new Sprite();
  gun.img = 'Assets/Gunspr.png';
  gun.offset.x = 35;
  gun.layer = 4;
  gun.scale = .5;

}

function draw() {

  if (score >= 10) {
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

function restart() {
  player = new Player();
  zombies = [];
  zombieSpawnTime = 300;
  chasers = [];
  chaserSpawnTime = 300;
  score = 0;
  level = 0;
}




