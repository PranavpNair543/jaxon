var Jaxon,Jaxon_runing,path,pathImg,powerImg,coinImg
function preload(){
  //pre-load images
  Jaxon_runing = loadAnimation("Runner-1.png","Runner-2.png" )
  pathImg = loadImage("path.png")
powerImg = loadImage("power.png")
coinImg = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  


// Moving background
path=createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 4;
path.scale=1.2;
leftBoundry=createSprite(0,0,100,800)
rightBoundry=createSprite(400,0,100,800)
rightBoundry.visible = false;
leftBoundry.visible = false;
//create a Jaxon sprite
Jaxon = createSprite(130,200,30,30);
Jaxon.addAnimation("runing", Jaxon_runing);
Jaxon.scale = 0.08;
}

function draw() {
  background(0);
//code to reset the background
if(path.y > 400 ){
  path.y = height/2;
}

Jaxon.x=World.mouseX
Jaxon.collide(leftBoundry)
Jaxon.collide(rightBoundry)
drawSprites()
}
