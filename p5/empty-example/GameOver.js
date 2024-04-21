function drawgameover(){
    background(GO);
    crosshair.scale = 0;                                    //sets crosshair sprite scale to 0 (hiding it)
    gun.scale = 0;   
    textAlign(CENTER);
    fill(255);
    text("Your Score Was: "+score,width/2,650);
    text("Press 'Enter' To Restart",width/2, 800);
    text("Press 'ESC' To Quit",width/2, 900);

    if (keyIsDown(13)) {
        level = 1;
        score = 0;
    } else {
        if (keyIsDown(27)) {
            bgMusic.stop();
            remove();
        }
    }
}                                          //menu function

