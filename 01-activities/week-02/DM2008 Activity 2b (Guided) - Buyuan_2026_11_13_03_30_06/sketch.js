// DM2008 — Activity 2b [Guided]
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating row of shapes.
// Add a condition to introduce variation — alternating color, size, or spacing.
// Then add one interaction (mouse or key) that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.

let y = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(24);
}

function draw() {
  background(240, 40);

  for (let i = 0; i < width; i += 50) {
    // % (modulo) alternates between 0 and non-zero — good for switching every other shape
    if (mouseIsPressed) {
      fill(250, 0, i % 10)
    } else if (i % 100 == 0,250,250) {
      noStroke();
      fill(250,250,0);
    } else {
      fill(0);
    }
    // --- Your shape goes here ---
    // Try swapping this out for your own rule.
    if (keyIsPressed) {
      rectMode(CENTER);
      fill(0,128,128);
      rect(i + 25, y, 250);
    } else {
      ellipse(i + 25, y, 60);
    }
  }

  y += height * 0.1;
  if (y > height) {
    y = 0;
  }
}
