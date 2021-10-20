class Core extends Microplastic {
    constructor(xPosition, yPosition, radius) {
        super(xPosition, yPosition)
        this.position = createVector(xPosition, yPosition)
        this.stuck = true
        this.radius = radius

        this.previousOwner = 'Mother'
        this.type = "Plastic Sarira Seed";

    }
}