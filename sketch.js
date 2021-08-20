const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3, bob4,bob5;
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}

	bob1 =Bodies.circle(320,380,20,bob_options);
    World.add(world,bob1);

	bob2 = Bodies.circle(360,380,20,bob_options);
    World.add(world,bob2);

	bob3 = Bodies.circle(400,380,20,bob_options);
    World.add(world,bob3);

	bob4 = Bodies.circle(440,380,20,bob_options);
    World.add(world,bob4);

	bob5 = Bodies.circle(480,380,20,bob_options);
    World.add(world,bob5);
	
	rope1=new rope(bob1,roof,-80, 0)//what is the 3rd value? how is it determined?
	rope2=new rope(bob2,roof,-40, 0)
	rope3=new rope(bob3,roof,0, 0)
	rope4=new rope(bob4,roof,40, 0)
	rope5=new rope(bob5,roof,80, 0)
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  textSize(16)
  fill("white")
  text("Also known as the Executive Ball Clicker, Newton's Cradle works on the principle of Conservation of Momentum", 10, 480)
  text("mass times speed). This law states that when two objects collide, the momentum of those objects before the ", 10, 500)
  text("collision is the same as after it.", 10, 520)
  text("In simpler terms, when the first ball collides with the second one, the momentum is passed on from one ball", 10, 555)
  text("to another till the last ball. Then, the last ball oscillates and passes the momentum back to the previous", 10, 575)  
  text("ball and the momentum reaches the first ball again.", 10, 595)
  textSize(18)
  text("Newton's Cradle", 343, 60)
  text("Press Space to see functioning", 20, 20)
  rect(roof.position.x,roof.position.y,230,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  ellipse(bob1.position.x,bob1.position.y,40,40);
  ellipse(bob2.position.x,bob2.position.y,40,40);
  ellipse(bob3.position.x,bob3.position.y,40,40);
  ellipse(bob4.position.x,bob4.position.y,40,40);
  ellipse(bob5.position.x,bob5.position.y,40,40);
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
	}
}

