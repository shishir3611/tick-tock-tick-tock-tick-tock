var h = hour();
var m = minute();
var s = second();

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(DEGREES)
  angle = map(0,60,0,360)
}