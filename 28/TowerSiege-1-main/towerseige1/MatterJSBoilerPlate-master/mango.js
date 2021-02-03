class Mango {
    constructor(x, y, width, height, angle) {
      var options = { 
      
        isStatic:true,
        density: 1, 
        restitution:0,
        friction:1,
        frictionAir: 0.005
      };
      this.image = loadImage("sprites/mango.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
  
    display() {
        var pos=this.body.position;
      var angle = this.body.angle;
      image(this.image,pos.x, pos.y, this.width, this.height);
      push();
      rotate(angle);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  