// DM2008 — Activity 2a
// Mode Switch (20 min)
//
// Use keys 1, 2, 3 to switch between at least 3 modes.
// Each mode should change more than just the background — think fill, size, or motion.
//
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0; // ellipse x-position
let size = 50; // ellipse size
let bgColor; // background color, changed by key presses

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
}

function draw() {
  background(bgColor);

  
  if (mouseIsPressed) {
    ellipse(x, height / 2, size);
    noStroke ()
    fill (200,0,0)
  } else {
    rect(x, height / 2, size);
    fill(0,0,200)
  }

  x += 2;

  if (x > width + size / 2) {
    x = 0;
  }
}

// Keys 1, 2, 3 change the background color
function keyPressed() {
  switch (key) {
    case "1":
      bgColor = color(200, 100, 100);
      break; // red
    case "2":
      bgColor = color(100, 200, 100);
      break; // green
    case "3":
      bgColor = color(100, 100, 200);
      break; // blue
    default:
      bgColor = color(220); // grey
  }

  if (mouseIsPressed && keyIsDown(1)){
    bgColor = color(255,255,0)}
  else{
    bgColor = color(200, 100, 100)
  }
}
