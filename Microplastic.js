class Microplastic{

    constructor(){
        this.position=randomPoint()
        this.stuck= false;
        this.radius=4
        this.velocity =0
        this.initColor=[255,0,100]
        this.coreColor=255
    }

    walk(){
        this.velocity=p5.Vector.random2D();
        this.position.add(this.velocity)
        this.position = createVector(constrain(this.position.x,0,width),constrain(this.position.y,0,height))
    }

    checkStuck(others){
        //while(!stuck){

            for(let i=0;i<others.length;i++){
              let d= distSq(this.position,others[i].position)
              if(d<(this.radius*others[i].radius*4)){
                this.stuck=true;
                return true
              }
            }
            return false
    }

    show(){
        noStroke()
        if(this.stuck){
            fill(this.initColor[0],this.initColor[1],this.initColor[2])
        }else{
            fill(this.coreColor);
        }
        ellipse(this.position.x,this.position.y,this.radius*2,this.radius*2)
    }

    
}

function distSq(a,b){
    let dx=b.x-a.x
    let dy=b.y-a.y 
    return dx*dx + dy*dy
}

function randomPoint(){
    var i = floor(random(4));

    if(i===0){
        let x=random(width);
        return createVector(x,0);
    }
    else if(i==1){
        let x=random(width);
        return createVector(x,height)
    }
    else if(i==2){
        let y=random(height);
        return createVector(0,y)
    }
    else {
        let y=random(height);
        return createVector(width,y)
    }
}
