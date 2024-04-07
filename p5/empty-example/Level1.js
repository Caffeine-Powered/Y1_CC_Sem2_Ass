let gunShot;


function setup() {
  createCanvas(800, 800);
  player = new Player();

  cursor = new Sprite();
  cursor.img = 'Assets/crosshair.png';
  cursor.diameter = 20;
  cursor.layer = 3;
  

  gun = new Sprite(width / 2, height / 2, 30, 10);
  gun.color = 'green';
  gun.offset.x = 35;
  gun.layer = 4;
  
  soundFormats('mp3','wav');
  gunShot = loadSound('Assets/SFX/GunShotSFX');
 

}

function drawlevel1() {
  background(100, 100, 100);
  textSize(30);
  text(score, width / 2, 100);

  rectMode(CENTER);
  noCursor();
  player.draw();
  player.update();
  cursor.scale = 0.5;

  for (let i = zombies.length - 1; i >= 0; i--) {
    zombies[i].draw();
    zombies[i].update();

    if (player.hasShot(zombies[i])) {
      score++;
      zombies.splice(i, 1);
      console.log(score);
    }
  }

  if (frameCount % 200 == 0) {
    zombies.push(new Zombie(2));
  }



  cursor.position.x = mouseX;
  cursor.position.y = mouseY;

  /**if (score == 2){
    level = 2;
  }
  **/


}

function mouseClicked() {
  player.shoot();
  //gunShot.play();
}
