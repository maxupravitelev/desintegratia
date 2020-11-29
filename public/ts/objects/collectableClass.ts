class collectableClass {
    public x: number;
    public y: number;
    public width: number;
    public speed: number;
    public move: any;

    constructor(x:number, y:number, speed:number) {
        this.x = x;
        this.y = y;
        this.width = 16
        this.speed = speed;


        // let x: number = canvas.width;

        // let y: number = 300;

        // let width: number = 16;

        // let speed: number = wall1.speed;

        this.move = () => {
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