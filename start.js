class Start{
    constructor(){
        this.input = createInput("name");
        this.startButton= createButton("Start Game");


    }

    display(){
        textSize(40); fill("white");
        text("Bowling Game", windowWidth/2- 150, 100);
        textSize(30);
        text("1. use the spacebar to shoot the ball", windowWidth/2 - 300, windowHeight/2- 125);
        text("2. you will get two tries to knock all of the pins", windowWidth/2 - 300, windowHeight/2 -60)
        this.input.position(windowWidth/2-260, windowHeight/2-10);
        this.startButton.position(windowWidth/2-100, windowHeight/2-10)
       /* this.startButton.mousePressed(()=>{
            this.input.hide();
            this.startButton.hide();
            gameState=1;
        })*/
        if(keyDown(ENTER)){
          gameState=1; 
          this.input.hide();
            this.startButton.hide(); 
        }
    }
}