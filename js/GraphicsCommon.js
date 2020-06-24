const colorRect = (topLeftX, topLeftY, boxWidth, boxHeight, fillColor) => {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

const drawAll = () => {
    colorRect(0, 0, canvas.width, canvas.height);

    canvasContext.drawImage(alps, alpsX, 0);
    //   colorRect(0, 0, canvas.width, canvas.height, "black");

    // canvasContext.drawImage(key, key1.x, key1.y);
    canvasContext.drawImage(wall_sprite, wall1.x, wall1.y);
    canvasContext.drawImage(wall_sprite, wall2.x, wall2.y);


    // level bar

    colorRect(canvas.width - 257, 44, 226, 29, "black");
    colorRect(canvas.width - 254, 47, 220, 23, "#5e5b53");
    colorRect(canvas.width - 250, 51, highscore / 20, 16, "yellow");

    // let levelBarLength = 226;
    // colorRect(canvas.width / 2 - levelBarLength / 2 - 7, canvas.height - 50, levelBarLength, 29, "black");
    // colorRect(canvas.width / 2 - levelBarLength / 2 - 4, canvas.height - 47, levelBarLength - 6, 23, "#5e5b53");
    // colorRect(canvas.width / 2 - levelBarLength / 2 - 0, canvas.height - 43, highscore / 20, 16, "yellow");


    canvasContext.drawImage(end, endX, endY);
    canvasContext.drawImage(ground_stripe, ground_stripeX, ground_stripeY);

    canvasContext.fillStyle = "white";
    canvasContext.font = "bold 15px Arial";
    
    // level bar counter
    canvasContext.fillText(highscore, canvas.width - 170, 65);
    canvasContext.fillText("Best Highscore: " + bestHighScore, canvas.width - 210, 38);
    // canvasContext.fillText(highscore, canvas.width / 2 - levelBarLength / 2 + 90, canvas.height - 30);
    // canvasContext.fillText("Best Highscore: " + bestHighScore, canvas.width / 2 - levelBarLength / 2 - 7, canvas.height - 60);
    
    canvasContext.font = "15px Arial";


    // canvasContext.fillText("Jump = Space/Mouse/Touch", 50, 50);
    // canvasContext.fillText("New Game = Space/Mouse/Touch after Game Over", 50, 70);
}
