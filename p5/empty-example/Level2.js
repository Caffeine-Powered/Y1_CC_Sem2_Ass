


  
  function drawlevel2() {
    background(255, 255, 100);
    textSize(30);
    text(score, width / 2, 100);
  
    rectMode(CENTER);
    noCursor();
    player.draw();
    player.update();
    cursor.scale = 0.5;

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
  
    if (frame >= zombieSpawnTime) {
      zombies.push(new Zombie(2));
      console.log(zombies);
      zombieSpawnTime *= 0.95;
      frame = 0;
    }
    frame++;
    
  }
  
  function mouseClicked() {
    player.shoot();
  
  }