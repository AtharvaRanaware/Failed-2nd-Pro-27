
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,roof;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=createSprite(400,690,800,20)

	 roof=new Roof(390,10,670,20)

	 bob1=new Bob(175,630,50);
	 bob2=new Bob(275,630,50);
	 bob3=new Bob(375,630,50);
	 bob4=new Bob(475,630,50);
	 bob5=new Bob(575,630,50);
	 
	 rope1=new Rope(bob1.body,{x:180,y:15});
	 rope2=new Rope(bob2.body,{x:280,y:15});
	 rope3=new Rope(bob3.body,{x:380,y:15});
	 rope4=new Rope(bob4.body,{x:480,y:15});
	 rope5=new Rope(bob5.body,{x:580,y:15});




	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
roof.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


rope1.display();

rope2.display();

rope3.display();

rope4.display();

rope5.display();



  drawSprites();
 
}





