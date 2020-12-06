let speedFactor = 1;
let ground_stripeX = 0;
let ground_stripeY = canvas.height - 200;
let groundY = ground_stripeY;
let endX = 0;
let endY = -500;
let alpsX = 0;
let levelCounter = 0;
let currentLevel = 1;
let movingObjectsSpeedAtStart = 8;
const moveAll = () => {
    if (gameState == 'START') {
        key1.moveKey();
        wall1.collision();
        coin1.move();
        gravity();
        speedUp();
        highscore++;
        levelCounter++;
        alpsX -= 0.02 * speedFactor;
        ground_stripeX -= 2 * speedFactor;
        if (ground_stripeX <= -120) {
            ground_stripeX = 0;
        }
    }
    else if (gameState === 'GAME_OVER') {
        speedFactor = 0;
        endY <= canvas.height / 4 ? (endY += 5) : (endY += 0);
    }
};
const speedUp = () => {
    if (highscore >= 400) {
        speedFactor = 1.2;
    }
    if (highscore >= 800) {
        speedFactor = 1.4;
    }
    if (highscore >= 1500) {
        speedFactor = 1.5;
    }
    if (highscore >= 2000) {
        speedFactor = 1.6;
    }
    if (highscore >= 2500) {
        speedFactor = 1.7;
    }
    if (highscore >= 3000) {
        speedFactor = 1.8;
    }
};
let key1 = new keyClass();
let coin1 = new collectableClass(900, 270, movingObjectsSpeedAtStart);
let wallDistance = 500;
let wall1 = new obstacleClass(700, 0, movingObjectsSpeedAtStart);
let wall2 = new obstacleClass(wall1.x + wallDistance, -30, movingObjectsSpeedAtStart);
