// DM2008 — Activity 4a [Guided]
// Bake a Cookie (30 min)
//
// A class is a blueprint — Cookie describes what every cookie has and can do.
// Your job is to complete the class, then add movement and a flavor randomizer.
//
// Suggested order:
// 1. Add the missing properties to the constructor (sz, x, y)
// 2. Fix show() so it uses this.flavor, this.x, this.y, this.sz
// 3. Implement move() and randomFlavor()
// 4. Wire them up in keyPressed() and mousePressed()
//
// Stretch: add a second cookie with different starting values.

let cookie;
let flavor = ["chocolate", "vanilla"];

function setup() {
  createCanvas(400, 400);
  noStroke();
  cookie = new Cookie("chocolate", 120, width / 2, height / 2);
}

function draw() {
  background(230);
  cookie.show();
}

class Cookie {
  constructor(flavor, sz, x, y) {
    // this. binds each value to this specific cookie object
    // Add the missing properties below
    this.flavor = flavor;
    this.sz = sz;
    this.x = x;
    this.y = y;
  }

 
    // Fix this method — it should use this.flavor, this.x, this.y, this.sz
   show() {
  switch (this.flavor) {
    case "chocolate":
      fill(196, 146, 96);
      ellipse(this.x, this.y, this.sz);
      break;

    case "vanilla":
      fill(255, 223, 150);
      ellipse(this.x, this.y, this.sz);
      break;

    case "strawberry":
      fill(255, 122, 107);
      ellipse(this.x, this.y, this.sz);
      break;

    case "egg":
      // White outer ellipse
      fill(255, 255, 255);
      ellipse(this.x, this.y, 120, 120);

      // Yellow centre ellipse
      fill(255, 255, 0);
      ellipse(this.x, this.y, 50, 50);
      break;

    default:
      fill(220, 180, 120);
      ellipse(this.x, this.y, this.sz);
  }
}

  // Add a move() method — update this.x or this.y based on which key is pressed
  move() {
   switch (key) {
    case RIGHT_ARROW:
      this.x += 50;
      break;

    case LEFT_ARROW:
      this.x -= 50;
      break;

    case UP_ARROW:
      this.y -= 50;
      break;

    case DOWN_ARROW:
      this.y += 50;
      break;
    }
  }

  // Add a randomFlavor() method — set this.flavor to one of at least 3 options
  randomFlavor() {
    let flavors = ["chocolate", "vanilla", "strawberry", "egg"];
    this.flavor = random(flavors);
  }
}

// Call cookie.move() when an arrow key is pressed
function keyPressed() {
  if (key == 1 || key == 2);
  cookie.move();
}

// Call cookie.randomFlavor() when the mouse is clicked
function mousePressed() {
  cookie.randomFlavor();
  cookie.x = width / 2;
  cookie.y = height / 2;
}
