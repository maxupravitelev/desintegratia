let animationCounter = 0;
let frame_width = 400;
let frame_height = 450;
let coinAnimationCounter = 0;
let coin_frame_width = 24;
let coin_frame_height = 24;
let canvas = document.getElementById("gameCanvas");
let canvasContext = canvas.getContext("2d");
let gameState = 'INIT';
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = 896;
};
window.onload = () => {
    getHighscoresFromBackend();
};
document.getElementById("startFullscreen").addEventListener("click", () => {
    let gameCanvas = document.getElementById("gameCanvas");
    if (gameCanvas.requestFullscreen) {
        gameCanvas.requestFullscreen();
    }
    else if (gameCanvas.mozRequestFullScreen) {
        gameCanvas.mozRequestFullScreen();
    }
    else if (gameCanvas.webkitRequestFullscreen) {
        gameCanvas.webkitRequestFullscreen();
    }
    else if (gameCanvas.msRequestFullscreen) {
        gameCanvas.msRequestFullscreen();
    }
    startSpotifyPlayer();
});
var currentTime = 0;
var deltaTime = 0;
var pastTime = (new Date()).getTime();
var framesPerSecond = 1 / 60;
const gameloop = () => {
    console.log(gameState);
    if (!(gameState === 'INIT')) {
        currentTime = (new Date()).getTime();
        deltaTime = deltaTime + Math.min(1, (currentTime - pastTime) / 1000);
        while (deltaTime > framesPerSecond) {
            deltaTime = deltaTime - framesPerSecond;
            moveAll();
            inputHandling();
            animationCounter = animationCounter + 0.1;
            coinAnimationCounter = coinAnimationCounter + 0.2;
        }
        drawAll();
        pastTime = currentTime;
        requestAnimationFrame(gameloop);
    }
    else {
        const startGame = () => {
            gameState = 'START';
            document.removeEventListener("mousedown", startGame);
            document.removeEventListener("keydown", startGame);
            document.removeEventListener("touchstart", startGame);
        };
        canvasContext.drawImage(startScreen, 0, 0);
        document.addEventListener("keydown", startGame);
        document.addEventListener("mousedown", startGame);
        document.addEventListener("touchstart", startGame);
        requestAnimationFrame(gameloop);
        window.requestAnimationFrame(animate);
    }
};
const imageLoadingDoneSoStartGame = () => {
    requestAnimationFrame(gameloop);
};
const keyPressed = (evt) => {
    if (evt.keyCode == 32) {
        (gameState === 'GAME_OVER') ? reset() : jump();
    }
};
const animate = () => {
    if (gameState === 'START') {
        let coin_frame = Math.floor(coinAnimationCounter % 8);
        if (gameState === 'GAME_OVER') {
            coin_frame = Math.floor(coinAnimationCounter % 1);
        }
        canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin1.x, coin1.y, coin_frame_width * 2, coin_frame_height * 2);
        let frame = Math.floor(animationCounter % 2);
        if (gameState === 'GAME_OVER') {
            frame = Math.floor(animationCounter % 1);
        }
        canvasContext.drawImage(playerSprite, frame * frame_width, 0, frame_width, frame_height, player.x, player.y + 26, frame_width / 2, frame_height / 2);
        window.requestAnimationFrame(animate);
    }
};
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
    gameState = 'START';
    player.jumping == false;
};
const inputHandling = () => {
    if (gameState === 'START') {
        document.addEventListener("keydown", keyPressed);
        document.removeEventListener("mousedown", reset);
        document.addEventListener("mousedown", jump);
        document.addEventListener("touchstart", jump);
    }
    if (gameState === 'GAME_OVER') {
        document.removeEventListener("mousedown", jump);
        document.addEventListener("mousedown", reset);
    }
};
