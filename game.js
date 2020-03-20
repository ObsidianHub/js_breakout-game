// select canvas elements
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");

// add border to canvas
cvs.style.border = "1px solid #off";

// make line when drawing to canvas
ctx.lineWidth = 3;

// game variables and constants
const PADDLE_WIDTH = 100;
const PADDGE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;

// create the paddle
const paddle = {
  x: cvs.width / 2 - PADDLE_WIDTH / 2,
  y: cvs.height - PADDGE_MARGIN_BOTTOM - PADDLE_HEIGHT,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  dx: 5
};

// draw paddle
function drawPaddle() {
  ctx.fillStyle = "#2e3548";
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

  ctx.strokeStyle = "#ffcd05";
  ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// control the paddle
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 37) {
    leftArrow = true;
  } else if (event.keyCode == 39) {
    rightArrow = true;
  }
});

// draw function
function draw() {
  drawPaddle();
}

// update game function
function update() {}

// game loop
function loop() {
  // clear the canvas
  ctx.drawImage(BG_IMG, 0, 0);

  draw();

  update();

  requestAnimationFrame(loop);
}

loop();
