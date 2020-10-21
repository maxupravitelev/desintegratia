let speedFactor = 1;
let ground_stripeX = 0;
let ground_stripeY = canvas.height - 200;
let groundY = ground_stripeY;
let endX = 0;
let endY = -500;
let alpsX = 0;
let levelCounter = 0;
let currentLevel = 1;
const moveAll = () => {
    if (dead == false) {
        key1.moveKey();
        wall1.collision();
        coin1.moveCoin();
        gravity();
        highscoreCount();
        speedUp();
        highscore++;
        levelCounter++;
        alpsX -= 0.02 * speedFactor;
        ground_stripeX -= 2 * speedFactor;
        if (ground_stripeX <= -120) {
            ground_stripeX = 0;
        }
    }
    else {
        speedFactor = 0;
        endY <= canvas.height / 4 ? (endY += 5) : (endY += 0);
    }
    inputHandling();
};
class wallClass {
    constructor() {
        this.x = 700;
        this.height = 160;
        this.width = 55;
        this.y = groundY - this.height;
        this.speed = 8;
        this.collision = function () {
            if (this.x <= player.x + frame_width / 2 - 15 && player.jumping == false) {
                if (player.x <= this.x) {
                    this.speed = 0;
                    highscore += 0;
                    dead = true;
                }
                else {
                    if (dead == false) {
                        this.moveWall();
                    }
                }
            }
            else {
                if (dead == false) {
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
let wall1 = new wallClass();
let wall2 = new wallClass();
let wallDistance = 500;
wall2.x = wall1.x + wallDistance;
wall2.height = 130;
wall2.y = groundY - wall2.height;
let player = {
    jumping: true,
    x: 50,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};
const jump = () => {
    if (dead == false && player.jumping == false) {
        player.y_velocity -= 60;
        player.jumping = true;
    }
};
const gravity = () => {
    player.y_velocity += 2;
    player.y += player.y_velocity;
    player.y_velocity *= 0.9;
    if (player.y > groundY - frame_height / 2) {
        player.jumping = false;
        player.y = groundY - frame_height / 2;
        player.y_velocity = 0;
    }
};
class keyClass {
    constructor() {
        this.x = canvas.width + 300;
        this.y = 300;
        this.speed = -0.2;
        this.goingUp = false;
        this.moveKey = function () {
            if (dead == false && this.x > 340) {
                this.x += this.speed;
                this.y += Math.sin(this.x / 3) * 2;
            }
            else if (dead == false && this.x <= 340) {
                this.x += -0.02;
                this.y += Math.sin(this.x / 0.5) * 1;
            }
        };
    }
}
let key1 = new keyClass();
class coinClass {
    constructor() {
        this.x = canvas.width;
        this.y = 300;
        this.width = 16;
        this.speed = wall1.speed;
        this.moveCoin = () => {
            if (dead == false) {
                this.x -= this.speed;
            }
            if (this.x < 0 - this.width) {
                this.x = 850;
            }
            if ((player.x > this.x && player.x < this.x + 16) && (player.jumping == true)) {
                highscore += 400;
                levelCounter += 400;
                this.x += 900;
            }
        };
    }
}
let coin1 = new coinClass();
coin1.x = 900;
coin1.y = 270;
const speedUp = () => {
    if (highscore >= 400) {
        speedFactor = 1.2;
    }
    if (highscore >= 800) {
        speedFactor = 1.4;
    }
    if (highscore >= 1500) {
        speedFactor = 1.6;
    }
    if (highscore >= 2000) {
        speedFactor = 1.8;
    }
    if (highscore >= 2500) {
        speedFactor = 1.8;
    }
    if (highscore >= 3000) {
        speedFactor = 2.0;
    }
};
