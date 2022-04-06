let img; // Declare variable 'img'.

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('background2.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
}
