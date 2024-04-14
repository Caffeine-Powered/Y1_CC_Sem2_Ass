
function drawlevel1() {               //draw level 1 function
  background(100, 100, 100);          //sets background colour to grey
  textSize(30);                       //sets text size to 30px
  text(score, width / 2, 100);        //draws score variable in top center of canvas
  crosshair.visable = true;           //sets crosshair sprite to be visable
  rectMode(CENTER);                   //draws rectangles from center
  noCursor();                         //hides mouse cursor
  player.draw();                      //draws player on canvas
  player.update();                    //updates player on canvas
  crosshair.scale = 0.5;              //sets crosshair scale to 1/2
  gun.scale = 0.5;                    //sets gun sprite scale to 1/2
  


  crosshair.position.x = mouseX;         //sets crosshair x postition to mouse x position
  crosshair.position.y = mouseY;         //sets crosshair y postition to mouse y position

  for (let i = zombies.length - 1; i >= 0; i--) { //
    zombies[i].draw();
    zombies[i].update();

    if (zombies[i].ateYou()) {            //if zombie touches player
      restart();                          //restart function
      break;                              //breaks from if statement
    }

    if (player.hasShot(zombies[i])) {     //if the player has shot a zombie
      score++;                            //increment score
      zombieDead.play();                  //play zombie death sound
      zombies.splice(i, 1);               //remove zombie from array
      console.log(score);                 //draw score in console
    }

  }

  if (zframe >= zombieSpawnTime && zombies.length < 8) {
    zombies.push(new Zombie(1.5));
    zombieSpawnTime *= 0.6;
    zframe = 0;
  }
  zframe++;


  //-----------------------------------------------------------------------------------

  for (let i = chasers.length - 1; i >= 0; i--) {
    chasers[i].draw();
    chasers[i].update();

    if (chasers[i].ateYou()) { // add this
      restart();
      break;
    }
    if (player.hasShot(chasers[i])) {
      score = score + 2;
      chaserDead.play();
      chasers.splice(i, 1);
      console.log(score);
    }

  }

  if (bframe >= chaserSpawnTime && chasers.length < 2) {
    chasers.push(new Chaser(2.5));
    chaserSpawnTime *= 0.9;
    bframe = 0;
  }
  bframe++;
}

//-----------------------------------------------------------------------------------
function mouseClicked() {   //function for if mouse is clicked
  player.shoot();           //perform shoot function in Player.js
}
