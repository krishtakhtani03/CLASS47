var bg
var bg1
var spaceship
var spaceship1
var enemy
var enemy1
var enemy2
var enemyGroup
var  enemyGroup1
var enemyGroup2
var Enemy
var Enemy1
var Enemy2
var gameover 
var gameover1
var PLAY=1
var END=0
var gameState= PLAY
var yes
var yes1
var no
var no1

function preload(){
bg1=loadImage("images/bg.jpg")
spaceship1=loadImage("images/spaceship.png")

enemy=loadImage("images/enemy1.png")
enemy1=loadImage("images/asteroid1.png")
enemy2=loadImage("images/asteroid2.png")
gameover=loadImage("images/gameover.jpg")
yes=loadImage("images/restart.png")
}


function setup() {
  createCanvas(700,700);

  bg=createSprite(350, 350, 50, 50);
  bg.addImage(bg1)
  bg.scale=2

  spaceship=createSprite(350,600,50,50)
  spaceship.addImage(spaceship1)
  spaceship.scale=0.3

  gameover1=createSprite(350,350,40,40)
  gameover1.addImage(gameover)
  gameover1.scale=0.5

  yes1=createSprite(300,460,20,20)
  yes1.addImage(yes)
  yes1.scale=0.1
  yes1.visible=false

  no=createSprite(400,480,20,20)
  no.visible=false


  enemyGroup=createGroup()
  enemyGroup1=createGroup()
  enemyGroup2=createGroup()

}

function draw() {
 // background(255,255,255);  

 if(gameState===PLAY){
   
   gameover1.visible=false
   bg.velocityY=-4

   if (bg.y < 0){
    bg.y = bg.height/2;
  }
  if(keyDown("UP_ARROW")){
    spaceship.y=spaceship.y-5
  }
  
  if(keyDown("DOWN_ARROW")){
    spaceship.y=spaceship.y+5
  }

  if(keyDown("RIGHT_ARROW")){
    spaceship.x=spaceship.x+5
  }

  
  if(keyDown("LEFT_ARROW")){
    spaceship.x=spaceship.x-5
  }

 spawnenemies()
 spawnenemise2()
 spawnenemise3()

 if(enemyGroup.isTouching(spaceship)||enemyGroup1.isTouching(spaceship||enemyGroup2.isTouching(spaceship))){
 gameState=END
 }
 }

 else if (gameState===END){
 bg.velocityY=0
 gameover1.visible=true
 enemyGroup.destroyEach()
 enemyGroup2.destroyEach()
 enemyGroup1.destroyEach()

 if(mousePressedOver(yes)){
   restart()
 }
 }
   
  drawSprites();
}

function restart() {
  gameState= PLAY
  
}
function spawnenemies(){
  if(frameCount%100===0){
  Enemy=createSprite(100,0,10,10)
  Enemy.addImage(enemy)
  Enemy.velocityY=5
  Enemy.scale=0.3
  Enemy.x=Math.round(random(50,650))
  Enemy.lifetime=150
  enemyGroup.add(Enemy)
 
}
}
function spawnenemise2() {
  if(frameCount%125===0){
    Enemy1=createSprite(100,0,10,10)
    Enemy1.addImage(enemy1)
    Enemy1.velocityY=5
    Enemy1.scale=0.7
    Enemy1.x=Math.round(random(50,650))
    Enemy1.lifetime=150
    enemyGroup1.add(Enemy1)
}
}

function spawnenemise3() {
  if(frameCount%175===0){
    Enemy2=createSprite(100,0,10,10)
    Enemy2.addImage(enemy2)
    Enemy2.velocityY=5
    Enemy2.scale=0.4
    Enemy2.x=Math.round(random(50,650))
    Enemy2.lifetime=150
    enemyGroup2.add(Enemy2)
}
}