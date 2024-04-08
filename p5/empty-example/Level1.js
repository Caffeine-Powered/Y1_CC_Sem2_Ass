



function drawlevel1() {
  background(100, 100, 100);
  textSize(30);
  text(score, width / 2, 100);
  cursor.visable = true;
  rectMode(CENTER);
  noCursor();
  player.draw();
  player.update();
  cursor.scale = 0.5;
  gun.scale = 0.5;


  cursor.position.x = mouseX;
  cursor.position.y = mouseY;

  for (let i = zombies.length - 1; i >= 0; i--) {
    zombies[i].draw();
    zombies[i].update();

    if (player.hasShot(zombies[i])) {
      score++;
      zombies.splice(i, 1);
      console.log(score);
    }

  }

  if (zframe >= zombieSpawnTime && zombies.length < 8) {
    zombies.push(new Zombie(1.5));
    zombieSpawnTime *= 0.95;
    zframe = 0;
  }
  zframe++;


//-----------------------------------------------------------------------------------

for (let i = bruisers.length - 1; i >= 0; i--) {
  bruisers[i].draw();
  bruisers[i].update();

  if (player.hasShot(bruisers[i])) {
    score++;
    bruisers.splice(i, 1);
    console.log(score);
  }

}

if (bframe >= bruiserSpawnTime && bruisers.length < 8) {
  bruisers.push(new Bruiser(0.8));
  bruiserSpawnTime *= 2;
  bframe = 0;
}
bframe++;
}

//-----------------------------------------------------------------------------------
function mouseClicked() {
  player.shoot();
}
