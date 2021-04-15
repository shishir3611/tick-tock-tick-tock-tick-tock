var h, m, s;

function setup() {
  createCanvas(800, 400);
  h = hour();
  m = minute();
  s = second();
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  angleMode(DEGREES);
  angle = map(s,0, 60, 0, 360);
}
