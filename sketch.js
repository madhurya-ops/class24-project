
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground = new Ground(width/2,height-35,width,10);

	paper = new Paper(200,100,20);
	// console.log(paper);

	boxPosition = width/1.2
	boxY = 320;

	boxLeftSprite = createSprite(boxPosition, boxY, 20,100);
	boxLeftSprite.shapeColor = color("white");

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20, 100, {isStatic:true});
	World.add(world, boxLeftBody);

	boxBase = createSprite(boxPosition+100, boxY+40, 200, 20);
	boxBase.shapeColor = color("white");

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20, {isstatic:true});
	World.add(world, boxBottomBody);

	boxLeftSprite = createSprite(boxPosition+200, boxY, 20, 100);
	boxLeftSprite.shapeColor = color("white");

	boxRightBody = Bodies.rectangle(boxPosition+200-20, boxY, 20, 100, {isStatic:true});
	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
	}
}



