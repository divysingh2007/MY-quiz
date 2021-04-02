class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.inputQ = createInput("choose correct option no.");
      this.buttonQ= createButton('enter')
    }
    hide(){
      this.inputQ.hide();
      this.input.hide();
      this.button.hide();
      this.buttonQ.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("MY QUIZ ");
      title.position(130, 0);
      
     
      this.inputQ.position(260,260);
      this.buttonQ.position(310,260);
      this.input.position(130, 260);
      this.button.position(250, 260);
  
     this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        contestant.name = this.input.value();
        
        contestantCount+=1;
        contestant.update()
        contestant.updateCount(playerCount);
        
    
      });
  
    }
  }
  