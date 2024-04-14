
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

  for (let i = zombies.length - 1; i >= 0; i--) { //i = zombie length -1, if i is equal or greater than 0, decrement i by 1
    zombies[i].draw();                            //draw zombies
    zombies[i].update();                          //update zombies

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

  if (zframe >= zombieSpawnTime && zombies.length < 8) {  //if the zombie  frame count is equal or greater than the zombie spawn time and there is less than 8 zombies in array
    zombies.push(new Zombie(1.5));                        //add a new zombie with speed set to 1.5
    zombieSpawnTime *= 0.6;                               //multiply zombie spawn time by 0.6
    zframe = 0;                                           //reset zombie frame count
  }
  zframe++;                                               //increment zombie frame count


  //-----------------------------------------------------------------------------------

  for (let i = chasers.length - 1; i >= 0; i--) { //i = chaser length -1, if i is equal or greater than 0, decrement i by 1
    chasers[i].draw();                            //draw chaser
    chasers[i].update();                          //update chaser

    if (chasers[i].ateYou()) {                    //if chaser touches you
      restart();                                  //restart function
      break;                                      //break
    }
    if (player.hasShot(chasers[i])) { //if the player has shot a chaser
      score = score + 2;              //increment score by 2
      chaserDead.play();              //play chaser death sound
      chasers.splice(i, 1);           //remove chaser from array
      console.log(score);             //draw score in console
    }

  }

  if (bframe >= chaserSpawnTime && chasers.length < 2) {  //if the chaser frame count is equal or greater than the chaser spawn time and there is less than 8 chaser in array
    chasers.push(new Chaser(2.5));                        //add a new chaser with speed set to 2.5
    chaserSpawnTime *= 0.9;                               //multiply chaser spawn time by 0.9
    bframe = 0;                                           //reset chaser frame count
  }
  bframe++;                                               //increment chaser frame count
}

//-----------------------------------------------------------------------------------
function mouseClicked() {   //function for if mouse is clicked
  player.shoot();           //perform shoot function in Player.js
}
