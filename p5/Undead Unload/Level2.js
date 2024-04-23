
function drawlevel2() {//draw level 1 function
  background(bg2);
  crosshair.visable = true;//sets crosshair sprite to be visable
  rectMode(CENTER);//draws rectangles from center
  noCursor();//hides mouse cursor
  player.draw();//draws player on canvas
  player.update();//updates player on canvas
  crosshair.scale = 0.5;//sets crosshair scale to 1/2
  gun.scale = 0.5;//sets gun sprite scale to 1/2

  crosshair.position.x = mouseX;//sets crosshair x postition to mouse x position
  crosshair.position.y = mouseY;         //sets crosshair y postition to mouse y position


  for (let i = zombies.length - 1; i >= 0; i--) {//i = zombie length -1, if i is equal or greater than 0, decrement i by 1
    zombies[i].draw();//draw zombies
    zombies[i].update();//update zombies

    if (zombies[i].ateYou()) {            //if zombie touches player
      restart();                          //restart function
      break;                              //breaks from if statement
    }

    if (player.hasShot(zombies[i])) {//if the player has shot a zombie
      score++; //increment score
      zombieDead.play();                  //play zombie death sound
      zombieGrowl.play();                 //play zombie growl sound
      zombies.splice(i, 1); //remove zombie from array

    }

  }

  if (zframe >= zombieSpawnTime && zombies.length < 10) {//if the zombie  frame count is equal or greater than the zombie spawn time and there is less than 10 zombies in array
    zombies.push(new Zombie(2));//add a new zombie with speed set to 2
    zombieSpawnTime *= 0.7; //multiply zombie spawn time by 0.7
    zframe = 0; //reset zombie frame count
  }
  zframe++;//increment zombie frame count


  //-----------------------------------------------------------------------------------

  for (let i = chasers.length - 1; i >= 0; i--) {//i = chaser length -1, if i is equal or greater than 0, decrement i by 1
    chasers[i].draw();//draw chaser
    chasers[i].update();//update chaser

    if (chasers[i].ateYou()) {//if chaser touches you
      restart(); //restart function
      break; //break
    }
    if (player.hasShot(chasers[i])) {//if the player has shot a chaser
      score = score + 2;//increment score by 2
      chaserDead.play();              //play chaser death sound
      zombieGrowl.play();//play zombie growl sound
      chasers.splice(i, 1);//remove chaser from array

    }

  }

  if (cframe >= chaserSpawnTime && chasers.length < 3) {//if the chaser frame count is equal or greater than the chaser spawn time and there is less than 3 chaser in array
    chasers.push(new Chaser(2.5));//add a new chaser with speed set to 2.5
    chaserSpawnTime *= 0.7;//multiply chaser spawn time by 0.7
    cframe = 0;//reset chaser frame count
  }
  cframe++;//increment chaser frame count

  //-----------------------------------------------------------------------
  if (score >= 100) {                                 //if the score variable is equal to or greater than 100
    for (let i = bruiser.length - 1; i >= 0; i--) {   //i = bruiser length -1, if i is equal or greater than 0, decrement i by 1
      bruiser[i].draw();      //draw bruiser
      bruiser[i].update();   //update bruiser

      if (bruiser[i].ateYou()) { //if bruiser touches you
        restart();                //restart function
        break;                    //break if loop
      }
      if (player.hasShot(bruiser[i])) { //if the player has shot a bruiser
        score = score + 2;              //increment score by 2
        chaserDead.play();              //play chaser death sound
        zombieGrowl.play();             //play zombie growl sound
        bruiser.splice(i, 1);           //remove bruiser from array

      }

    }

    if (bframe >= bruiserSpawnTime && bruiser.length < 3) { //if the buiser frame count is equal or greater than the bruiser spawn time and there is less than 3 bruiser in array
      bruiser.push(new Bruiser(1));                         //add a new bruiser with speed set to 1
      bruiserSpawnTime *= 0.7;                              //multiply bruiser spawn time by 0.7
      bframe = 0;                                         //reset bruiser frame count
    }
    bframe++;                                           //increment bruiser frame count
  }

  //-----------------------------------------------------------------------

  image(HUD, 0, 0);               //draws HUD on canvas
  textSize(30);                   //sets text size to 30px
  fill(255);                      //sets text size to 30px
  text("LEVEL: 2", 218, 42);      //draws text in top left of screen
  if (score >= 100) {             //if the score variable is equal or greater than 100
    textSize(25)                  //change the text size to 25px
  } else {                        //else
    textSize(30);                 //text size set to 30px
  }
  text(score, 504, 43);        //draws score variable in top center of canvas 

}


//-----------------------------------------------------------------------------------
function mouseClicked() { //function for if mouse is clicked
  player.shoot();         //perform shoot function in Player.js
}


