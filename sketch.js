var fruit, fruitGroup, enemy, enemyGroup, gameOver, sword

var fruitImage1, fruitImage2, fruitImage3,fruitImage4, enemyMoving, swordImage, gameOverImage

var play = 1
var end = 0
var gameState = 1 
var score = 0

function preload(){
  fruitImage1= loadImage("fruit1.png")
  fruitImage2= loadImage("fruit2.png")
  fruitImage3= loadImage("fruit3.png")
  fruitImage4= loadImage("fruit4.png")
  enemyMoving = loadAnimation ("alien1.png", "alien2.png");
  swordImage= loadImage("sword.png")
  gameOverImage= loadImage("gameover.png")
  
}

function setup(){
  createCanvas (600,600)
  
  sword = createSprite (40,200,20,20)
  sword.addImage(swordImage);
  sword.scale = 0.7
  
   gameOver = createSprite(340, 315);
  gameOver.addImage("gameOver", gameOverImage);
  gameOver.scale = 1.5;
  gameOver.visible = false
  fruitGroup = new Group();
  enemyGroup = new Group();
  
  Score = 0;
  
}

function draw(){
  background("lightblue")
  
  
  
  if(gameState === play ){
   sword.x = World.mouseX
   sword.y = World.mouseY
    
    fruits();
  
  enemies();
  
    
   
    
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score = score+2
  }
    
    if(enemyGroup.isTouching(sword)){
      gameState = end;
    }
    
  
    
  }
  else if (gameState === end){
   
    fruitGroup.destroyEach();
   enemyGroup.destroyEach();
    
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);

//     sword.x = 200;
//     sword.y = 200;   
    
    gameOver.visible = true
    
  }
  
  
  
  drawSprites();
  

}


function fruits(){
if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20)
  fruit.scale = 0.2
  r=Math.round (random(1,4))
  if(r===1){
    fruit.addImage(fruitImage1)
  } else if (r===2){
    fruit.addImage(fruitImage2)
  }else if (r===3){
    fruit.addImage(fruitImage3)
  } else if  (r===4) {
      fruit.addImage(fruitImage4)
    }  

   
  fruit.y = Math.round(random(50, 340));
  
  fruit.velocityX= -7
  
  fruit.setLifetime = 100
  
  fruitGroup.add(fruit);
  
  } 
  
}

function enemies (){
  if(frameCount % 200===0){
    enemy = createSprite (400,0,20,20)
    enemy.addAnimation ("enemyMoving",enemyMoving)
    enemy.y = Math.round(random(100,300))
    enemy.velocityX = -8
    enemy.setLifetime = 50
    
    enemyGroup.add(enemy)
  }
} 