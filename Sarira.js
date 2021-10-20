class Sarira {

    constructor() {
        this.totalWeight
        this.birthday
        this.totalPlasticCount
        this.totalPlasticTypes
        this.totalWeight
        this.totalRadius
        this.age

        this.plasticList = []


    }

    initialize(coreSize) {
        this.plasticList.push(new Core(width / 2, height / 2, coreSize))
    }


    showPlastics() {
        for (let plastic of this.plasticList) {
            plastic.show();
        }
    }

    addPlastics(micro) {
        this.plasticList.push(micro)
    }
}