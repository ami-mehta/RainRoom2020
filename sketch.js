// "Rain Room" (2020)

// See the template for the "Rain Class" in the file rain.js

// Declare variables for modular drops and images
let rainDrops = 300;
let rainDrop = [];
let splashBomb;
let lilies;

// Load the images onto the canvas
function setup() {
  createCanvas(800, 800);
  splashBomb = loadImage('assets/splashBomb.png');
  lilies = loadImage('assets/lilies.png');

  // Multiply raindrop instances using loop, index, and array
  for (let i = 0; i < rainDrops; i++) {
    rainDrop[i] = new Rain();
  }
}

// Call the functions in order
function draw() {
  atrium();
  ground();
  columns();
  door();
  windows();
  updateRainDrops();
}

// Add functions to update raindrops falling against the background
function updateRainDrops() {
  for (let i = 0; i < rainDrops; i++) {
    // Draw functions from Rain Class
    rainDrop[i].show();
    rainDrop[i].shower();
  }
}

// Add different functions to compose the background
function atrium() {
  noStroke();
  background(236, 243, 235); // Cabbage White
  stroke(255);
  line(420, 520, 420, 313);
  stroke(255);
  line(325, 305, 325, 0);
  image(splashBomb, 55, 385, 160, 90); // Use image of splashBomb
  image(lilies, 570, 385, 200, 100); // Use image of lilies
}

// Ground
function ground() {
  fill(68, 78, 86);
  noStroke();
  beginShape();
  vertex(420, 520);
  vertex(800, 555);
  vertex(800, 800);
  vertex(0, 800);
  vertex(0, 560);
  endShape();
}

// Windows
function windows() {
  beginShape(QUADS);
  noStroke();
  fill(235, 214, 190);
  quad(700, -10, 700, 230, 625, 235, 625, -10);
  quad(185, 5, 185, 145, 295, 160, 295, 20);
  quad(185, 200, 185, 270, 285, 280, 285, 212);
  endShape();
}

// Door
function door() {
  noStroke();
  fill(235, 214, 190);
  quad(445, 360, 485, 358, 485, 526.4, 445, 522.4);
}

// Columns
function columns() {
  noStroke();
  fill(255);
  quad(380, 308, 380, 545, 325, 550, 325, 305);
  quad(325, 305, 325, 550, 300, 540, 300, 315);
  quad(325, 305, 800, 275, 800, 290, 380, 315);
  quad(325, 305, 0, 280, 0, 295, 300, 315);

  // Bench
  noStroke();
  fill(0);
  quad(85, 575, 215, 560, 240, 575, 105, 590);
  strokeWeight(1);
  stroke(0);
  line(86, 575, 86, 590);
  line(238, 574, 238, 588);
  line(105, 590, 105, 602);
  line(210, 575, 210, 585);
}