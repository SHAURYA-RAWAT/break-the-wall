var bullet;
var wall,thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50,5);
  bullet.velocityX=speed;
  wall=createSprite(1200, 200,thickness,height/2);


}

function draw() {
background(0); 

  drawSprites();
}
function hasCollided(lbullet,lwall)