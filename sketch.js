//Bullet
var bullet;

//Wall
var wall;

//speed and weight
var speed, weight;

//Thickness
var thickness;

//Damage
var damage;

function setup() {
  createCanvas(1600,400);

  bulletSpeed = round(random(70, 110));

  bulletWeight = round(random(400, 1500));

  thickness = round(random(22, 83));

  //bullet
  bullet = createSprite(50, height / 2, 70, 10);
  bullet.velocityX = bulletSpeed
  bullet.shapeColor = "white";

  //wall
  wall = createSprite(1200, height / 2, thickness, height / 2);
  wall.shapeColor = "light grey";

}

function draw() {
  background("black");  

  //collision between bullet and wall
  if(abs(bullet.x - wall.x) <= bullet.width / 2 + wall.width / 2 && abs(bullet.y - wall.y) <= bullet.height / 2  + wall.height / 2){
    bullet.velocityX = 0;

    damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / (thickness * thickness * thickness);
  }

  //damage
  if(damage <= 10){
    wall.shapeColor = "#BDD631";
  }

  if(damage > 10){
    wall.shapeColor = "red";
  }

  drawSprites();
}