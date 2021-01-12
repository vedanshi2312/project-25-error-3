
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;

function preload()
{
	
}

function setup() {
var	canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

	paper1 = new paper(100,600,10,10);	
	dustbin1 = new dustbin(600,600,150,150);
	//dustbin2 = new dustbin(500,610,20,120);
	//dustbin3 = new dustbin(700,610,20,120);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
Engine.update(engine);

paper1.display();

dustbin1.display();

//dustbin2.display();
//dustbin3.display();
//ground.display();
  
  
  drawSprites();
 
}



function keyPressed() {
    if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
    
  }





