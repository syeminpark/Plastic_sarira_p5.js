class Microplastic {

    constructor() {
        this.position = randomPoint()

        this.velocity = createVector(1, 0)
        this.acceleration = createVector(0, 0)

        this.color = createVector(255, 0, 100)

        this.phase = random()

        //nano plastic size
        this.radius = random(0.1, 5)


    }

    initialize(pastOwnersList, retrievedMethod, dateRetrieved) {

        this.pastOwnersList = pastOwnersList || "Empty"
        this.retrievedMethod = retrievedMethod || "Empty"
        this.dateRetrieved = dateRetrieved || "Empty"

        this.pastOwnersList = this.pastOwnersList.toString()

        this.originalPurpose = this.originalPurposeList[int(random(0, this.originalPurposeList.length))]

        this.dateCreated = JSON.stringify(int(random(this.dateCreated, 2021)));
        this.color = createVector(random(255), random(255), random(255));
        this.mass = this.density * this.radius * 2

        this.tensileStrength = map(this.tensileStrength, 4400, 12400, 5, 10)
        this.passDataList = [this.type, this.dateCreated, this.originalPurpose, this.pastOwnersList, this.retrievedMethod, this.dateRetrieved]


    }

    checkStuck(others) {
        //while(!stuck){

        for (let i = 0; i < others.length; i++) {
            // let d = distSq(this.position, others[i].position)
            let d2 = dist(this.position.x, this.position.y, others[i].position.x, others[i].position.y)
            //if (d < (this.radius * others[i].radius * 4)) {
            //   this.stuck = true;
            //   return true
            //}

            if (d2 < (this.radius + others[i].radius + (this.tensileStrength + others[i].tensileStrength) / 2)) {
                this.stuck = true;
                return true
            }
        }
        return false

    }
    show() {
        push()
        noStroke()
        fill(this.color.x, this.color.y, this.color.y);
        ellipse(this.position.x, this.position.y, this.radius * 2)
        pop()
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    walk() {
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        //this.position = createVector(constrain(this.position.x, 0, width), constrain(this.position.y, 0, height))
        this.acceleration.mult(0)
    }


    elastic() {
        this.tick = new Date().getTime() * 0.001 - round(new Date().getTime() * 0.001) + this.phase
        this.position.add(Math.sin(PI * 2 * this.tick) / this.tensileStrength, Math.cos(PI * 2 * this.tick) / this.tensileStrength)
    }
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