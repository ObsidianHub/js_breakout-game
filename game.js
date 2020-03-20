// select canvas elements
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");

// add border to canvas
cvs.style.border = "1px solid #off";

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

drawPaddle();
