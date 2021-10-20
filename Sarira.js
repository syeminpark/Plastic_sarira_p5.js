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

    initialize(coreSize, mass) {
        this.plasticList.push(new Core(width / 2, height / 2, coreSize, mass))
    }


    showPlastics() {
        for (let plastic of this.plasticList) {
            plastic.show();
        }
    }

    oscillate() {
        for (let i = 1; i < this.plasticList.length; i++) {
            this.plasticList[i].elastic()
        }
    }


    addPlastics(micro) {
        this.plasticList.push(micro)
    }
}