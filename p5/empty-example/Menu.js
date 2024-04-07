
function Menu() {
    createCanvas(800, 800);
    background(100);
    textSize(30);
    cursor.visable = false;
    text("Play",width/2,200);
    text("Quit",width/2,500);
    if (mouseIsPressed) {
        level = 1;
    }




}
