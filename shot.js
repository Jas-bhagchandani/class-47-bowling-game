class Shot{
    constructor(bodyA, pointB){
     var options= {
      bodyA:bodyA,
      pointB:pointB,
      length:5,
      stiffness:0.05

     }
     this.pointB=pointB;
     this.shot=Constraint.create(options);
     World.add(world,this.shot);
    }
    display(){
        if(this.shot.bodyA){
            var pointA=this.shot.bodyA.position
            var pointB=this.pointB;
            line(pointA.x,pointA.y, pointB.x,pointB.y)
        }
    }

     fly(){
     this.shot.bodyA=null;
    }
    attach(body){
this.shot.bodyA=body
    }
}