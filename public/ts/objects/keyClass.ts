let keyStopX = 280

class keyClass {
  public x: number
  public y: number
  public speed: number
  public goingUp: boolean
  public moveKey: any
  constructor() {
    this.x = canvas.width - 10
    this.y = 500
    this.speed = -0.2
    this.goingUp = false

    this.moveKey = function () {
      if (gameState === 'START' && this.x > keyStopX) {
        this.x += this.speed
        this.y += Math.sin(this.x / 3) * 2
      } else if (gameState === 'START' && this.x <= keyStopX) {
        this.x += -0.02
        this.y += Math.sin(this.x / 0.5) * 0.5
      }
    }
  }
}
