
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Boy,Tree,Ground,Stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Boy=new boy(100,350,150,350);
	Tree=new tree(610,300,400,300);
	Ground=new ground(400,450,700,20);
	Stone=new stone (400,300,123,231)
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 Boy.display();
 Tree.display();
 Ground.display();
 Stone.display();
}



