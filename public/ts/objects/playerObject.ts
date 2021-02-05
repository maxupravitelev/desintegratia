let player = {
  jumping: true,
  x: 50,
  x_velocity: 0,
  y: 0,
  y_velocity: 0,
}

const jump = () => {
  if (gameState === 'START' && player.jumping == false) {
    player.y_velocity -= 60
    player.jumping = true
  }
}

const gravity = () => {
  player.y_velocity += 2 // gravity
  player.y += player.y_velocity
  player.y_velocity *= 0.9 // friction
  // console.log("playerY:" + player.y)
  // console.log("CoinX:" + coin1.x)

  // if player is falling below ground line
  if (player.y > groundY - frame_height / 2) {
    player.jumping = false
    player.y = groundY - frame_height / 2
    player.y_velocity = 0
  }
}
