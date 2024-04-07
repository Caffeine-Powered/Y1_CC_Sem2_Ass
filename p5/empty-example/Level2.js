


  
  function drawlevel2() {
    background(255, 255, 100);
    textSize(30);
    text(score, width / 2, 100);
  
    rectMode(CENTER);
    noCursor();
    player.draw();
    player.update();
    cursor.scale = 0.5;
    zombieSpawnTime = 150;
  
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
  
  
    
  
  
  }
  
  function mouseClicked() {
    player.shoot();
  
  }