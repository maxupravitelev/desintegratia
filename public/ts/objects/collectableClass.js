class collectableClass {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = 16;
        this.speed = speed;
        this.move = () => {
            if (gameState === 'START') {
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
