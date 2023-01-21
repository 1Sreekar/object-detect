img5 = "";

function preload(){
    img5 = loadImage("table.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
}

function draw(){
    image(img5,0,0,950,400)
    fill("black");
    text("Monitar" , 170 , 75);
    noFill();
    stroke("black");
    rect(160,60,317,200);
}

function back5(){
    window.location = "index.html";
}