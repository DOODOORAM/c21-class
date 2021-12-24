const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var balloption= {
    restitution:1.2
  }
ball1 = Bodies.circle(200,200,20,balloption)

World.add(world,ball1)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
button1=createImg("right.png")
button1.position(240,100)
button1.size(50,50)
button1.mouseClicked(hforce)
button2=createImg("up.png")
button2.position(230,35)
button2.size(50,50)
button2.mouseClicked(vforce)



  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball1.position.x,ball1.position.y,20)
  Engine.update(engine);
}

function hforce(){
Matter.Body.applyForce(ball1, {x:0,y:0}, {x:0.05,y:0})

}
function vforce(){
  Matter.Body.applyForce(ball1, {x:0,y:0}, {x:0,y:-0.06})

}