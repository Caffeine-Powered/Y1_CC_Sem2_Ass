


function Menu() {
    createCanvas(800, 800);
    background(100);
    textSize(30);
    cursor.scale = 0;
    gun.scale = 0;

    fill(0,255,0);
    playButt = rect(0, 0, width, height / 2);
    fill(255,0,0);
    quitButt = rect(0, height / 2, width, height / 2);
    fill(0);
    text("Play", width / 2, 200);
    text("Quit", width / 2, 500);


    if ((mouseIsPressed) && mouseY < height/2)  {
        level = 1;
    } else if ((mouseIsPressed) && mouseY > height/2){
        remove();
    }




}
