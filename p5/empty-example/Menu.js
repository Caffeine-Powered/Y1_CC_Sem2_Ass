


function Menu() {                                           //menu function
    createCanvas(800, 800);                                 //draws and 800x800 canvas
    background(100);                                        //sets background to grey
    rectMode(CORNER);                                       //draws rectangle from corner
    textSize(30);                                           //sets text size to 30
    cursor(ARROW);                                          //sets cursor to arrow
    crosshair.scale = 0;                                    //sets crosshair sprite scale to 0 (hiding it)
    gun.scale = 0;                                          //sets gun sprite scale to 0 (hiding it)


    fill(0,255,0);                                          //sets colour to green
    rect(0, 0, width, height / 2);                          //draws rectangle on top half of canvas
    fill(255,0,0);                                          //sets colour to red
    rect(0, height / 2, width, height / 2);                 //draws rectangle on bottom half of canvas
    fill(0);                                                //set colour to black
    text("Play", width / 2, 200);                           //draws text in top center of canvas
    text("Quit", width / 2, 500);                           //draws text in bottom center of canvas


    if ((mouseIsPressed) && mouseY < height/2)  {           //if mouse is pressed in the top half of canvas
        level = 1;                                          //sets level to 1
    } else if ((mouseIsPressed) && mouseY > height/2){      //if mouse is pressed in bottom half of canvas
        remove();                                           //closes game
    }




}
