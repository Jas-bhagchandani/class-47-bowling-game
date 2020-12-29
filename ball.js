class Ball{
    constructor(x,y){
        var options={
        restitution: 1.0,
        friction: 0.5,
        density: 0.1,
        }
        this.body= Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.radius=50
    }
    display(){
        fill("brown");
        ellipseMode(CENTER);
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
   // this.body.position.x=mouseX;
   // this.body.position.y=mouseY;

    }
}