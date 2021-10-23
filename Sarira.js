class Sarira {

    constructor() {

        this.plasticList = []
        this.plasticList.push(new Core(width / 2, height / 2))
        this.plasticList[0].initialize()
        this.convex = new Convex(this.plasticList)
        this.obtainedDataList = new Array(5)
    }

    initialize() {

        for (let i = 0; i < 6; i++) {
            this.obtainedDataList[i] = new Array(0)
        }
        this.addMetaData()
    }

    addPlastics(micro) {
        this.plasticList.push(micro)
        this.addMetaData();
    }

    addMetaData() {

        //iterate over every (new) plastic inside sarira. 
        let plastic = this.plasticList[this.plasticList.length - 1]
        //iterate over every metadata for plastic 
        for (let [index, dataElement] of plastic.passDataList.entries()) {
            this.obtainedDataList[index].push(dataElement)
        }

    }




    oscillate() {
        for (let i = 0; i < this.plasticList.length; i++) {
            this.plasticList[i].elastic()
        }
    }

    showPlastics() {
        for (let plastic of this.plasticList) {
            plastic.show();
        }
    }

    operateConvex() {
        this.convex.init()
        this.convex.createConvexHull()
        this.convex.createNewPoints(this.plasticList)
    }

}