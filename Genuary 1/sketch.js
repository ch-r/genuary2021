function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  // translate(-width/4, -height/4);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);

  let side = 200;
  let inc = 40;
  let rad = 1 + 3 * abs(sin(frameCount/100));
  noStroke();
  
  for (a=-side; a<side; a+=inc){
    push();
    translate(a, 0, 0);
    for (b=-side; b<side; b+=inc){
      push();
      translate(0, b, 0);
      for (c=-side; c<side; c+=inc){
        push();
        translate(0, 0, c);
        sphere(rad*(a+b+c)/200, 12, 12);
        pop();  
      }
      pop();
    }
    pop();
  }
}