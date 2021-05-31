
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(440,100,300,30);

	bobObject1 = new bob(560,350,30)
	bobObject2 = new bob(500,350,30)
	bobObject3 = new bob(440,350,30)
	bobObject4 = new bob(380,350,30)
	bobObject5 = new bob(320,350,30)
	rope1=new rope(bobObject1.body,roofObject.body,+120, 0)
	rope2=new rope(bobObject2.body,roofObject.body,+60, 0)
rope3=new rope(bobObject3.body,roofObject.body,0,0)
  rope4=new rope(bobObject4.body,roofObject.body,-60,0)
rope5=new rope(bobObject5.body,roofObject.body,-120,0)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

 rope1.display();
 rope2.display();
rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-100,y:50})
  }
}







