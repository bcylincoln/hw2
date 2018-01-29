background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.05);
  
  fill(200 + random(30), 70 + random(30), 90 + random(10));

  ellipse(random(width), random(height), random(20, 40));
}