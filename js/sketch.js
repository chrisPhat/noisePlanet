let seed, mySize;
let angle_c;
let colors = [];
let colors7 = "fefefe-292929-ffffff-222222-202020".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let branch;

function setup() {
	// pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	// createCanvas(mySize, mySize);
	createCanvas(windowWidth, windowHeight);
	seed = int(random(1000));
	colorMode(HSB, 360, 100, 100, 100);
	color_setup1 = colors7;
	color_setup2 = colors8;
	color_bg = "#000000";
	background(color_bg);
	angle_c = 0;
	branch = 4;
}

function draw() {
	randomSeed(seed);
	drawingContext.shadowColor = str(random(color_setup1)) + "00";
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;
	drawingContext.shadowBlur = 0;
	translate(width / 2, height / 2);
	rotate(angle_c);
	for (let i = 0; i < 1; i++) {
		colors[0] = random(color_setup1);
		colors[1] = random(color_setup1);
		colors[2] = random(color_setup1);
		colors[3] = random(color_setup1);
		colors[4] = random(color_setup2);
		circleForm(0, 0, mySize * 1.5 * (i + 1)/2);
	}

	if (frameCount % 10 == 0 && branch < 100) {
		branch += 3;
		angle_c += TAU / 4;
	} else if (branch >= 100) {
		angle_c = 0;
	branch = 4;
		angle_c = 0;
	}
}

function circleForm(x, y, d) {


	let ang = TAU / branch;
	let angles = [];
	for (let i = 0; i < branch; i++) {
		angles.push(ang * (i + iteration(0.1, 0.25)));
	}
	for (let i = 0; i < branch; i++) {
		let ang1 = angles[i];
		let ang2 = angles[(i + int(random(6))) % angles.length];
		let dd = d * iteration(0, 1);
		noFill();
		drawingContext.shadowColor = random(color_setup1);
		drawingContext.shadowOffsetX = random(-5, 5);
		drawingContext.shadowOffsetY = random(-5, 5);
		drawingContext.shadowBlur = 0;
		stroke(colors[random([0, 1, 2, 3, 4])]);
		strokeWeight(random(1));
		arc(x, y, dd, dd, ang1, ang2);
	}
}

function iteration(s, e) {
	let t = random(10, 100);
	let v = random(0.001, 0.01);
	return map(cos(t + frameCount * v), -1, 1, s, e);
}

function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("NoisePlanet_DELTA_2022", "png");
	}
}

//fullscreen
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}