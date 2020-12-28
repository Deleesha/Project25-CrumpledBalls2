class Box {

    constructor(x,y,width,height){

        var box_options = {
             friction : 0.8  , isStatic : true, density:2
        }

        this.body = Bodies.rectangle(x,y,width, height, box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(myworld,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);   
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }



}