var cat1Image,cat2Image,cat3Image,cat4Image,cat;
var mouse1Image,mouse2Image,mouse3Image,mouse4Image,mouse;
function preload() {
    cat1Image = loadAnimation("cat1.png");
    cat2Image = loadAnimation("cat2.png","cat3.png");
    cat3Image = loadAnimation("cat4.png");
    mouse1Image = loadAnimation("mouse1.png");
    mouse2Image = loadAnimation("mouse2.png","mouse3.png");
    mouse3Image = loadAnimation("mouse4.png");
    backgroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",cat1Image);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1Image);
    mouse.scale = 0.1;
}

function draw() {

    background(backgroundImage);
    if(cat.x - mouse.x<(cat.width/2 - mouse.width/2)){
        cat.velocityX = 0
        cat.addAnimation("catFinalImage",cat3Image);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catFinalImage");
        mouse.addAnimation("mouseFinalImage",mouse3Image);
        mouse.scale = 0.1;
        mouse.changeAnimation("mouseFinalImage");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -4
        cat.addAnimation("catRunning",cat2Image);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouse2Image);
        mouse.changeAnimation("mouseTeasing");
    }
}
