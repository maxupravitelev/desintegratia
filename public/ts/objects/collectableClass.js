class coinClass {
    constructor() {
        this.x = canvas.width;
        this.y = 300;
        this.width = 16;
        this.speed = movingObjectsSpeedAtStart;
        this.moveCoin = () => {
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
