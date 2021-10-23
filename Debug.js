function mousePressed() {

    if (!system.iterm.isWithinBarRange()) {
        system.addFloatingPlastics()
    }

}

function mouseDragged() {
    if (system.iterm.isWithinBarRange()) {
        system.iterm.moveBar()
    }
}

function touchStarted() {
    mousePressed()
}


function showFrameRate() {
    textSize(12);
    push()
    fill(255)
    text("FrameRate: ", 10, 30)
    text(int(frameRate()), 10, 50)
    pop()
}