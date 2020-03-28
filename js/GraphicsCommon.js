


function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}




  function drawAll() {
    
    canvasContext.drawImage(alpen, alpenX,0);
 //   colorRect(0, 0, canvas.width, canvas.height, "black");


    canvasContext.drawImage(key, key1.x, key1.y);
    

    colorRect(wall1.x, wall1.y, wall1.width, wall1.height, "brown");
    colorRect(wall2.x, wall2.y, wall2.width, wall2.height, "darkred");


    canvasContext.drawImage(end, canvas.width/2-400, endY);
    canvasContext.drawImage(ground_stripe, ground_stripeX, 500);

    canvasContext.fillStyle = "white";
    canvasContext.font = "20px Arial";
    canvasContext.fillText('Highscore: ' + highscore, canvas.width-200, 50);
    canvasContext.font = "15px Arial";
    canvasContext.fillText('Springen = Leertaste/Mausklick/Touch', 50, 50);
    canvasContext.fillText('F5 = neues Spiel', 50, 70);
}