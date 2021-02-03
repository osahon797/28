class Tree{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        
        }
        this.image = loadImage("sprites/tree.png");
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
        
        var pos=this.body.position;
        image(this.image,pos.x, pos.y, this.width, this.height);
    rectMode(CENTER)
    
    
       
      }
}