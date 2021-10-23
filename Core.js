class Core extends Microplastic {
    constructor(xPosition, yPosition) {
        super()
        this.type = "PP"; // polypropylene was identified in baby
        this.dateCreated = 1951
        this.originalPurposeList = ["Syringe", "Chip Bag", "Specimen Bottle", "Plastic Chair", "Car Battery Case", "Instrument Panel", "Rug, Lunch Box", "Packing Tape", "Coffee Machine"]
        this.pastOwnersList = ["Mother", "Father", "Dog"]
        this.density = 0.92
        this.retrievedMethod = "Inheritance"
        this.dateRetrieved = "Before Birth"

        this.tensileStrength = 5440
        this.position = createVector(xPosition, yPosition)
        this.radius = 5

    }

    initialize() {
        super.initialize(this.pastOwnersList, this.retrievedMethod, this.dateRetrieved)
    }


    attract(floatingMicro) {
        // Calculate direction of force
        let force = p5.Vector.sub(this.position, floatingMicro.position);
        // Distance between objects
        let distance = force.mag();
        // Limiting the distance to eliminate "extreme" results for very close or very far objects
        distance = constrain(distance, 5, 20);

        // Calculate gravitional force magnitude
        let gForce = 2
        let strength = (gForce * this.mass * floatingMicro.mass) / (distance * distance);
        // Get force vector --> magnitude * direction
        force.setMag(strength);
        return force;
    }
}