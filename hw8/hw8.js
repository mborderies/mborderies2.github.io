let cnv,d,g,s,p,n;
let t= 'press to change'
let r= 'scroll to switch'

function setup() {
  colorMode(HSB);
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(changeColor);
  d=10;
  g=100;
  s= width/2
  p= height -50
  n=height/8
}

function draw() {
  colorMode(HSB);
  background(g,200,90);
  textSize(32);
  fill(10,200,100)
  text(t,s,n);
  text(r,s,p);
  
  noStroke();
  fill(255);
  ellipse(s,height/2,d,d);
  fill(g);
  ellipse(mouseX, 300, d-20, d-20);
  fill(10,20,g)
  circle(mouseX,mouseY, 10);
  fill(g,20,100)
  circle(mouseY,mouseX, 20);
  ellipse(s,mouseY, d-50, d-50);
  fill(25+g,g,140)
  ellipse(mouseY,n, d-50, d-50);
}

function mousePressed(){
  d=d+50
 
  
}

function changeColor(){
  g=random(0,255);
}