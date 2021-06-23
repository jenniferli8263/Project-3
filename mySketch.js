let rct = { // defining rectangle object
	x: 85,
	y: 65,
	xspeed: 10,
	yspeed: 10,
	l: 40, // this is half of the rectangle's actual length, I did this because it helped with recognizing whether the shapes were touching
	w: 30 // also half of the rectangle's actual width
}

let y = 500; // defining variables for the circle
let yspeed = -12;
let x;
let r = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
	x = windowWidth/2;
	rectMode(CENTER);
	textAlign(RIGHT, BOTTOM);
}

function draw() {
	background(0);
	line(0,windowHeight - 90,windowWidth, windowHeight - 90);
	fill(153,204,255);
	textSize(50);
	text('Jennifer Li', windowWidth - 20, windowHeight); // I adjusted the X coordinate a little bit so it shows up better
	bounce();
	shoot();
	check();
}

function bounce(){ // a function that bounces the rectangle around
	fill(204, 255, 229); // light green
	stroke(153,255,153); // green
	strokeWeight(5);
	rect(rct.x, rct.y, rct.l*2, rct.w*2);
	rct.x += rct.xspeed;
	rct.y += rct.yspeed;
	if (rct.x >= windowWidth - 80 || rct.x <= 0){ // preventing the rectangle from going off screen
		rct.xspeed = rct.xspeed * -1; // will create horizontal bounce since ball will go the other way
	}
	if (rct.y >= windowHeight - 140 || rct.y <= 0){ // preventing the rectangle from going off screen, will create vertical bounce
		rct.yspeed = rct.yspeed * -1; // will create vertical bounce 
	}
}

function shoot(){ // function that shoots the ball
	fill(255,102,102); // red
	stroke(153,204,255); // blue
	strokeWeight(3);
	ellipse(x, y, r*2, r*2);
	y += yspeed;
	if (mouseIsPressed){ // when the mouse is pressed, circle will go to mouse's location
		y = mouseY;
		x = mouseX;
	}
}

function check(){ // checks whether the ball has hit the rectangle
	let d = dist(rct.x, rct.y, x, y); // checks distance between shapes
	if (d <= r + rct.l|| d <= r + rct.w){ 
// if distance is smaller than the half of the rectangle's length/width plus the circle's radius, then the shapes are touching and the rectangle will change shape
		rct.l = int(random(5,150)); // changes rectangle's dimensions after hitting it
		rct.w = int(random(5,50));
	}
}
