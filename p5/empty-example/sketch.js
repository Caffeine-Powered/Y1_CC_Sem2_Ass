let player;               //player var
let gun;                  //gun var for gun sprite
let crosshair;               //crosshair var for crosshair sprite
let zombies = [];             //sets up array for zombies
let zombieSpawnTime = 300;    //variable for zombie spawning times
let chasers = [];             //array for chasers
let chaserSpawnTime = 300;    //chaser spawn variable
let bruiser = [];             //array for chasers
let bruiserSpawnTime = 300;    //chaser spawn variable
let zframe = 0;               //frame count variable for zombies
let cframe = 0;               //frame count variable for chasers
let bframe = 0;               //frame count for bruisers
let score = 0;                //score variable
let level = 0;                //level select variable
let bg1;                      //variable for level 1 background image
let bg2;                      //variable for level 2 background image
let HUD;                      //variable for HUD image
let MM;                       //variable for menu background
let ctrls;                    //variable for controls image
let GO;                       //variable for game over screen
let h;                        //variable for enemy hands

function preload() {           // preloads function for p5 sound
  soundFormats('wav', 'mp3');         //supports .wav audio
  gunShot = loadSound('Assets/SFX/GunShotSFX.wav');   //loads sound for gun
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
  bg1 = loadImage('Assets/CC_BG1.png'); //loads level 1 background image
  bg2 = loadImage('Assets/CC_BG2.png'); //loads level 2 background image
  HUD = loadImage('Assets/CC_Ass2_BGHUD.png');  //loads HUD image
  MM = loadImage('Assets/CC_Ass2_MM.png');  //loads main menu image
  GO = loadImage('Assets/CC_Ass2_GO.png');  //loads game over image
  ctrls = loadImage('Assets/CC_Ass2_Ctrls.png');  //loads controls image

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
  bgMusic.setVolume(0.08);                  //sets auido volume to 0.008
  bgMusic.loop();                           //starts background menu and loops it
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
  if(level == 3){                   //if level = 3
    drawgameover();                   //draws game over screen
  }

}

function restart() {                        //sets up restart function
  player = new Player();                    //draw new player
  zombies = [];                             //empties zombie variable
  zombieSpawnTime = 300;                    //resets zombie spawn time
  chasers = [];                             //empties chaser variable
  chaserSpawnTime = 300;                    //resets chaser spawn time
  bruisers = [];                             //empties chaser variable
  bruiserSpawnTime = 300;                    //resets chaser spawn time
  level = 3;                                //resets score to 0
}




