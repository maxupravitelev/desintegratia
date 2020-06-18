let counter = 0;

let highscore = 0;
let thisHighscore = 0;
let bestHighScore = 0;

let dead = false;

let frame_width = 400;
let frame_height = 450;

canvas = document.getElementById("gameCanvas");
canvasContext = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = function () {
    
    if (window.innerWidth < 700 ) {
        resizeCanvas();
    }


    // canvas.height = innerHeight;
    // canvas.width = innerWidth;

    loadImages();

};

var currentTime = 0;
var deltaTime = 0;
var pastTime = (new Date()).getTime();
var framesPerSecond = 1 / 60;

function gameloop() {
    currentTime = (new Date()).getTime();
    deltaTime = deltaTime + Math.min(1, (currentTime - pastTime) / 1000);           // Source: https://codeincomplete.com/articles/javascript-game-foundations-the-game-loop/
    while (deltaTime > framesPerSecond) {
        deltaTime = deltaTime - framesPerSecond;
        moveAll();
    }
    drawAll();
    pastTime = currentTime;
    requestAnimationFrame(gameloop);
}


function imageLoadingDoneSoStartGame() {
    requestAnimationFrame(gameloop);
    window.requestAnimationFrame(animate);
}

function keyPressed(evt) {
    if (evt.keyCode == 32) {
        dead ? reset() : jump();
    }
}

function animate() {
    let frame = Math.floor(counter % 2);
    if (dead == true) {
        frame = Math.floor(counter % 1);
    }

    if (key1.x <= 340) {
        cheSprite.src = "image/angry.png";
    }
    //  canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    canvasContext.drawImage(
        cheSprite,
        frame * frame_width,
        0,
        frame_width,
        frame_height,
        che.x,
        che.y + 13,
        frame_width / 4,
        frame_height / 4
    );
    counter = counter + 0.1;
    window.requestAnimationFrame(animate);
}



function highscoreCount() {
    if (highscore >= bestHighScore) {
        bestHighScore = highscore;
    }
}

function reset() {
    cheSprite.src = "image/che-sprite_450x400_transparent.png";

    highscore = 0;

    endY = -500;
    alpsX = 0;

    key1.x = canvas.width;
    key1.y = 300;

    wall1.speed = 8;
    wall2.speed = 8;

    speedFactor = 1;

    wall1.x = 700;
    wall1.collision();
    wall2.x = wall1.x + wallDistance;

    gameReset();

    dead = false;
    che.jumping == false;
}

function gameReset() {
    if (dead == false) {
        document.addEventListener("keydown", keyPressed);
        document.removeEventListener("mousedown", reset);
        document.addEventListener("mousedown", jump);
        document.addEventListener("touchstart", jump);
    }
    if (dead == true) {
        document.removeEventListener("mousedown", jump);
        document.addEventListener("mousedown", reset);
    }
}
