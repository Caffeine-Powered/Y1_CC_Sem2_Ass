function Menu() {                                           //menu function
    background(MM);                                        //sets background to grey
    rectMode(CENTER);                                       //draws rectangle from corner
    textSize(30);                                           //sets text size to 30
    textAlign(CENTER);
    cursor(ARROW);                                          //sets cursor to arrow
    crosshair.scale = 0;                                    //sets crosshair sprite scale to 0 (hiding it)
    gun.scale = 0;                                          //sets gun sprite scale to 0 (hiding it)


    fill(0, 100);                                          //sets colour to green
    rect(width / 2, 595, 400, 80);                          //draws rectangle on top half of canvas
    fill(0, 100);                                          //sets colour to red
    rect(width / 2, 795, 400, 80);                 //draws rectangle on bottom half of canvas
    fill(0);                                                //set colour to black
    text("Press 'ENTER' To Play", width / 2, 600);                           //draws text in top center of canvas
    text("Press 'ESC' To Quit", width / 2, 800);                           //draws text in bottom center of canvas
    image(ctrls, 0, 0);

        if (keyIsDown(13)) {
            level = 1;
            score = 0;
        } else {
            if (keyIsDown(27)) {
                bgMusic.stop();
                remove();
            }
        }

    }

