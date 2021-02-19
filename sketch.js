
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

bobObject1= new bob(100,100,100)

roof=new ground(200,300,50)
//bobObject2= new bob(100,100)
//bobObject3= new bob(100,100)
//bobObject4= new bob(100,100)
//bobObject5= new bob(100,100) 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
bobObject1.display();
roof.display();
  

 
}



