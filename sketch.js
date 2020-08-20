var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;


var count=0;

function preload(){
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
backImage=loadAnimation("jungle2.jpg");
  
bananaImg=loadImage("Banana.png");
obstacle_img=loadImage("stone.png");
  }


function setup(){
  
 createCanvas(400,400);
  
  backgr=createSprite(0,200,800,400);
  backgr.addAnimation("backgr",backImage);
  backgr.x = backgr.width/2;
  backgr.velocityX = -2; 
  
  player=createSprite(50,340,20,20);
  player.addAnimation("running", player_running);
  player.scale=0.09;
  
  ground=createSprite(200,370,400,10);
  ground.visible=false;
  
  
  
  
  FoodGroup=new Group();
  obstaclesGroup=new Group();

stroke("white");
textSize(25);
fill("white");
textFont("Arial");
}

function draw(){
  
  background(0);
  
  //count = count+Math.round(getFrameRate()/60);
  
  
  if (keyDown("space")) {
      player.velocityY = -17;
     }
  
  //adding gravity
  player.velocityY = player.velocityY + 0.8 ;
  
  if (backgr.x <0){
   backgr.x = backgr.width/2;
  }
  
 if(obstaclesGroup.isTouching(player)&&count>=50){
    
    
    }
  
  player.collide(ground);
  
  spawnbanana();
  spawnobstacles();
  increasesize();
  resetsize();
  
  drawSprites();
  
  text("Score: "+ count,250,50);
  
  
}

function spawnbanana (){
  if (frameCount % 80 === 0) {
  var banana = createSprite(400,200,20,20);
  banana.addImage("banana",bananaImg);
  banana.y = Math.round(random(120,200));
  banana.scale = 0.05;
  banana.velocityX = -4;
  FoodGroup.add(banana);
  }
}  

function spawnobstacles (){
  if (frameCount % 100 === 0) {
  var obstacle = createSprite(400,200,20,20);
  obstacle.addImage("obstacle",obstacle_img);
  obstacle.y = 360;
  obstacle.scale = 0.07;
  obstacle.velocityX = -4;
  obstaclesGroup.add(obstacle);
  }
}

function increasesize(){
  
if(FoodGroup.isTouching(player)){
    count=count+3; 
    FoodGroup.destroyEach();
    var rand = Math.round(random(1,5));
  
    switch(rand){
      case 1:player.scale=0.12;
              break;
              
      case 2:player.scale=0.14;
              break;
    
      case 3:player.scale=0.16;
              break;
              
      case 4:player.scale=0.18;
              break;
              
      case 5:player.scale=0.20;
              break;
              
      default:break;
    } 
}  
}  

function resetsize(){
  
if(obstaclesGroup.isTouching(player)){
   
  player.scale=0.09;
  obstaclesGroup.destroyEach();
  count=count-2;
   }
}

