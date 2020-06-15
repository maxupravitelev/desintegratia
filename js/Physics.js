//////////////////////// walls

let wallDistance = 500;
let ground_stripeX = 0;
let groundY = 500;

let wall1 = new wallClass();
let wall2 = new wallClass();

wall2.x = wall1.x + wallDistance;
wall2.height = 70;
wall2.width = 20;
wall2.y = groundY - wall2.height;

let speedFactor = 1;

function wallClass() {
    this.x = 700;
    this.height = 100;
    this.width = 20;
    this.y = groundY - this.height;
    this.speed = 8;

    this.collision = function () {
        if (this.x <= che.x + frame_width / 4 - 15 && che.jumping == false) {
            if (che.x <= this.x) {
                this.speed = 0;
                highscore += 0;
                dead = true;

                endY <= 0 ? (endY += 5) : (endY += 0);
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

            highscore++;
            alpenX -= 0.05 * speedFactor;
            ground_stripeX -= 2 * speedFactor;
            speedUp();
            if (ground_stripeX <= -80) {
                ground_stripeX = 0;
            }
        } else {
            this.x = canvas.width + Math.random() * 100;
            console.log(this.x);
        }
    };
}

/////////////////// object che

che = {
    jumping: true,
    x: 150,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
};

function jump() {
    if (dead == false && che.jumping == false) {
        che.y_velocity -= 40;
        che.jumping = true;
    }
}

function gravity() {
    che.y_velocity += 2; // gravity
    che.y += che.y_velocity;
    che.y_velocity *= 0.9; // friction

    // if che is falling below ground line
    if (che.y > groundY - frame_height / 4) {
        che.jumping = false;
        che.y = groundY - frame_height / 4;
        che.y_velocity = 0;
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

        //     if (dead == false) {
        //         if (this.y >= 200) {
        //             this.goingUp = true;
        //         }
        //         else if (this.y <= 350) {
        //             this.goingUp = false;
        //         }

        //         if (this.goingUp) {
        //             this.y -= 0.5;
        //         } else {
        //             this.y += 0.5;
        //         }

        //         // if (this.x >= 280) {
        //         //     this.x -= 0.5;
        //         // } else {
        //         //     this.x += 0;
        // // }
        //     } else {
        //         this.x += 0;
        //         this.y += 0;
        //     }
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
        speedFactor = 1.8;
    }
}
