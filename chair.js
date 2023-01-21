img4 = "";

function preload(){
    img4 = loadImage("chair.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
}

function draw(){
    image(img4,0,0,950,400)
    fill("black");
    text("Chair" , 290 , 50);
    noFill();
    stroke("Black");
    rect(280,25,300,370);
}

function back4(){
    window.location = "index.html";
}