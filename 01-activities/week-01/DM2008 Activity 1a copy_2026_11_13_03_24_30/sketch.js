// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // YOUR CODE HERE
  // circle
  fill(25, 25, 220);
  ellipse(200, 70, 50);
  // body
  fill(25, 25, 220);
  rect(165, 100, 70, 120, 20);
  // arm_L
  fill(25, 25, 220);
  rect(135, 110, 25, 110, 35);
  // arm_R
  fill(25, 25, 220);
  rect(240, 110, 25, 110, 35);
  // leg_R
  fill(25, 25, 220);
  rect(165, 210, 30, 120, 35);
  // leg_L
  fill(25, 25, 220);
  rect(205, 210, 30, 120, 35);
  noStroke();
  // YOUR CODE HERE

  helperGrid(); // do not edit or remove this line
}
