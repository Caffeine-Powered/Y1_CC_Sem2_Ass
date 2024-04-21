
function drawlevel2() {
  background(bg2);
  crosshair.visable = true;
  rectMode(CENTER);
  noCursor();
  player.draw();
  player.update();
  crosshair.scale = 0.5;
  gun.scale = 0.5;

  crosshair.position.x = mouseX;
  crosshair.position.y = mouseY;

  for (let i = zombies.length - 1; i >= 0; i--) {
    zombies[i].draw();
    zombies[i].update();

    if (zombies[i].ateYou()) {            //if zombie touches player
      restart();                          //restart function
      break;                              //breaks from if statement
    }

    if (player.hasShot(zombies[i])) {
      score++;
      zombieDead.play();                  //play zombie death sound
      zombieGrowl.play();
      zombies.splice(i, 1);
      console.log(score);
    }

  }

  if (zframe >= zombieSpawnTime && zombies.length < 10) {
    zombies.push(new Zombie(2));
    zombieSpawnTime *= 0.7;
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
      chaserDead.play();              //play chaser death sound
      zombieGrowl.play();
      chasers.splice(i, 1);
      console.log(score);
    }

  }

  if (bframe >= chaserSpawnTime && chasers.length < 4) {
    chasers.push(new Chaser(2.5));
    chaserSpawnTime *= 0.7;
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


