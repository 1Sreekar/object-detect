img2 = "";

function preload(){
    img2 = loadImage("sofa.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
}

function draw(){
    image(img2,0,0,950,400)
    fill("black");
    text("Sofa" , 100 , 50);
    noFill();
    stroke("Black");
    rect(80,25,680,370);
}

function back2(){
    window.location = "index.html";
}