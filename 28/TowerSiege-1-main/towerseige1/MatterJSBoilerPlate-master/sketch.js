
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground
var tree
var mango,mango2,mango3,mango4,mango5,mango6
var boy,boyimage
var stone
var slingshot

function preload(){
 
 boyimage=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone= new Stone(200, 200, 40)
	ground=new Ground(700,680,1400,20)
    tree=new Tree(1100,280,300,400)
    mango=new Mango(1300,350,40,40)
	mango2=new Mango(1200,350,40,40)
	mango3=new Mango(1200,300,40,40)
	mango4=new Mango(1270,300,40,40)
	mango5=new Mango(1300,400,40,40)
	mango6=new Mango(1190,400,40,40)
	slingshot = new Slingshot(stone.body,{x:150,y:550});


    boy = createSprite(200,600,100,100);
	boy.addImage(boyimage)
	boy.scale=0.1

	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

detectcollision(stone,mango)
detectcollision(stone,mango2)
detectcollision(stone,mango3)
detectcollision(stone,mango4)
detectcollision(stone,mango5)
detectcollision(stone,mango6)

  boy.display()
  tree.display()
  mango.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  slingshot.display()
  ground.display()
  stone.display()
  drawSprites();
 
}

function mouseDragged(){
  
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
slingshot.fly();

}

function detectcollision(Lstone,Lmango){
mangoBodyPosition=Lmango.body.position
stoneBodyPosition=Lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=Lmango.r+Lstone.r){
	Matter.Body.setStatic(Lmango.body,false)
}
}