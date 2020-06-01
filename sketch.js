const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,box1,ground1,box2;
function setup() {
 var Canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,300,50,50);
  ground1 = new ground(200,395,400,5);
  box2 = new box(215,100,50,100);
}                               

function draw() {
  background("white");
  Engine.update(engine);
  box1.display();
  ground1.display();
  box2.display();
} 