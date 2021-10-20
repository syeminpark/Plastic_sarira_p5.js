class Core extends Microplastic {
    constructor(xPosition, yPosition) {
        super()
        this.type = "PP(polypropylene)"; // polypropylene was identified in baby
        this.originalPurposeList = ["Syringe", "Chip Bag", "Specimen Bottle", "Plastic Chair", "Car Battery Case", "Instrument Panel", "Rug, Lunch Box", "Packing Tape", "Coffee Machine"]
        this.birthday = 1951
        this.density = 0.92
        this.tensileStrength = 5440
        this.position = createVector(xPosition, yPosition)
        this.G = 2
        this.previousOwner = 'Mother'
        this.radius = 10

    }

    initialize() {
        super.initialize()
        this.color = createVector(255, 255, 255)
    }

    attract(floatingMicro) {
        // Calculate direction of force
        let force = p5.Vector.sub(this.position, floatingMicro.position);
        // Distance between objects
        let distance = force.mag();
        // Limiting the distance to eliminate "extreme" results for very close or very far objects
        distance = constrain(distance, 5, 20);

        // Calculate gravitional force magnitude
        let strength = (this.G * this.mass * floatingMicro.mass) / (distance * distance);
        // Get force vector --> magnitude * direction
        force.setMag(strength);
        return force;
    }
}