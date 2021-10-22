let system

function setup() {
  createCanvas(400, 400);
  system = new BodySystem()

}

function draw() {
  background(0);

  system.moveFloatingPlastics()
  system.show()

  showFrameRate()

}