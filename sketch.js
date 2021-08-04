const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var girl, girlImg;
var boy, boyImg;
var snowImg;


function preload() {
  snowImg = loadImage("snow2.jpg");
  boyImg = loadAnimation("6.png","7.png","8.png");
  girlImg = loadAnimation("2.png","3.png","4.png");
}


function setup() {
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(300,520,50,50);
  boy.addAnimation("play",boyImg);
  boy.scale = 2.0;
  boy.frameDelay = 5;

  girl = createSprite(1350,520,50,50);
  girl.addAnimation("play",girlImg);
  girl.scale = 2.0;
  girl.frameDelay = 6;

  createSprite(400, 200, 50, 50);
  snow1 = new snow(400,400);
}

function draw() {
  background(snowImg);  
  Engine.update(engine);

  snow1.display();

  drawSprites();
}