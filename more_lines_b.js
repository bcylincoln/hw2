function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), width/2 + random(width/2), random(height/2));
}