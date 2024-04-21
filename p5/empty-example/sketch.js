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
let bg1;
let bg2;
let HUD;
let MM;
let ctrls;
let GO;
let lframes = 0;
let playerSprite;

function preload() {           // preloads function for p5 sound
  soundFormats('wav', 'mp3');         //supports .wav audio
  gunShot = loadSound('Assets/SFX/GunshotSFX.wav');   //loads sound for gun
  zombieDead = loadSound('Assets/SFX/ZombieDeathSplat.wav');  //loads sound for zombie death
  chaserDead = loadSound('Assets/SFX/ChaserDeathSplat.wav');  //loads sound for chaser death
  zombieGrowl = loadSound('Assets/SFX/Zombie_growl.wav');     //loads sound of zombie growl
  chaserGrowl = loadSound('Assets/SFX/Chaser_growl.wav');     //loads sound of chaser growl
  bgMusic = loadSound('Assets/SFX/Music_Loop.mp3');           //loads music for background
}

function setup() {              //set up function

  createCanvas(1000, 1000);     //draws canvas
  frameRate(60);                //sets framerate to 60fps
  userStartAudio()              //starts audio
  bg1 = loadImage('Assets/CC_BG1.png');
  bg2 = loadImage('Assets/CC_BG2.png');
  HUD = loadImage('Assets/CC_Ass2_BGHUD.png');
  MM = loadImage('Assets/CC_Ass2_MM.png');
  GO = loadImage('Assets/CC_Ass2_GO.png');
  ctrls = loadImage('Assets/CC_Ass2_Ctrls.png');
  playerSprite = loadImage('Assets/Player_Sprite.png')


  player = new Player();        //draws a new player

  crosshair = new Sprite();                 //sets up crosshair sprite
  crosshair.img = 'Assets/crosshair.png';   //assigns sprite for crosshair
  crosshair.diameter = 10;                  //sets crosshair diamater to 10
  crosshair.layer = 3;                      //puts crosshair on a seperate layer

  gun = new Sprite();                       //sets up gun sprite
  gun.img = 'Assets/Gunspr.png';            //assigns sprite for gun
  gun.offset.x = 40;                        //offsets gun from player by 35px
  gun.layer = 4;                            //draws gun on seperate layer
  gun.scale = .5;                           //scales gun sprite down by half
  bgMusic.setVolume(0.08);
  //bgMusic.loop();
}

function draw() {                           //draw funtion
  if (level == 0) {                         //if level = 0
    Menu();                                 //draw menu
  }
  if (level == 1) {                  //if level = 1
    drawlevel1();                           //draw level 1
  }
  if (level == 2) {                  //if level = 2
    drawlevel2();                      //draw level 2
  }
  if(level == 3){
    drawgameover();
  }

}

function restart() {                        //sets up restart function
  player = new Player();                    //draw new player
  zombies = [];                             //empties zombie variable
  zombieSpawnTime = 300;                    //resets zombie spawn time
  chasers = [];                             //empties chaser variable
  chaserSpawnTime = 300;                    //resets chaser spawn time
  level = 3;                                //resets score to 0
}




