var gameState=0;
var game, title;
const Engine =Matter.Engine;
const World =Matter.World;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;
const Detector=Matter.Detector;
var engine,world;
var ground;
var ball;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10;
var ballImg;
var pinImg;
var count=3;


function setup(){
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world= engine.world;
  title= new Start();
  //ground = new Ground(displayWidth/2,displayHeight/2,500,displayHeight);

  
    game= new Game();
   ball=new Ball(displayWidth/2,displayHeight/2+200);
   pin1=new Pin(displayWidth/2-105,displayHeight/2-300);
   pin2=new Pin(displayWidth/2-35,displayHeight/2-300);
   pin3=new Pin(displayWidth/2+35,displayHeight/2-300);
   pin4=new Pin(displayWidth/2+105,displayHeight/2-300);
   pin5=new Pin(displayWidth/2-70,displayHeight/2-240);
   pin6=new Pin(displayWidth/2,displayHeight/2-240);
   pin7=new Pin(displayWidth/2+70,displayHeight/2-240);
   pin8=new Pin(displayWidth/2-35,displayHeight/2-180);
   pin9=new Pin(displayWidth/2+35,displayHeight/2-180);
   pin10=new Pin(displayWidth/2,displayHeight/2-120);
   shot =new Shot(ball.body,{x:displayWidth/2, y:displayHeight/2+120});
   ballImg= loadImage("ball.jpg");
   pinImg= loadImage("pin.png");


    
    

  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  if(gameState===0){
    
    title.display();

    
  }
  if(gameState===1){
    game.display();
    //ground.display();
    ball.display();
    pin1.display();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
    pin7.display();
    pin8.display();
    pin9.display();
    pin10.display();
    shot.display();
    if(Detector.canCollide(ball.body,pin10.body)){
      Matter.Body.setStatic(pin10.body,false);
    }
    text("remaining chances: "+count, displayWidth-200,50);
    if(count===0){
      gameState=2;
    }
    
    
  }
  if(gameState===2){
    textSize(20);
    text("Game Over", displayWidth/2, displayHeight/2);

  }
  console.log(gameState);
}

    function mouseDragged(){
      if(gameState===1){
      Matter.Body.setPosition(ball.body,{
        x:mouseX,
        y:mouseY
      })
    }
  }
    function mouseReleased(){
     
      shot.fly();
      count = count-1;
     
    }
    function keyPressed(){
      if(keyCode===32){
      Matter.Body.setPosition(ball.body,{x:displayWidth/2, y:displayHeight/2+200})
     shot.attach(ball.body);
     
      }
    }

  
    
    
  

   

  





