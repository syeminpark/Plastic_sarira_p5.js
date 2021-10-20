class Microplastic {

    constructor() {
        this.position = randomPoint()

        this.velocity = createVector(1, 0)
        this.acceleration = createVector(0, 0)

        this.color = createVector(255, 0, 100)

        //nano plastic size
        this.radius = random(0.1, 5)
        //색깔. 랜덤 
        this.color;
        //무게
        this.mass;

        this.material

        //이때까지 가지고 있던 생물들과 먹힌 시기, 보유 시기, 주인의 사망시기 
        this.history = {

            OwnerList: [],
            holdTime: [],
            deathDate: []
        }
        this.origianlPurpose;
    }

    initialize() {
        this.orignalPurpose = this.originalPurposeList[int(random(0, this.originalPurposeList.length))]
        this.birthday = int(random(this.birthday, 2021));
        this.color = createVector(random(255), random(255), random(255));
        this.mass = this.density * this.radius * 2
        //this.mass = this.density * (pow(this.radius, 3) * PI * 4 / 3)
        this.tensileStrength = map(this.tensileStrength, 4400, 12400, 1, 10)
    }

    addOwnerInfo(currentOwnerName, holdTime) {
        this.history.OwnerList.push(currentOwnerName)
        this.history.holdTime.push(holdTime)
        this.history.deathDate.push(holdTime)
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
        noStroke()
        fill(this.color.x, this.color.y, this.color.y);
        ellipse(this.position.x, this.position.y, this.radius * 2)
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    walk() {
        //this.velocity = p5.Vector.random2D();
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        //this.position = createVector(constrain(this.position.x, 0, width), constrain(this.position.y, 0, height))
        this.acceleration.mult(0)
    }


    // elastic() {
    //     if (this.stuck) {
    //         this.tick = new Date().getTime() * 0.001 - round(new Date().getTime() * 0.001)
    //         this.position.add(Math.sin(PI * 2 * this.tick) / this.tensileStrength, Math.cos(PI * 2 * this.tick) / this.tensileStrength)
    //     }
    // }


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


// function distSq(a, b) {
//     let dx = b.x - a.x
//     let dy = b.y - a.y
//     return dx * dx + dy * dy
// }