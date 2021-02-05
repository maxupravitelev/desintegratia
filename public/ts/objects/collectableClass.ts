class collectableClass {
  public x: number
  public y: number
  public width: number
  public speed: number
  public move: any

  constructor(x: number, y: number, speed: number) {
    this.x = x
    this.y = y
    this.width = 16
    this.speed = speed

    this.move = () => {
      if (gameState === 'START') {
        this.x -= this.speed
      }
      if (this.x < 0 - this.width) {
        this.x = 850
      }
      // if (((player.y < (this.y + 16)) && (player.y > this.y))
      // && ((player.x > this.x) && (player.x < (this.x + 16))))
      // if (player.x > this.x && player.x < this.x + 16 && player.y > this.y && player.y < this.y+16)

      if (
        player.x > this.x &&
        player.x < this.x + 16 &&
        player.jumping == true
      ) {
        // hotfix
        // if (player.y > this.y && player.y < this.y + 16)
        highscore += 400
        levelCounter += 400
        this.x += 900
      }
    }
  }
}
