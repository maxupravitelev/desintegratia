let speedFactor:number = 1;

let ground_stripeX:number = 0;
let ground_stripeY:number = canvas.height - 200;
let groundY:number = ground_stripeY;

let endX:number = 0;
let endY:number = -500;

let alpsX:number = 0;

let levelCounter:number = 0;

let currentLevel:number = 1;

let movingObjectsSpeedAtStart = 8; 

const moveAll = () => {

    if (gameState == 'START') {
        key1.moveKey();
        wall1.collision();
        // wall2.collision();
        coin1.move();
        // coin2.move();
        // coin3.move();

        gravity();
        speedUp();
        highscore++;
        levelCounter++;
        alpsX -= 0.02 * speedFactor;
        ground_stripeX -= 2 * speedFactor;
        if (ground_stripeX <= -120) {
            ground_stripeX = 0;
        }
    } else if (gameState === 'GAME_OVER') {
        speedFactor = 0;
        endY <= canvas.height / 4 ? (endY += 5) : (endY += 0);
    }
    

}

///////////////////////// walls

class wallClass {
    public x: number;
    public y: number;
    public height: number;
    public width: number;
    public speed: number;
    public collision: any;
    public moveWall: any;
    
    constructor() {
        this.x = 700;
        this.height = 160;
        this.width = 55;
        this.y = groundY - this.height;
        this.speed = movingObjectsSpeedAtStart;

        this.collision = function () {
            if (this.x <= player.x + frame_width / 2 - 15 && player.jumping == false) {
                if (player.x <= this.x) {
                    this.speed = 0;
                    highscore += 0;
                    gameState = 'GAME_OVER'
                    highscoreCount();               // todo: refactor placement


                }
                else {
                    if (gameState == 'START') {
                        this.moveWall();
                    }
                }
            }
            else {
                if (gameState == 'START') {
                    this.moveWall();
                }
            }
        };

        this.moveWall = () => {
            if (this.x >= 0 - this.width) {
                this.x -= this.speed * speedFactor;

            }
            else {
                this.x = canvas.width + Math.random() * 100;
                this.y = groundY - this.height + Math.random() * 60;
            }
        };
    }
}


/////////////////// player object

let player = {
    jumping: true,
    x: 50,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};

const jump = () => {
    if (gameState === 'START' && player.jumping == false) {
        player.y_velocity -= 60;
        player.jumping = true;
    }
}

const gravity = () => {
    player.y_velocity += 2; // gravity
    player.y += player.y_velocity;
    player.y_velocity *= 0.9; // friction
    // console.log("playerY:" + player.y)
    // console.log("CoinX:" + coin1.x)

    // if player is falling below ground line
    if (player.y > groundY - frame_height / 2) {
        player.jumping = false;
        player.y = groundY - frame_height / 2;
        player.y_velocity = 0;
    }
}


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
}


// create obstacles and collectables

let key1 = new keyClass();


// constructor args: x, y, initialSpeed
let coin1 = new collectableClass(900, 270, movingObjectsSpeedAtStart);

let wallDistance:number = 500;

let wall1 = new obstacleClass(700, 0, movingObjectsSpeedAtStart);
let wall2 = new obstacleClass(wall1.x + wallDistance, -30, movingObjectsSpeedAtStart);

// let coin2 = new collectableClass(1000, 280, movingObjectsSpeedAtStart);
// let coin3 = new collectableClass(1300, 290, movingObjectsSpeedAtStart);

