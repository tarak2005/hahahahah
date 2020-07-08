function setup() {
  createCanvas(800,400);
  background("red");
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,400,20);
  
}





function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}