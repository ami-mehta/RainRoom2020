// Rain Class

// See the rest of the code in sketch.js

// Create a class for the rain
class Rain {
  // Construct the parameters or fields
  constructor() {
    this.x = random(width);
    this.y = random(-800, -100);
    this.size = 10;
    this.speed = random(10, 30);
  }
  // Add a shower function to make it rain
  shower() {
    // Add raindrop motion
    this.y = this.y + this.speed;
    // Reset raindrop height and x-position when it falls off the bottom of the screen
    if (this.y > height) {
      this.y = random(-800, -100);
      // Update x-position to follow mouseX for a smaller waterfall effect
      if (mouseX >= 50 && mouseX <= width - 50) {
        this.x = random(mouseX - 50, mouseX + 50);
        // If the mouse is not hovering on the screen then make it rain again
      } else {
        this.x = random(width);
      }
    }
  }
  // Add a show function to display raindrops
  show() {
    stroke(161, 184, 202);
    strokeWeight(1);
    line(this.x, this.y, this.x, this.y + this.size);
  }
}