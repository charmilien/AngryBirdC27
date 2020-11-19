class Chain
{
    constructor(bodyA,bodyB)
  {
    var options=
    {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
    this.chain= Constraint.create(options);
    World.add(world,this.chain)
  }

  display()
  {
      var posA= this.chain.bodyA.position
      var posB =this.chain.bodyB.position
      
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.chain.bodyB.position.x,this.chain.bodyB.position.y)
  }
}

