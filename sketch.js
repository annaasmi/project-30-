const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var polygon, slingshot,polygon_img;

function preload(){
  polygon_img = loadImage("image/polygon.png");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
    world = engine.world;

  stand1 = new Ground(1000,400,230,20);
  stand2 = new Ground(700,500,230,20);

  var options={
    density: 1
  }

  //level 1 stand 2
  box1 = new Box(623,400,45,40);
  box2 = new Box(672,400,45,40);
  box3 = new Box(725,400,45,40);
  box4 = new Box(776,400,45,40);

  //level 2 stand 2
  box5 = new Box2(650,300,45,40); 
  box6 = new Box2(700,300,45,40);
  box7 = new Box2(750,300,45,40);

  //level 3 stand 2
  box8 = new Box3(675,200,45,40);
  box9 = new Box3(725,200,45,40);

  //level 4 stand 2
  box10 = new Box4(700,100,45,40);

  polygon = Bodies.circle(100,350,20,options);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:350});

  //level 1 stand 1
  box11 = new Box(923,300,45,40);
  box12 = new Box(972,300,45,40);
  box13 = new Box(1025,300,45,40);
  box14 = new Box(1076,300,45,40);

  //level 2 stand 1
  box15 = new Box2(950,200,45,40);
  box16 = new Box2(1000,200,45,40);
  box17 = new Box2(1050,200,45,40);

  //level 3 stand 1
  box18 = new Box3(975,100,45,40);
  box19 = new Box3(1025,100,45,40);

  //level 4 stand 1
  box20 = new Box4(1000,0,45,40);
}

function draw() {
  background(0);  
  Engine.update(engine);

  stand1.display();
  stand2.display();

  //level 1 stand 2
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  //level 2 stand 2
  box5.display();
  box6.display();
  box7.display();

  //level 3 stand 2
  box8.display();
  box9.display();

  //level 4 stand 2
  box10.display();

  //ImageMode(CENTER);
  image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);

  //level 1 stand 1
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  //level 2 stand 1
  box15.display();
  box16.display();
  box17.display();

  //level 3 stand 1
  box18.display();
  box19.display();

  //level 4 stand 1
  box20.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
  }
}