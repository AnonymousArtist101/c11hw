
var path, bg;
var jaxon, running;
var invisibleL, invisibleR;

function preload(){
  //pre-load images
  bg = loadImage("path.png");
  running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path = createSprite(200, 200);
  path.addImage(bg);
  path.velocityY = +4;

  jaxon = createSprite(200, 300);
  jaxon.addAnimation("running", running);
  jaxon.scale = 0.05;

  invisibleL = createSprite(2, 200, 4, 400);
  invisibleL.visible = false;

  invisibleR = createSprite(398, 200, 4, 400);
  invisibleR.visible = false;

}

function draw() {
  background(0);

  if(keyDown("RIGHT")){
    jaxon.x = jaxon.x + 5;
  }

  if(keyDown("LEFT")){
    jaxon.x = jaxon.x - 5;
  }

  jaxon.collide(invisibleL);
  jaxon.collide(invisibleR);

  if(path.y > 400){
    path.y = 0;
  }

  drawSprites();
}
