// DM2008 — Activity 3b
// One Function Wonder (30 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.

let angle = 0;
let showPerson = true;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,150);

  translate(width / 2, height / 2);
  rotate(angle);

  if (showPerson) {
    person();
  }

  angle = angle + 1;
}

function mousePressed() {
  showPerson = !showPerson;
}

function person() {
  noStroke();
  fill(25, 25, 220);

  // head
  ellipse(0, -160, 50);
  // body
  rect(0, -75, 70, 120, 20);
  // arm_L
  rect(-52, -65, 25, 110, 35);
  // arm_R
  rect(52, -65, 25, 110, 35);
  // leg_R
  rect(-20, 45, 30, 120, 35);
  // leg_L
  rect(20, 45, 30, 120, 35);
}

  // Call your function here with different values each time

// Define your function outside draw()
// It can be called from anywhere in your sketch


