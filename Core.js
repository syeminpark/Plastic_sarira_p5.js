class Core extends Microplastic {
    constructor(xPosition, yPosition, radius, mass) {
        super(xPosition, yPosition)
        this.position = createVector(xPosition, yPosition)
        this.stuck = true
        this.radius = radius
        this.mass = mass
        this.G = 1;
        this.previousOwner = 'Mother'
        this.type = "Plastic Sarira Seed";
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