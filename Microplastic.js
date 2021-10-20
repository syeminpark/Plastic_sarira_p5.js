class Microplastic {

    constructor() {
        this.position = randomPoint()
        this.stuck = false;
        this.velocity = createVector(1, 0)
        this.acceleration = createVector(0, 0)
        this.color = createVector(255, 0, 100)
        this.coreColor = 100
        this.mass = 4
        this.radius = this.mass * 8;
        this.velocity = createVector(0, 1)

    }
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    walk() {
        //this.velocity = p5.Vector.random2D();
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.position = createVector(constrain(this.position.x, 0, width), constrain(this.position.y, 0, height))
        this.acceleration.mult(0)
    }

    checkStuck(others) {
        //while(!stuck){

        for (let i = 0; i < others.length; i++) {
            let d = distSq(this.position, others[i].position)
            if (d < (this.radius * others[i].radius * 4)) {
                this.stuck = true;
                return true
            }
        }
        return false
    }

    show() {
        noStroke()
        if (this.stuck) {
            fill(this.coreColor)
        } else {
            fill(this.color.x, this.color.y, this.color.y);
        }
        ellipse(this.position.x, this.position.y, this.radius * 2)
    }

    elastic() {
        if (this.stuck) {
            this.tick = new Date().getTime() * 0.001 - round(new Date().getTime() * 0.001)
            this.position.add(Math.sin(PI * 2 * this.tick) * this.mass, Math.cos(PI * 2 * this.tick) * this.mass)
        }
    }


}

function distSq(a, b) {
    let dx = b.x - a.x
    let dy = b.y - a.y
    return dx * dx + dy * dy
}

function randomPoint() {
    var i = floor(random(4));

    if (i === 0) {
        let x = random(width);
        return createVector(x, 0);
    } else if (i == 1) {
        let x = random(width);
        return createVector(x, height)
    } else if (i == 2) {
        let y = random(height);
        return createVector(0, y)
    } else {
        let y = random(height);
        return createVector(width, y)
    }
}