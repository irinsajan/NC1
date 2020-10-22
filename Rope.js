class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x: offsetX,y: offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(4);
        line(posA.x,posA.y-10,posB.x+this.offsetX,posB.y);      
    }

}
