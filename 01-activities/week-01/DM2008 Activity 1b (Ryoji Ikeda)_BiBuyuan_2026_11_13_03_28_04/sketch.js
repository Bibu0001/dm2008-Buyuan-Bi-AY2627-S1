// DM2008 — Activity 1b [Ryoji Ikeda]
// Learning By Making (30 min)

// let x;
// let w;
let z = 30;

function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
  fill(0);
}

function draw() {
  background(255, 10);

  x = random(width);
  w = random(1, 10);
  rect(x, 0, w, height/4);
  
  x = random(width);
  rect(x, height/4, w, height/4);

  x = random(width);
  rect(x, height/4, w, height/4);

  x = random(width);
  rect(x, 400, w, height/4);

  x = random(width);
  rect(x, 600, w, height/4);

   x = random(width);
  rect(mouseX, mouseY, 70);
  
}


// function keyPressed() {
//   saveCanvas("activity1b-image", "jpg");
// }