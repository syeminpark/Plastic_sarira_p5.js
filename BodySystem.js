//사리, convex 클래스, 그리고 floatingPlastics 배열을 통제.
class BodySystem {
  constructor() {
    this.floatingPlasticsList = []

    this.sarira = new Sarira()
    this.iterm = new Terminal()
  }

  addFloatingPlastics() {
    //this should change to specific mircoplastic type
    //also could be an outer sarira
    let choose = int(random(0, 2))
    let pe;
    if (choose) {
      pe = new PE()
    } else {
      pe = new PP()
    }
    pe.initialize()
    this.floatingPlasticsList.push(pe)
  }

  moveFloatingPlastics() {

    for (let [index, micro] of this.floatingPlasticsList.entries()) {
      let force = this.sarira.plasticList[0].attract(micro);
      micro.applyForce(force);
      micro.walk()

      if (micro.checkStuck(this.sarira.plasticList)) {
        this.sarira.addPlastics(micro)
        this.floatingPlasticsList.splice(index, 1);
      }
    }
    this.sarira.oscillate();
  }

  show() {
    //show plastics  
    for (let plastics of this.floatingPlasticsList) {
      plastics.show();
    }

    this.sarira.operateConvex()
    this.sarira.showPlastics();

    //showTerminal
    this.iterm.show(this.sarira.obtainedDataList)
  }




}