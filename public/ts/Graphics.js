const colorRect = (topLeftX, topLeftY, boxWidth, boxHeight, fillColor) => {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
};
const drawAll = () => {
    canvasContext.drawImage(alps, alpsX, 0);
    canvasContext.drawImage(key, key1.x, key1.y);
    canvasContext.drawImage(wall_sprite, wall1.x, wall1.y);
    canvasContext.drawImage(wall_sprite, wall2.x, wall2.y);
    canvasContext.drawImage(end, endX, endY);
    canvasContext.drawImage(ground_stripe, ground_stripeX, ground_stripeY);
    colorRect(canvas.width - 257, 44, 226, 29, "black");
    colorRect(canvas.width - 254, 47, 220, 23, "#5e5b53");
    if (levelCounter < 4000) {
        colorRect(canvas.width - 250, 51, levelCounter / 20, 16, "yellow");
    }
    else {
        levelCounter = 0;
        currentLevel++;
    }
    canvasContext.fillStyle = "black";
    canvasContext.font = "bold 15px Arial";
    canvasContext.fillText("Level: " + currentLevel, canvas.width - 330, 60);
    canvasContext.fillText(highscore, canvas.width - 170, 65);
    canvasContext.fillText("Best Highscore: " + bestHighScore, canvas.width - 210, 38);
    canvasContext.fillText("#1 " + globalScores[0].playerName + " " + globalScores[0].score, canvas.width - 250, 95);
    canvasContext.fillText("#2 " + globalScores[1].playerName + " " + globalScores[1].score, canvas.width - 250, 110);
    canvasContext.fillText("#3 " + globalScores[2].playerName + " " + globalScores[2].score, canvas.width - 250, 125);
    canvasContext.fillText("#4 " + globalScores[3].playerName + " " + globalScores[3].score, canvas.width - 250, 140);
    canvasContext.fillText("#5 " + globalScores[4].playerName + " " + globalScores[4].score, canvas.width - 250, 155);
};
