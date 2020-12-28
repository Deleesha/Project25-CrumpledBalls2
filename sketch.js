
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld, ground ;

var box1 , box2 , box3 , dustbinImage;
var ground;
var paper;

function preload(){
	dustbinImage  = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 700);

	myengine = Engine.create();
    myworld = myengine.world;
	
	box1 = new Box(900,535,10,200);
	box2 = new Box(805,630,200,10);
	box3 = new Box(700,600,10,70);

	ground = new Ground(700,670,1400,10);
	paper = new Paper(200,600);
	
	Engine.run(myengine);
  
}


function draw() {
 
  background("pink");


  
  Engine.update(myengine);
	
  console.log(paper.x);

 /*box1.display();
 box2.display();
 box3.display();*/

  ground.display();
  paper.display();
  image(dustbinImage,700,330);

}

function keyPressed(){

	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body, paper.body.position , {x:2500, y:-2500});

	}


}

