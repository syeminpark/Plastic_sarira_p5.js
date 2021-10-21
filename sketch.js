let system

function setup() {
  createCanvas(400, 400);
  system = new BodySystem(1)
  //coreSize, Mass
  system.initialize()

}

function draw() {
  background(0);
  system.showPlastics()
  system.movePlastics()
  system.operateConvex()
  showFrameRate()

}

function mousePressed() {
  system.addFloatingPlastics()
}

function touchStarted() {
  system.addFloatingPlastics()
}

function showFrameRate() {
  textSize(12);
  push()
  stroke(255)
  noFill()
  text("FrameRate: ", 10, 30)
  text(int(frameRate()), 10, 50)
  pop()
}