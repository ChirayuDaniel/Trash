
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render  = Matter.Render
var dustbinObj;
var paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(12000, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Trash(1200,650);
	paper = new Paper(200,450,40.3291407984570193847502983745098273450)
ground = new Ground(width/2,670,width,20)
	//Create the Bodies Here.

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  dustbinObj.display();
  paper.display();
 ground.display(); 
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});


}
}

