var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeavesImg = loadImage("orangeLeaf.png")
  redLeavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
   var rand = Math.round(random (1,3))
   if (frameCount%80 == 0){

   
   if (rand == 1){
     createApples()
   }
   else if(rand == 2){
     createOrangeLeaves()
   }
   else {
     createRedLeaves()
    }

}
}

function createApples(){
 apple =  createSprite(100,40,10,10);
 apple.addImage(appleImg);
 apple.scale= 0.07;
 apple.velocityY = 3;
 apple.lifetime = 150;
}


function createOrangeLeaves(){
  orangeLeaves = createSprite(150,40,10,10);
  orangeLeaves.addImage(orangeLeavesImg);
  orangeLeaves.scale = 0.08;
  orangeLeaves.velocityY = 3;
  orangeLeaves.lifetime= 150
}


function createRedLeaves(){
  redLeaves = createSprite(200,40,10,10);
  redLeaves.addImage(redLeavesImg);
  redLeaves.scale = 0.08;
  redLeaves.velocityY = 3;
  redLeaves.lifetime = 150
}

