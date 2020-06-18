function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function drawAll() {
    canvasContext.drawImage(alps, alpsX, 0);
    //   colorRect(0, 0, canvas.width, canvas.height, "black");

    canvasContext.drawImage(key, key1.x, key1.y);

    colorRect(wall1.x, wall1.y, wall1.width, wall1.height, "brown");
    colorRect(wall2.x, wall2.y, wall2.width, wall2.height, "darkred");

    // level bar
    colorRect(canvas.width - 257, 44, 226, 29, "black");
    colorRect(canvas.width - 254, 47, 220, 23, "#5e5b53");
    colorRect(canvas.width - 250, 51, highscore / 20, 16, "yellow");


    canvasContext.drawImage(end, canvas.width / 2 - 400, endY);
    canvasContext.drawImage(ground_stripe, ground_stripeX, 500);

    canvasContext.fillStyle = "black";
    canvasContext.font = "bold 15px Arial";
    canvasContext.fillText(highscore, canvas.width - 170, 65);
    canvasContext.fillText("Best Highscore: " + bestHighScore, canvas.width - 210, 38);
    canvasContext.font = "15px Arial";
    canvasContext.fillText("Jump = Space/Mouse/Touch", 50, 50);
    canvasContext.fillText("New Game = Space/Mouse/Touch after Game Over", 50, 70);
}
