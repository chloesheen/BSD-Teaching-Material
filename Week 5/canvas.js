
/* JavaScript */

var ctx = document.getElementById("canvas").getContext("2d");
var xPos = 420;

function draw() {
		/* sky */
		ctx.rect(0, 0, 600, 400);
		ctx.fillStyle = "thistle";
		ctx.fill();
		var grd=ctx.createLinearGradient(0,0,290,0);
		grd.addColorStop(0,"red");
		grd.addColorStop(1,"white");

		ctx.fillStyle=grd;
		ctx.fillRect(0,0,600,400);

		/* ground */
		ctx.beginPath();
		ctx.rect(0, 280, 600, 120);
		ctx.fillStyle = "green";
		ctx.fill();

		/* house body */
		ctx.beginPath();
		ctx.rect(100, 200, 150, 100);
		ctx.fillStyle = "beige";
		ctx.fill();

		/* house roof */
		ctx.beginPath();
		ctx.moveTo(90, 200);
		ctx.lineTo(120, 180);
		ctx.lineTo(230, 180);
		ctx.lineTo(260, 200);
		ctx.fillStyle = "firebrick";
		ctx.fill();

		/* door */
		ctx.beginPath();
		ctx.moveTo(150, 250);
		ctx.lineTo(150, 300);
		 ctx.lineTo(200, 300);
		ctx.lineTo(200, 250);
		ctx.fillStyle = "black";
		ctx.fill();

		/* the Sun */
		ctx.beginPath();
		ctx.arc(xPos, 100, 40, 0, 2 * Math.PI);
		ctx.fillStyle = "goldenrod";
		ctx.fill();

	/* the clouds */
		ctx.beginPath();
		ctx.arc(200, 100, 25, 0, 2 * Math.PI);
	ctx.arc(180, 80, 25, 0, 2 * Math.PI);
	ctx.arc(210, 60, 20, 0, 2 * Math.PI);
	ctx.arc(230, 60, 20, 0, 2 * Math.PI);
	ctx.arc(260, 90, 20, 0, 2 * Math.PI);
	ctx.arc(240, 100, 20, 0, 2 * Math.PI);
		ctx.fillStyle = "white";
		ctx.fill();


		/* the Tree */
		ctx.beginPath();
		ctx.moveTo(370, 300);
		ctx.lineTo(380, 200);
		ctx.lineTo(385, 200);
		ctx.lineTo(400, 300);
		ctx.fillStyle = "#846739";
		ctx.fill();

		/* Tree leaves */
		ctx.beginPath();
		ctx.arc(400, 200, 30, 0, 2 * Math.PI);
		ctx.arc(380, 180, 30, 0, 2 * Math.PI);
		ctx.arc(360, 200, 30, 0, 2 * Math.PI);
		ctx.arc(380, 200, 30, 0, 2 * Math.PI);
		ctx.arc(400, 200, 30, 0, 2 * Math.PI);
		ctx.fillStyle = "green";
		ctx.fill();

	xPos = xPos + 1;

		 if(xPos > 600) {
			xPos = -40;
		}

}


setInterval(draw,16);
