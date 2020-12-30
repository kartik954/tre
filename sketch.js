
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var boy, player;
var ground;
var stone;
var rope;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15, mango16, mango17, mango18, mango19, mango20;



function preload()
{
	player = loadImage("sprites/pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(1400, 590);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(910, 140);

	boy = createSprite(190, 520, 10, 10);
	boy.scale = 0.1
	boy.addImage("ladka", player);
	World.add(world, boy);

	ground = new Ground(width/2, 580, width, 20);

	stone = new Stone(130, 460, 40);

	rope = new Slingshot(stone.body, {x:130, y:460});

	mango1 = new Mango(970, 300, 60);
	mango2 = new Mango(1000, 320, 40);
	mango3 = new Mango(1040, 330, 50);
	mango4 = new Mango(1040, 260, 55);
	mango5 = new Mango(1070, 200, 50);
	mango6 = new Mango(1090, 240, 45);
	mango7 = new Mango(1110, 280, 40);
	mango8 = new Mango(1090, 330, 40);
	mango9 = new Mango(1140, 220, 45);
	mango10 = new Mango(1190, 180, 50);
	mango11 = new Mango(1160, 270, 40);
	mango12 = new Mango(1200, 310, 45);
	mango13 = new Mango(1210, 250, 50);
	mango14 = new Mango(1260, 240, 45);
	mango15 = new Mango(1250, 290, 40);
	mango16 = new Mango(1280, 330, 60);
	mango17 = new Mango(1300, 270, 40);
	mango18 = new Mango(1330, 300, 45);
	mango19 = new Mango(1140, 330, 50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  tree.display();
  rope.display();
  ground.display();
  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  detectCollision(mango1, stone);
 
}

function detectCollision(lmango, lstone){
	MangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y);
	if(distance<=lmango.body.circleRadius+lstone.body.circleRadius){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 130, y: 460});
		rope.attach(stone.body);
	}
}
