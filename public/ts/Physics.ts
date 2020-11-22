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

let wall1;
let wall2;

let wallDistance:number = 500;

let coin1;

const initMovingObjects = () => {
    
    wall1 = new wallClass();
    wall2 = new wallClass();

    coin1 = new coinClass();

    coin1.x = 900;
    coin1.y = 270;

    wall2.x = wall1.x + wallDistance;
    wall2.height = 130;
    wall2.y = groundY - wall2.height;
}

const moveAll = () => {

    if (gameState == 'START') {
        key1.moveKey();
        wall1.collision();
        // wall2.collision();
        coin1.moveCoin();
        // coin2.moveCoin();
        // coin3.moveCoin();

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
            console.log(this.x)
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










/////////////////// object player

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

///////////////////////// key

let keyStopX = 270;

class keyClass {
    public x: number;
    public y: number;
    public speed: number;
    public goingUp: boolean;
    public moveKey: any;
    constructor() {
        this.x = canvas.width - 10;
        this.y = 500;
        this.speed = -0.2;
        this.goingUp = false;

        

        this.moveKey = function () {
            if (gameState === 'START' && this.x > keyStopX) {
                this.x += this.speed;
                this.y += Math.sin(this.x / 3) * 2;
            }
            else if (gameState === 'START' && this.x <= keyStopX) {
                this.x += -0.02;
                this.y += Math.sin(this.x / 0.5) * 1;
            }
        };
    }
}

let key1 = new keyClass();


class coinClass {
    public x: number;
    public y: number;
    public width: number;
    public speed: number;
    public moveCoin: any;
    constructor() {
        this.x = canvas.width;
        this.y = 300;
        this.width = 16
        this.speed = movingObjectsSpeedAtStart;


        // let x: number = canvas.width;

        // let y: number = 300;

        // let width: number = 16;

        // let speed: number = wall1.speed;

        this.moveCoin = () => {
            if (gameState === 'START') {
                this.x -= this.speed;
            } if (this.x < 0 - this.width) {
                this.x = 850;
            } 
                // if (((player.y < (this.y + 16)) && (player.y > this.y)) 
                // && ((player.x > this.x) && (player.x < (this.x + 16)))) 
                // if (player.x > this.x && player.x < this.x + 16 && player.y > this.y && player.y < this.y+16)

                if ((player.x > this.x && player.x < this.x + 16) && (player.jumping == true))      // hotfix
                // if (player.y > this.y && player.y < this.y + 16)
                {
                    highscore += 400;
                    levelCounter += 400;
                    this.x += 900;
                }
                

            
        };
    }
}



// let coin2 = new coinClass();
// coin2.x = 1000;
// coin2.y = 280;

// let coin3 = new coinClass();
// coin3.x = 1300;
// coin3.y = 290;


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
