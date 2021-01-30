var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1000,400);
  car=createSprite(50,200,40,40);
  wall=createSprite(800,200,60,height/2);
  car.shapeColor="white"
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  deformation=Math.round((0.5*weight*speed*speed)/22500);
}
function draw() {
  background(0);
  car.velocityX=speed;
  drawSprites();
  if(car.isTouching(wall)){
    car.velocityX=0;
  }
  if(car.isTouching(wall)&&deformation<=100){
    car.shapeColor="green"
  }
  if(car.isTouching(wall)&&deformation>100&&deformation<180){
    car.shapeColor="yellow"
  }
  if(car.isTouching(wall)&&deformation>=180){
    car.shapeColor="red"
  }
}