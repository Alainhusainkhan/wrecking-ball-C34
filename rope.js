class Rope
{
constructor(bodyA,pointB)
{
 var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.04,
length: 300
}
this.pointB = pointB
this.chain = Matter.Constraint.create(options);

World.add(world,this.chain);

}

display()
{
    var point1 = this.chain.bodyA.position;
    var pointB = this.pointB;

    push()
    stroke(255)
    strokeWeight(4);
    line(point1.x,point1.y,pointB.x,pointB.y);
    pop()
}



}
