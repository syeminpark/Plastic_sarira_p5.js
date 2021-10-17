class BodySystem {
    constructor(coreSize,iterations) {
        this.floatingPlastics = [];
        this.sarira= []

        this.coreSize=coreSize
        this.iterations=iterations
    }
    //create Core
    initialize(){
        this.sarira.push(new Core(width / 2, height / 2, this.coreSize))
    }

    addFloatingPlastics(){
        //this should change to specific mircoplastic type
        //also could be an outer sarira
        this.floatingPlastics.push(new Microplastic())
    }

    showPlastics(){ 
        
    for (let plastics of this.floatingPlastics) {
        plastics.show();
      }
     for (let sariraPlastics of this.sarira) {
        sariraPlastics.show();
      }
      
    }
    movePlastics(){
        for (let i = 0; i < this.iterations; i++) {
            for (let [index,micro] of this.floatingPlastics.entries()) {
                micro.walk()
              if (micro.checkStuck(this.sarira)) {
                this.sarira.push(micro)
                this.floatingPlastics.splice(index, 1);
              }
            }
          }
        }


}