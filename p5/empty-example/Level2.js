
function drawlevel2() {
  background(bg2);

  crosshair.visable = true;
  rectMode(CENTER);
  noCursor();
  player.draw();
  player.update();
  crosshair.scale = 0.5;
  gun.scale = 0.5;
  zombieSpawnTime = 300;
  chaserSpawnTime = 300;

  crosshair.position.x = mouseX;
  crosshair.position.y = mouseY;

  for (let i = zombies.length - 1; i >= 0; i--) {
    zombies[i].draw();
    zombies[i].update();

    if (zombies[i].ateYou()) { // add this
      restart();
      break;
    }

    if (player.hasShot(zombies[i])) {
      score++;
      zombies.splice(i, 1);
      console.log(score);
    }

  }

  if (zframe >= zombieSpawnTime && zombies.length < 12) {
    zombies.push(new Zombie(1.5));
    zombieSpawnTime *= 0.95;
    zframe = 0;
  }
  zframe++;


  //-----------------------------------------------------------------------------------

  for (let i = chasers.length - 1; i >= 0; i--) {
    chasers[i].draw();
    chasers[i].update();

    if (chasers[i].ateYou()) {
      restart();
      break;
    }
    if (player.hasShot(chasers[i])) {
      score = score + 2;

      chasers.splice(i, 1);
      console.log(score);
    }

  }

  if (bframe >= chaserSpawnTime && chasers.length < 5) {
    chasers.push(new Chaser(2.5));
    chaserSpawnTime *= 0.9;
    bframe = 0;
  }
  bframe++;

  image(HUD, 0, 0);
  textSize(30);
  fill(255); 
  text("LEVEL: 2", 218, 42);
  if (score >= 100) {
    textSize(25)
  }else {
        textSize(30);
      }
      text(score, 504, 43);        //draws score variable in top center of canvas 

    }
    

//-----------------------------------------------------------------------------------
function mouseClicked() {
  player.shoot();
}
