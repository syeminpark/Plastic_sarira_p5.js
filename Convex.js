class Convex {

  constructor(list) {
    this.pointsList = _.cloneDeep(list)
    this.vertexs;
    this.startingVertex;
    this.currentVertex;
    this.nextVertex;
    this.finished;
  }


  init() {
    //cannot create under 2 points.
    if (this.pointsList.length < 2) {
      this.finished = true;
      return
    }
    //else
    this.vertexs = []
    this.startingVertex = this.getStartingVertex();
    this.currentVertex = this.startingVertex
    this.nextVertex = null;
    this.finished = false;

  }

  getStartingVertex() {
    let sv = null;
    for (let p of this.pointsList) {
      //give it first index when first statrs
      if (!sv) {
        sv = p.position
        continue;
      }
      //compare and update sv if new value is further left
      if (p.position.x <= sv.x) {
        sv = p.position
      }
    }
    return sv // sv is a vertex on the far left.
  }

  createConvexHull() {
    while (!this.finished) {

      this.nextVertex = this.getNextVertex(this.currentVertex);
      this.vertexs.push(this.nextVertex);
      this.drawLine(this.currentVertex, this.nextVertex);
      this.currentVertex = this.nextVertex;
      if (this.currentVertex === this.startingVertex) {
        this.finished = true;
      }
    }
  }
  getNextVertex(current) {
    var next;
    for (let p of this.pointsList) {
      if (p.position === current) {
        continue;
      }
      if (!next) {
        next = p.position;
        continue;
      }
      if (this.onTheLeftSide(current, next, p.position) && !this.isVertex(p.position)) {
        next = p.position;
      }
    }
    return next;
  }

  onTheLeftSide(c, n, p) {
    let val = (n.x - c.x) * (p.y - c.y) - (n.y - c.y) * (p.x - c.x);
    return val < 0;
  }

  isVertex(p) {
    if (!this.vertexs) {
      return false;
    }

    for (let v of this.vertexs) {
      if (v === p) {
        return true;
      }
    }
    return false;
  }
  drawLine(v1, v2) {
    push()
    stroke(255, 255, 255, 255);
    strokeWeight(1);
    line(v1.x, v1.y, v2.x, v2.y);
    pop()
  }


  createNewPoints(list) {
    this.pointsList = _.cloneDeep(list)
  }


}