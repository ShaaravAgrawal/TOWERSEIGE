class stone{
    constructor(x, y, radius) {
        var options = {
                     
        }
        this.body = Bodies.circle(x, y, radius , options);
        this.radius = radius;
       this.image = loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius, this.radius);
        pop();
      }
}
