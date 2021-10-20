//사리, convex 클래스, 그리고 floatingPlastics 배열을 통제.
class BodySystem {
  constructor(iterations) {
    this.floatingPlastics = []
    this.iterations = iterations

  }

  //create Core
  initialize(coreSize) {
    this.sarira = new Sarira()
    this.sarira.initialize(coreSize);
    this.convex = new Convex(this.sarira.plasticList)

  }

  addFloatingPlastics() {
    //this should change to specific mircoplastic type
    //also could be an outer sarira
    this.floatingPlastics.push(new PE())

  }

  showPlastics() {

    for (let plastics of this.floatingPlastics) {
      plastics.show();
    }
    this.sarira.showPlastics();
  }
  movePlastics() {
    for (let i = 0; i < this.iterations; i++) {
      for (let [index, micro] of this.floatingPlastics.entries()) {
        micro.walk()
        if (micro.checkStuck(this.sarira.plasticList)) {
          this.sarira.addPlastics(micro)
          this.floatingPlastics.splice(index, 1);
        }
      }
    }
  }
  operateConvex() {
    this.convex.init()
    this.convex.createConvexHull()
    this.convex.createNewPoints(this.sarira.plasticList)
  }


}