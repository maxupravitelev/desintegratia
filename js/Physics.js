//////////////////////// walls

let wallDistance = 500;
let ground_stripeX = 0;
let groundY = 500;

let endX = 0;
let endY = -500;

let alpsX = 0;

let wall1 = new wallClass();
let wall2 = new wallClass();

wall2.x = wall1.x + wallDistance;
wall2.height = 70;
wall2.width = 20;
wall2.y = groundY - wall2.height;

let speedFactor = 1;

const moveAll = () => {
    
    if (dead == false) {
        key1.moveKey();
        wall1.collision();
        wall2.collision();
        gravity();
        highscoreCount();               // todo: refactor placement
        speedUp();
        highscore++;
        alpsX -= 0.02 * speedFactor;
        ground_stripeX -= 2 * speedFactor;
            if (ground_stripeX <= -80) {
            ground_stripeX = 0;
        }
    } else {
        speedFactor = 0;
        endY <= 0 ? (endY += 5) : (endY += 0);
    }

    gameReset();


}

function wallClass() {
    this.x = 700;
    this.height = 100;
    this.width = 20;
    this.y = groundY - this.height;
    this.speed = 8;

    this.collision = function () {
        if (this.x <= player.x + frame_width / 4 - 15 && player.jumping == false) {
            if (player.x <= this.x) {
                this.speed = 0;
                highscore += 0;
                dead = true;

                
            } else {
                if (dead == false) {
                    this.moveWall();
                }
            }
        } else {
            if (dead == false) {
                this.moveWall();
            }
        }
    };

    this.moveWall = function () {
        if (this.x >= 0) {
            this.x -= this.speed * speedFactor;

        } else {
            this.x = canvas.width + Math.random() * 100;
        }
    };
}

/////////////////// object player

player = {
    jumping: true,
    x: 150,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};

function jump() {
    if (dead == false && player.jumping == false) {
        player.y_velocity -= 40;
        player.jumping = true;
    }
}

function gravity() {
    player.y_velocity += 2; // gravity
    player.y += player.y_velocity;
    player.y_velocity *= 0.9; // friction

    // if player is falling below ground line
    if (player.y > groundY - frame_height / 4) {
        player.jumping = false;
        player.y = groundY - frame_height / 4;
        player.y_velocity = 0;
    }
}

///////////////////////// key

let key1 = new keyClass();

function keyClass() {
    this.x = canvas.width;
    this.y = 300;
    this.speed = -0.2;
    this.goingUp = false;

    this.moveKey = function () {
        if (dead == false && this.x > 340) {
            this.x += this.speed;
            this.y += Math.sin(this.x / 3) * 2;
        } else if (dead == false && this.x <= 340) {
            this.x += -0.02;
            this.y += Math.sin(this.x / 0.5) * 1;
        }
    };
}


function speedUp() {
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
}
