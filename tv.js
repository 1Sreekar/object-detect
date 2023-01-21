img1 = "";

function preload(){
    img1 = loadImage("Tv.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
}

function draw(){
    image(img1,0,0,950,400)
    fill("blue");
    text("Televison" , 195 , 50);
    noFill();
    stroke("Blue");
    rect(185,25,480,300);
}

function back1(){
    window.location = "index.html";
}