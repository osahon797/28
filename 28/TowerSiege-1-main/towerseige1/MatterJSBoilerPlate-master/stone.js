class Stone{
    constructor(x, y, r) {
      var options = { 
      
        isStatic:false,
        density: 1, 
        frictionAir: 0.005
      };
  
      this.r=r
      this.body = Bodies.circle(x, y,r, options);
      World.add(world, this.body);
    }
  
    display() {
        var pos=this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipse(0, 0, this.r);
      pop();
    }
  }
  