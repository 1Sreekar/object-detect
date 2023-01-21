imgg = "";
statuss = ""

function preload(){
    imgg = loadImage("1674255197846.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
   
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("detecting").innerHTML = "Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model is Ready");
    statuss = true;
    ObjectDetector.detect(imgg,gotResults);
}

function draw(){
    image(imgg,0,0,950,400)
    fill("green");
    text("Fridge" , 120 , 25);
    noFill();
    stroke("Blue");
    rect(110,10,725,370);
}

function backk(){
    window.location = "index.html";
}