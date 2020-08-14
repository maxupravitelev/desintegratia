let animationCounter = 0;
let frame_width = 400;
let frame_height = 450;

let coinAnimationCounter = 0;
let coin_frame_width = 24;
let coin_frame_height = 24;



let dead = false;



let canvas: any = document.getElementById("gameCanvas");
let canvasContext = canvas.getContext("2d");

// window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = () => {
    
    if (window.innerWidth < 800 ) {
        // resizeCanvas();
    }

    loadImages();

};

var currentTime = 0;
var deltaTime = 0;
var pastTime = (new Date()).getTime();
var framesPerSecond = 1 / 60;

const gameloop = () => {
    currentTime = (new Date()).getTime();
    deltaTime = deltaTime + Math.min(1, (currentTime - pastTime) / 1000);           // Source: https://codeincomplete.com/articles/javascript-game-foundations-the-game-loop/
    while (deltaTime > framesPerSecond) {
        deltaTime = deltaTime - framesPerSecond;
        moveAll();
        animationCounter = animationCounter + 0.1;
        coinAnimationCounter = coinAnimationCounter + 0.2;

    }
    drawAll();
    pastTime = currentTime;
    requestAnimationFrame(gameloop);
}


const imageLoadingDoneSoStartGame = () => {
    requestAnimationFrame(gameloop);
    window.requestAnimationFrame(animate);
}

const keyPressed = (evt) => {
    if (evt.keyCode == 32) {
        dead ? reset() : jump();
    }
}

const animate = () => {
    
    let coin_frame = Math.floor(coinAnimationCounter % 8);
    if (dead == true) {
        coin_frame = Math.floor(coinAnimationCounter % 1);
    }
    
        //  canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin1.x, coin1.y, coin_frame_width * 2, coin_frame_height * 2);
        // canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin2.x, coin2.y, coin_frame_width * 2, coin_frame_height * 2);
        // canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin3.x, coin3.y, coin_frame_width * 2, coin_frame_height * 2);


    let frame = Math.floor(animationCounter % 2);
    if (dead == true) {
        frame = Math.floor(animationCounter % 1);
    }

    // if (key1.x <= 340) {
    //     playerSprite.src = "image/angry.png";
    // }
    //  canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    canvasContext.drawImage(
        playerSprite,
        frame * frame_width,
        0,
        frame_width,
        frame_height,
        player.x,
        player.y + 26,
        frame_width / 2,
        frame_height / 2
    );
    window.requestAnimationFrame(animate);    
    
}

const highscoreCount = () => {
    if (highscore >= bestHighScore) {
        bestHighScore = highscore;
    }
}

const reset = () => {
    playerSprite.src = "image/player-sprite.png";

    highscore = 0;
    levelCounter = 0;

    endY = -500;
    alpsX = 0;

    key1.x = canvas.width;
    key1.y = 300;

    wall1.speed = 8;
    wall2.speed = 8;
    levelCounter = 0;

    speedFactor = 1;

    wall1.x = 700;
    wall1.collision();
    wall2.x = wall1.x + wallDistance;

    inputHandling();

    dead = false;
    player.jumping == false;
}

const inputHandling = () => {
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
