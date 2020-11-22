let animationCounter:number = 0;

let frame_width:number = 400;
let frame_height:number = 450;

let coinAnimationCounter:number = 0;
let coin_frame_width:number = 24;
let coin_frame_height:number = 24;

let canvas: any = document.getElementById("gameCanvas");
let canvasContext: any = canvas.getContext("2d");

let gameState: string = 'INIT'

let currentPlayerSprite;

// window.addEventListener("resize", resizeCanvas, false);


const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = 896; // height of background image
}

window.onload = () => {
    
    // if (window.innerWidth < 800 ) {
    //     resizeCanvas();
    // }


    
    // if (window.innerHeight > window.innerWidth) {
    //     resizeCanvas();
    // }

    getHighscoresFromBackend();

};

var currentTime:number = 0;
var deltaTime:number = 0;
var pastTime = (new Date()).getTime();
var framesPerSecond:number = 1 / 60;

const gameloop = () => {

    if (!(gameState === 'INIT')) {
        currentTime = (new Date()).getTime();
        deltaTime = deltaTime + Math.min(1, (currentTime - pastTime) / 1000);           // Source: https://codeincomplete.com/articles/javascript-game-foundations-the-game-loop/
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
    } else {

        const startGame = () => {
            gameState = 'START'
            document.removeEventListener("mousedown", startGame);
            document.removeEventListener("keydown", startGame);
            document.removeEventListener("touchstart", startGame);
            window.requestAnimationFrame(animate); 

        }

        canvasContext.drawImage(startScreen, 0, 0);

        document.addEventListener("keydown", startGame);
        document.addEventListener("touchstart", startGame);
        document.addEventListener("mousedown", startGame);
        requestAnimationFrame(gameloop);
        // window.requestAnimationFrame(animate);    

    }
}



const imageLoadingDoneSoStartGame = () => {
    requestAnimationFrame(gameloop);
    // window.requestAnimationFrame(animate);
    currentPlayerSprite = playerSprite;

    
}

const keyPressed = (evt) => {
    if (evt.keyCode == 32) {
        (gameState === 'GAME_OVER') ? reset() : jump();
    }
}




const animate = () => {
    // if (gameState === 'START') {
    
    
    let coin_frame = Math.floor(coinAnimationCounter % 8);

    if (gameState === 'GAME_OVER') {
        coin_frame = Math.floor(coinAnimationCounter % 1);
    }
        //  canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin1.x, coin1.y, coin_frame_width * 2, coin_frame_height * 2);
        // canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin2.x, coin2.y, coin_frame_width * 2, coin_frame_height * 2);
        // canvasContext.drawImage(coin_sprite, coin_frame * coin_frame_width, 0, coin_frame_width, coin_frame_height, coin3.x, coin3.y, coin_frame_width * 2, coin_frame_height * 2);

    let frame = Math.floor(animationCounter % 2);

    if (gameState === 'GAME_OVER') {
        frame = Math.floor(animationCounter % 1);
    }

    

    if (key1.x <= (keyStopX - 10)) {
        currentPlayerSprite = playerAngrySprite;
    }
    //  canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    canvasContext.drawImage(currentPlayerSprite, frame * frame_width, 0, frame_width, frame_height, player.x, player.y + 26, frame_width / 2, frame_height / 2 );
    window.requestAnimationFrame(animate);    
    // }
}



const reset = () => {
    currentPlayerSprite = playerSprite;

    highscore = 0;
    levelCounter = 0;

    endY = -500;
    alpsX = 0;

    key1.x = canvas.width - 10;
    key1.y = 500;

    wall1.speed = 8;
    wall2.speed = 8;
    levelCounter = 0;

    speedFactor = 1;

    wall1.x = 700;
    wall1.collision();
    wall2.x = wall1.x + wallDistance;

    gameState = 'START';
    player.jumping == false;
}

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
}


