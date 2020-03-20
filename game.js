// select canvas elements
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");

// add border to canvas
cvs.style.border = "1px solid #off";

// game variables and constants
const PADDLE_WIDTH = 100;
const PADDGE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;
