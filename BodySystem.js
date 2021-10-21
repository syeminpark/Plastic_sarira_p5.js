//사리, convex 클래스, 그리고 floatingPlastics 배열을 통제.
class BodySystem {
  constructor() {
    this.floatingPlastics = []
    this.sarira = []


  }

  //create Core
  initialize(coreSize) {
    this.sarira = new Sarira()
    this.sarira.initialize();
    this.convex = new Convex(this.sarira.plasticList)
  }

  addFloatingPlastics() {
    //this should change to specific mircoplastic type
    //also could be an outer sarira
    let choose = int(random(0, 1))
    let pe;
    if (choose) {
      pe = new PE()
    } else {
      pe = new PP()
    }
    pe.initialize()
    this.floatingPlastics.push(pe)
  }

  showPlastics() {
    for (let plastics of this.floatingPlastics) {
      plastics.show();
    }
    this.sarira.showPlastics();
  }
  movePlastics() {

    for (let [index, micro] of this.floatingPlastics.entries()) {
      this.attractPlastics(micro);

      if (micro.checkStuck(this.sarira.plasticList)) {
        this.sarira.addPlastics(micro)
        this.floatingPlastics.splice(index, 1);
      }
    }
    this.sarira.oscillate();
  }

  attractPlastics(micro) {
    let force = this.sarira.plasticList[0].attract(micro);
    micro.applyForce(force);
    micro.walk()

  }
  operateConvex() {
    this.convex.init()
    this.convex.createConvexHull()
    this.convex.createNewPoints(this.sarira.plasticList)
  }


}