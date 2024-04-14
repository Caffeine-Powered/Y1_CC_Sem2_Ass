let player;               //player var
let gun;                  //gun var for gun sprite
let crosshair;               //crosshair var for crosshair sprite
let zombies = [];             //sets up array for zombies
let zombieSpawnTime = 300;    //variable for zombie spawning times
let chasers = [];             //array for chasers
let chaserSpawnTime = 300;    //chaser spawn variable
let zframe = 0;               //frame count variable for zombies
let bframe = 0;               //frame count variable for chasers
let score = 0;                //score variable
let level = 0;                //level select variable

function preload(){           // preloads function for p5 sound
  soundFormats('wav');         //supports .wav audio
  gunShot = loadSound('Assets/SFX/GunshotSFX.wav');   //loads sound for gun
  zombieDead = loadSound('Assets/SFX/ZombieDeathSplat.wav');  //loads sound for zombie death
  chaserDead = loadSound('Assets/SFX/ChaserDeathSplat.wav');  //loads sound for chaser death
}

function setup() {              //set up function
  createCanvas(1000, 1000);     //draws canvas
  frameRate(60);                //sets framerate to 60fps
  userStartAudio()              //starts audio
  player = new Player();        //draws a new player

  crosshair = new Sprite();                 //sets up crosshair sprite
  crosshair.img = 'Assets/crosshair.png';   //assigns sprite for crosshair
  crosshair.diameter = 10;                  //sets crosshair diamater to 10
  crosshair.layer = 3;                      //puts crosshair on a seperate layer

  gun = new Sprite();                       //sets up gun sprite
  gun.img = 'Assets/Gunspr.png';            //assigns sprite for gun
  gun.offset.x = 35;                        //offsets gun from player by 35px
  gun.layer = 4;                            //draws gun on seperate layer
  gun.scale = .5;                           //scales gun sprite down by half



}

function draw() {                           //draw funtion

  if (score >= 10) {                        //if score is equal or greater than X
    level = 2;                              //set level variable to 2
  }

  if (level == 0) {                         //if level = 0
    Menu();                                 //draw menu
  } else if (level == 1) {                  //if level = 1
    drawlevel1();                           //draw level 1
  } else if (level == 2) {                  //if level = 2
    drawlevel2();                           //draw level 2
  }

}

function restart() {                        //sets up restart function
  player = new Player();                    //draw new player
  zombies = [];                             //empties zombie variable
  zombieSpawnTime = 300;                    //resets zombie spawn time
  chasers = [];                             //empties chaser variable
  chaserSpawnTime = 300;                    //resets chaser spawn time
  score = 0;                                //resets score to 0
  level = 0;                                //resets level to menu
}




