
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boldMan
var sacredMan

var boldManImg
var sacredManImg





function preload()
{
	boldManImg=loadImage("PC WALA.png")
	sacredManImg=loadImage("NPC WALA.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boldMan=createSprite(100,650,10,10)
	sacredMan=createSprite(700,650,20,20)
	boldMan.addImage("PCWALA",boldManImg)
	sacredMan.addImage("NPCWALA",sacredManImg)
	boldMan.scale=0.5
	sacredMan.scale=0.5

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



if(keyCode===UP_ARROW){

  boldMan.y += 3 
}
 if(keyCode===DOWN_ARROW){

	boldMan.y -= 2
 }

 sacredMan1()












  
  drawSprites();
 
}


function sacredMan1(){

   if(frameCount % 100=== 0)
	sacredMan=createSprite(700,650,20,20)
	sacredMan.addImage("NPCWALA",sacredManImg)

	sacredMan.velocityX=-2

	sacredMan.y=Math.round(random(20,300))





}



