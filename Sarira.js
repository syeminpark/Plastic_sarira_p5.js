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

    initialize() {
        this.plasticList.push(new Core(width / 2, height / 2))
        this.plasticList[0].initialize()
    }

    showPlastics() {
        for (let plastic of this.plasticList) {
            plastic.show();
        }
    }

    addPlastics(micro) {
        this.plasticList.push(micro)
    }

    oscillate() {
        for (let i = 0; i < this.plasticList.length; i++) {
            this.plasticList[i].elastic()
        }
    }

    breathe() {

    }



}