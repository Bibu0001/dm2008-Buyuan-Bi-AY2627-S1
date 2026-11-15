// DM2008 — Activity 3a [Guided]
// Array Sampler (25 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.
//
// Try these:
// - Replace the colors with your own values (sizes, positions, text).
// - Use mousePressed() instead of keyPressed().
// - Use push() to add new items or splice() to remove them.
// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let palette = ["#f06449", "#009988", "#3c78d8", "#ffeb3b"];
let currentIndex = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  rectMode(CENTER);

  const spacing = width / (palette.length + 1);
  // Draw one circle for each palette color
  // Draw the ellipse using the current color in the array
  for (let i = 0; i < palette.length; i++) {
    fill(palette[i]);
    const x = (i + 1) * spacing;
    rect(x, height / 2, 40);
  }
}

function mousePressed() {
  palette.push(color(random(255), 0, 0));}

  function keyPressed() {
    if (palette.length > 0) {
      palette.splice(palette.length - 1, 1);
    }
  }

  // Wrap back to the start when we reach the end
  if (currentIndex >= palette.length) {
    currentIndex = 0;
  }

  console.log("Current index:", currentIndex, "→", palette[currentIndex]);

