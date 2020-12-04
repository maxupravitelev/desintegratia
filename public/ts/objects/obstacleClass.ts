class obstacleClass {
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