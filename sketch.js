var  sea,ship,seai,shipsA,is;
function preload(){
  //loading images and animation.
 seai = loadImage ("sea.png");
 shipsA = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea=createSprite(500,250,100,100);
  sea.addImage("float",seai);
  sea.scale=0.6;
  sea.velocityX=-3

 ship=createSprite(200,300,100,100);
 ship.addAnimation("ship",shipsA);
 
 ship.scale=0.2;


}

function draw() {
  
background("cyan")
 
  if(sea.x<0){
    sea.x=sea.width/8;
  }
 
 drawSprites();
}