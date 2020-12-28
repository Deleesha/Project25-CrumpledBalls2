class Paper {

    constructor(x,y){

        var paper_options = {

            isStactic : false,
            restitution : 0.5,
            density :10,
            friction : 0
             
        }

        
        this.width = 50;
        this.height =50;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,70, 70 , paper_options);
        World.add(myworld,this.body);

        //console.log(this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);
        rotate(angle);
        image(this.image ,0,0 ,this.width,this.height);
        pop();
    }



}


