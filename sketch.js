


var PLAY =0
var gameState = PLAY
var WIN = 1
var LAST = 2
var OVER = 3

var ground1,ground2,ground3,ground4,ground5
var ground6,ground7,ground8,ground9,ground10
var ground11,ground12,ground13,ground14,ground15
var ground16,ground17,ground18,ground19,ground20
var ground21,ground22,ground23,ground24,ground25
var player,hail
var ice = [];
var border1,border2,border3,border4
var drops = [];
var engine, world;
var sunrise,night,sunset,day,houseSunrise
var security,system


function preload()
{
 
  sunrise = loadImage("Sunrise.png")
  day = loadImage("Day.png")
  sunset = loadImage("Sunset.png")
  night = loadImage("Night.png")
  houseSunrise = loadImage("houseSunrise.png")
  houseDay= loadImage("houseDay.png")
  houseNight = loadImage("houseNight.png")
  houseSunset = loadImage("houseSunset.png")
}

function setup() 
{
 

if(background)
{
  background(230)
}
  

  createCanvas(800,1000);
  if(gameState === PLAY)
  {

  
  security = new Security();
  
border1 = createSprite(5,500,10,1000)
 border2 = createSprite(795,500,10,1000)
 border3 = createSprite(400,5,800,10)
border4 = createSprite(400,995,1000,10)
player = createSprite(35,10,10,10)
player.shapeColor = "red"
player.visible = false


ground1 = createSprite(200,500,300,10);
ground1.visible = false
ground2 = createSprite(600,500,300,10);
ground2.visible = false



// ground3 = createSprite(70,150,140,10);
// ground3.visible = false

// ground4 = createSprite(200,150,90,10);
// ground4.visible = false
// ground5 = createSprite(160,100,10,120);
// ground5.visible = false
// ground6 = createSprite(85,190,100,10);
// ground6.visible = false
// ground7 = createSprite(45,260,10,120);
// ground7.visible = false
// ground8 = createSprite(60,350,140,10);
// ground8.visible = false
// ground9 = createSprite(130, 250,100,10);
// ground9.visible = false

// ground10 = createSprite(270,80,10,150);
// ground10.visible = false
// ground11 = createSprite(310, 150,100,10);
// ground11.visible = false
// ground12 = createSprite(190, 300,10,120);
// ground12.visible = false
// ground13= createSprite(170,390,120,10);
// ground13.visible = false

// ground14 = createSprite(190, 230,10,150);
// ground14.visible = false
// ground15 = createSprite(20,420,10,140);
// ground15.visible = false
// ground16 = createSprite(270, 200,10,100);
// ground16.visible = false
// ground17 = createSprite(280, 280,120,10);
// ground17.visible = false
// ground18  = createSprite(360, 190,120,10);
// ground18.visible = false
// ground19= createSprite(330,50,10,150);
// ground19.visible = false
// ground20= createSprite(400, 50,10,150);
// ground20.visible = false
// ground21 = createSprite(320,690,10,140);
// ground21.visible = false
// ground22 = createSprite(330,340,10,140);
// ground22.visible = false
// ground23= createSprite(250, 450,10,150);
// ground23.visible = false
// ground24 = createSprite(460,80,10,440);
// ground24.visible = false
// ground25 = createSprite(400,280,10,200);
// ground25.visible = false
// ground26= createSprite(130, 460,10,150);
// ground26.visible = false
// ground27 = createSprite(530,150,10,440);
// ground27.visible = false
// ground28 = createSprite(140,560,400,10);
// ground28.visible = false

// ground29= createSprite(340, 580,10,150);
// ground29.visible = false
// ground30 = createSprite(460,430,340,10);
// ground30.visible = false
// ground31 = createSprite(620,620,10,400);
// ground31.visible = false
// ground32 = createSprite(550,620,10,400);
// ground32.visible = false
// ground33= createSprite(190, 650,10,150);
// ground33.visible = false
// ground34= createSprite(390, 580,10,150);
// ground34.visible = false
// ground35 = createSprite(460,500,160,10);
// ground35.visible = false
//  ground36= createSprite(640,239,230,10);
//  ground36.visible = false
//  ground37= createSprite(655,85,10,230);
//  ground37.visible = false
//  ground38= createSprite(400,850,800,10);
//  ground38.visible = false
//  ground39= createSprite(672,500,110,10);
//  ground39.visible = false


//  player.collide(ground1)
// player.collide(ground2)
// player.collide(ground3)
// player.collide(ground4)
// player.collide(ground5)
// player.collide(ground6)
// player.collide(ground7)

// player.collide(ground8)
// player.collide(ground9)
// player.collide(ground10)
// player.collide(ground11)
// player.collide(ground12)
// player.collide(ground13)

// player.collide(ground14)
// player.collide(ground15)
// player.collide(ground16)
// player.collide(ground17)
// player.collide(ground18)
// player.collide(ground19)
// player.collide(ground20)
// player.collide(ground21)
// player.collide(ground21)
// player.collide(ground23)    
// player.collide(ground24)
// player.collide(ground25)
// player.collide(ground26)
// player.collide(ground27)
// player.collide(ground28)
// player.collide(ground29)

// player.collide(ground30)
// player.collide(ground31)
// player.collide(ground32)
// player.collide(ground33)
// player.collide(ground34)
// player.collide(ground35)
// player.collide(ground36)
// player.collide(ground37)
// player.collide(ground38)
// player.collide(ground39)

}
}

function draw() {


  console.log(border3.y)


  security.display()



 if(gameState === LAST)
 {
  background(230)
  fill("black")
  textSize(40)
  text("WELL DONE",300,60)

  fill("black")
  textSize(20)
  text("PRESS SPACE TO GO TO NEXT LEVEL",200,290)

  if(keyDown("space"))
  {
    gameState = OVER
  }
 }
  
 
  
  if(gameState === OVER)
  {
    security.hide()
    background(230)

  
   }

  drawSprites();

  
}


