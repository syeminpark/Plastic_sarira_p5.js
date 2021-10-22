let system

function setup() {
  createCanvas(400, 400);
  system = new BodySystem()
  system.initialize()



}

function draw() {
  background(0);
  system.showPlastics()
  system.movePlastics()
  system.operateConvex()
  system.showData()

  showFrameRate()

}