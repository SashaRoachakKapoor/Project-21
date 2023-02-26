
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	var balls_option={
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2,

	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball =Matter.Bodies.circle(200,100,20,balls_option)
World.add(world,ball)
rightSide = new Ground(width/2,670,width,20)
leftSide = new Ground(1100,600,20,120)
ground = new Ground(1350,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
 ellipse(ball.position.x,ball.position.y,40)
  rightSide.display()
  leftSide.display()


}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}
}



