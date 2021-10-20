let system

function setup() {
  createCanvas(400, 400);
  system = new BodySystem(1)
  system.initialize(10, 100)


}

function draw() {
  background(0);
  system.showPlastics()
  system.movePlastics()
  system.operateConvex()

}

function mousePressed() {
  system.addFloatingPlastics()
}

function touchStarted() {
  system.addFloatingPlastics()
}