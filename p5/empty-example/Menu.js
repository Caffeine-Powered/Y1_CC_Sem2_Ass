function Menu() {                                           //menu function
    background(MM);                                        //sets background to grey
    rectMode(CENTER);                                       //draws rectangle from corner
    textSize(30);                                           //sets text size to 30
    textAlign(CENTER);
    cursor(ARROW);                                          //sets cursor to arrow
    crosshair.scale = 0;                                    //sets crosshair sprite scale to 0 (hiding it)
    gun.scale = 0;                                          //sets gun sprite scale to 0 (hiding it)


    fill(0, 255, 0);                                          //sets colour to green
    rect(width / 2, 595, 400, 80);                          //draws rectangle on top half of canvas
    fill(255, 0, 0);                                          //sets colour to red
    rect(width / 2, 795, 400, 80);                 //draws rectangle on bottom half of canvas
    fill(0);                                                //set colour to black
    text("Press 'ENTER' To Play", width / 2, 600);                           //draws text in top center of canvas
    text("Press 'ESC' To Quit", width / 2, 800);                           //draws text in bottom center of canvas
    image(ctrls,0,0);
}

function keyPressed() {
    if (level = 1)
    if (keyCode === 13) {           //if mouse is pressed in the top half of canvas
        level = 1;                                          //sets level to 1
    }
    if (keyCode === 27) {
        remove();
    }                              
}

