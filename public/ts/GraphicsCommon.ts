const colorRect = (topLeftX: number, topLeftY: number, boxWidth: number, boxHeight: number, fillColor?: string) => {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

const drawAll = () => {
    // if (gameState = 'INIT') {
    //     canvasContext.drawImage(startScreen, 0, 0);
    // } else {
    
    colorRect(0, 0, canvas.width, canvas.height);

    canvasContext.drawImage(alps, alpsX, 0);
    //   colorRect(0, 0, canvas.width, canvas.height, "black");

    // canvasContext.drawImage(key, key1.x, key1.y);
    canvasContext.drawImage(wall_sprite, wall1.x, wall1.y);
    canvasContext.drawImage(wall_sprite, wall2.x, wall2.y);


    canvasContext.drawImage(end, endX, endY);
    canvasContext.drawImage(ground_stripe, ground_stripeX, ground_stripeY);

    // level bar

    colorRect(canvas.width - 257, 44, 226, 29, "black");
    colorRect(canvas.width - 254, 47, 220, 23, "#5e5b53");
    

    // level bar counter
   
    if (levelCounter < 4000) {
    colorRect(canvas.width - 250, 51, levelCounter / 20, 16, "yellow");
    } else {
        levelCounter = 0;
        currentLevel++;
    }
   
    canvasContext.fillStyle = "black";
    canvasContext.font = "bold 15px Arial";

    canvasContext.fillText("Level: " + currentLevel, canvas.width - 330, 60);

    canvasContext.fillText(highscore, canvas.width - 170, 65);
    canvasContext.fillText("Best Highscore: " + bestHighScore, canvas.width - 210, 38);
    
    

    // highscore table
    canvasContext.fillText("#1 " + globalScores[0].playerName + " " + globalScores[0].score, canvas.width - 250, 95);
    canvasContext.fillText("#2 " + globalScores[1].playerName + " " + globalScores[1].score, canvas.width - 250, 110);
    canvasContext.fillText("#3 " + globalScores[2].playerName + " " + globalScores[2].score, canvas.width - 250, 125);

    // canvasContext.textAlign = "right"

    
    // canvasContext.fillText(highscore, canvas.width / 2 - levelBarLength / 2 + 90, canvas.height - 30);
    // canvasContext.fillText("Best Highscore: " + bestHighScore, canvas.width / 2 - levelBarLength / 2 - 7, canvas.height - 60);
    
    // canvasContext.font = "15px Arial";


    // canvasContext.fillText("Jump = Space/Mouse/Touch", 50, 50);
    // canvasContext.fillText("New Game = Space/Mouse/Touch after Game Over", 50, 70);
// }
}
