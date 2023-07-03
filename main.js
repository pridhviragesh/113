function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 220, 145, 200, 200);
  tint(tint_color);
  fill("blue");
  stroke("yellow");
  circle(90, 75, 100);
  circle(90, 400, 100);
  circle(550, 400, 100);
  circle(550, 75, 100);
  fill("red");
  rect(136, 59, 367, 40);
  rect(136, 380, 367, 40);
  rect(72, 122, 40, 232);
  rect(530, 122, 40, 232);

}


function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}

