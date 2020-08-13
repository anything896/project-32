class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angel=this.body.angel
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        angel(rotate)
        rect(0,0,this.width,this.height)
        pop();
      }
}