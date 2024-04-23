function drawgameover(){                                    //game over function
    background(GO);                                         //sets background to game over image
    crosshair.scale = 0;                                    //sets crosshair sprite scale to 0 (hiding it)
    gun.scale = 0;                                          //sets the gun sprite scale to 0 (hiding it)
    textAlign(CENTER);                                      //draws text from the center
    fill(255);                                              //sets fill colour to white
    text("Your Score Was: "+score,width/2,650);             //draws text with the score variable in the center of the screen
    text("Press 'Enter' To Restart",width/2, 800);          //draws text in the center of the screen lower down
    text("Press 'ESC' To Quit",width/2, 900);               //draws text in the center of the screen at the bottom

    if (keyIsDown(13)) {                                    //if the ENTER key is pressed (detected down)
        level = 1;                                          //sets level to 1
        score = 0;                                          //score variable is reset to 0
    } else {                                                //else
        if (keyIsDown(27)) {                                //if the ESCAPE key us pressed (detected down)
            bgMusic.stop();                                 //stops background music
            remove();                                       //closes the program
        }
    }
}                                         

