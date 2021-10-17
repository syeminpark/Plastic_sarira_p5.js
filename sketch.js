
let system
let convex;
//


function setup() {
  createCanvas(400, 400);
  system=new BodySystem(10,100)
  system.initialize()
  convex=new Convex(system.sarira)
}

function draw() {
  background(0);
  system.showPlastics()
  system.movePlastics()

  convex.init()
  convex.createConvexHull()
  convex.createNewPoints(system.sarira)

}

function mousePressed(){
  system.addFloatingPlastics()
}

function touchStarted() {
  system.addFloatingPlastics()
}
