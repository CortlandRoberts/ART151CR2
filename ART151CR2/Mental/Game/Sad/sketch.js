function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  happyFace();




}


function happyFace(){
  fill(220);
  circle(200, 200, 300);
  //for the eyes
  circle(130, 150, 50);
  circle(250, 150, 50);

  //for the mouth
  line(300, 200, 85, 200);


}

function sadFace(){
   fill(220);
  circle(200, 200, 300);
  //for the eyes
  circle(130, 150, 50);
  circle(250, 150, 50);

  //for the mouth
  line(300, 200, 85, 200);
}
