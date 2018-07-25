//Event Listeners for mouse actions
canvas.addEventListener('mousedown', startLine);
canvas.addEventListener('mouseup', endLine);
canvas.addEventListener('mousemove', brush);
canvas.addEventListener('mouseout', reset);

var ctx = document.getElementById("canvas").getContext("2d");

//startX/Y Records where the mouse is clicked down
var startX = 0;
var startY = 0;

//endX/Y records where the mouse button is lifted up
var endX = 0;
var endY = 0;

//keeps track of ctx settings
var color = "black";
var width = 1;

//Flag for whether mouse button is down or up
var down = false;


//Triggers on mouse down
function startLine(event) {
		startX = event.clientX;
		startY = event.clientY;
		down = true;
}

//Triggers on mouse up
function endLine(event) {
		endX = event.clientX;
		endY = event.clientY;
		ctx.strokeStyle = color;
		ctx.lineWidth = width;

		down = false;

		ctx.beginPath();
		if (toolkit.value == "Line") {
				ctx.moveTo(startX, startY);
			ctx.lineTo(endX, endY);
		}
		ctx.stroke();
		ctx.closePath();
}

function brush(event) {
		if (down && toolkit.value !== "Line") {
						endX = event.clientX;
				endY = event.clientY;
				ctx.strokeStyle = color;
				ctx.lineWidth = width;

						ctx.beginPath();
						if (toolkit.value == "Brush") {
							ctx.fillStyle = color;
					} else if (toolkit.value == "Eraser") {
							ctx.fillStyle = "white";
					}
				ctx.arc(endX, endY, width, 0, 2 * Math.PI);
						ctx.fill();
						ctx.closePath();
		}

		if (toolkit.value == "Brush") {
							ctx.fillStyle = color;
					} else if (toolkit.value == "Eraser") {
							ctx.fillStyle = "white";
					} else if (toolkit.value == "Rainbow") {
							ctx.fillStyle = "hsl(" + endX + ", 100%, " + endY/6 + "%)";
					}
}


function reset() {
		down = false;
}

function changeColor(input) {
		color = input.value;
}

function changeWidth(input) {
		width = input.value;
}
