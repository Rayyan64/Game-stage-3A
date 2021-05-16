
var object = [];
var ground1
function preload(){
    bg= loadImage("BG/BG.png");
    ground1img= loadImage("Tiles/1.png");
    object1img = loadImage("Tiles/2.png");
    object3img = loadImage("Tiles/3.png");
    object2img = loadImage("Tiles/15.png");
    playerimg = loadImage("Object/man.png");
    object3img = loadImage("Tiles/12.png");
    object4img = loadImage("Tiles/16.png");
    ground2img=loadImage("Tiles/11.png")
    ground3img=loadImage("Tiles/7.png")
    water1 = loadImage("Tiles/17.png");
    g1 = loadImage("g1.png");
    g2 = loadImage("g2.png");
    bush1= loadImage ("Object/Bush (1).png");
    bush2= loadImage ("Object/Bush (2).png");
    bush3= loadImage ("Object/Bush (3).png");
    bush4= loadImage ("Object/Bush (4).png");
    sign1= loadImage("Object/Sign_1.png");
    sign2= loadImage("Object/Sign_2.png");
    mushroom1 = loadImage("Object/Mushroom_1.png");
    mushroom2= loadImage ("Object/Mushroom_2.png")
    stoneimg= loadImage("Object/Stone.png");
    tree1= loadImage("Object/Tree_1.png");
    tree2= loadImage("Object/Tree_2.png");
    tree3= loadImage("Object/Tree_3.png");
    crate = loadImage("Object/Crate.png");

}

function setup() {
    createCanvas(400, 400);
    player = createSprite(100,250,20,20)
    player.addImage(playerimg);
    
    crate1 = createSprite(150,320,10,10);
    crate1.addImage(crate);
    crate1.scale = 0.4

    mush1 = createSprite(320,215,10,10);
    mush1.addImage(mushroom1);
    mush1.scale = 0.5;


    stone = createSprite(600,330,10,10);
    stone.addImage(stoneimg);
    stone.scale = 0.5;


    mush2 = createSprite(700,330,10,10);
    mush2.addImage(mushroom2);
    mush2.scale = 0.5;

    t1= createSprite(450,325,10,10);
    t1.addImage(tree1);
    t1.scale = 0.5;

    t3 = createSprite(907,275,10,10)
    t3.addImage(tree3)
    t3.scale = 0.6





   
    object3 = createSprite(300,250,650,30);
    object3.addImage(object3img);
    object3.scale = 0.4
    object4 = createSprite(350,250,650,30);
    object4.addImage(object4img);
    object4.scale = 0.4
    ground0 = createSprite(width/width,height-40,700,40);
    ground0.shapeColor= "blue";
    
    ground1 = createSprite(width/2,height-40,300,40);
    ground1.shapeColor= "lightblue";
    ground2 = createSprite(width,height-40,500,40);
    ground2.shapeColor= "green";
    ground3 = createSprite(width/2+1000,height-40,1600,40);
    ground3.shapeColor= "red";
    
    ground4 = createSprite(2200,height-40,800,40);
    ground4.shapeColor= "green";
    ground5 = createSprite(3600,height-40,2000,40);
    ground5.shapeColor= "purple";
    ground6 = createSprite(4300,height-40,800,40);
    ground6.shapeColor= "black";

    player.debug = true;
    player.setCollider("rectangle",-10,0,20,50);
    platform1 =createSprite(600,150,60,20);
    platform1.shapeColor= "orange";

    //ground.visible = false;
    //ground.addImage(object1img);


  
}

function collideCrate(){
    player.collide(crate1);
    player.collide(mush1); 
    player.collide(mush2);
    player.collide(stone); 
    player.collide(t1); 
    player.collide(t3);





}
  function draw() {
    background(bg,50,50);
    collideCrate();
    console.log(player.x);

    fill('black')
    textSize(15);
    text(mouseX+' , '+mouseY,mouseX,mouseY);

     if(keyDown(LEFT_ARROW)){
          player.x = player.x-5
    }
   
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5
    }

    if(keyDown("space")&& player.y >305){
        player.velocityY = -12;
    }

    if(keyDown(UP_ARROW)&& player.y >200){
        player.velocityY = -12;
    }
    player.velocityY = player.velocityY+1
    player.collide(ground0);
    player.collide(ground1);
    player.collide(ground2);
    player.collide(ground3);
    player.collide(ground4);
    player.collide(ground5);
    player.collide(ground6);
    player.collide(object3);
    player.collide(object4);
    


    player.collide(platform1);
  
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =player.x;

    drawSprites();
    image(ground1img,ground0.x-400,ground0.y-25,400);
    image(object1img,ground0.x-200,ground0.y-25,200,120)
    image(object1img,ground0.x,ground0.y-25,200,120)
    image(object1img,ground0.x-100,ground0.y-25);
    
    image(object1img,ground1.x-100,ground1.y-25,200,120)
    image(object1img,ground1.x-100,ground1.y-25);
    image(object1img,ground1.x-200,ground1.y-25);

    image(water1,ground1.x+200,ground1.y-25,100,120);

    image(object1img,ground2.x,ground2.y-25,200,120);
    image(object1img,ground2.x-100,ground2.y-25);
    image(ground1img,ground2.x-200,ground2.y-25);

    image(ground1img,589,ground3.y-25);
    image(object3img,ground3.x-200,ground3.y-25)
    image(object3img,ground3.x-200,ground3.y-25);




    image(ground2img,2800,ground3.y-25);
    image( object1img,2900,ground3.y-25)
    image( object1img,3000,ground3.y-25)
    image( object1img,3100,ground3.y-25)
    image( object1img,3200,ground3.y-25)
    image( object1img,3300,ground3.y-25)
    image( object1img,3400,ground3.y-25)
    image( object1img,3500,ground3.y-25)
    image( object1img,3600,ground3.y-25)
    image( object1img,3700,ground3.y-25)
    image( object1img,3800,ground3.y-25)
    image( object1img,3900,ground3.y-25)
    image( object1img,4000,ground3.y-25)
    image( object1img,4100,ground3.y-25)
    image( object1img,4200,ground3.y-25)
    image( object1img,4300,ground3.y-25)
    image( object1img,4400,ground3.y-25)
    image( ground3img,5000,ground3.y-25)
    
    
    
    image( ground3img,800,ground3.y-25);
    image( object1img,900,ground3.y-25);
    image( object1img,1250,ground3.y-25);

    
    

    
}