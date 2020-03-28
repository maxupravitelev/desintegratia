let counter = 0;

let highscore = 0;
let thisHighscore = 0;
let bestHighScore = 0;

let dead = false;

let frame_width = 400;
let frame_height = 450;

canvas = document.getElementById("gameCanvas");
canvasContext = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = function() {
    //  resizeCanvas();

    // canvas.height = innerHeight;
    // canvas.width = innerWidth;

    loadImages();
};

function imageLoadingDoneSoStartGame() {
    window.requestAnimationFrame(animate);

    let framesPerSecond = 30;
    setInterval(function() {
        drawAll();
    }, 1000 / framesPerSecond);
}

function keyPressed(evt) {
    if (evt.keyCode == 32) {
        jump();
    }
}

function animate() {
    let frame = Math.floor(counter % 2);
    if (dead == true) {
        frame = Math.floor(counter % 1);
    }

    if (highscore >= 2800) {
        cheSprite.src = "image/angry.png";
    }

    //  canvasContext.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    canvasContext.drawImage(
        cheSprite,
        frame * frame_width,
        0,
        frame_width,
        frame_height,
        che.x,
        che.y + 8,
        frame_width / 4,
        frame_height / 4
    );
    counter = counter + 0.1;
    window.requestAnimationFrame(animate);
    motherOfFunctions();
}

function motherOfFunctions() {
    wall1.collision();
    wall2.collision();
    gravity();
    key1.moveKey();
    gameReset(); //hmmm?
}

function reset() {
    highscore = 0;

    endY = -500;
    alpenX = 0;

    key1.x = 700;
    key1.y = 300;

    wall1.speed = 8;
    wall2.speed = 8;

    speedFactor = 1;

    wall1.x = 700;
    wall1.collision();
    wall2.x = wall1.x + wallDistance;

    motherOfFunctions();

    dead = false;
    che.jumping == false;
}

function gameReset() {
    if (dead == false) {
        document.addEventListener("keydown", keyPressed);
        document.removeEventListener("mousedown", reset);
        document.addEventListener("mousedown", jump);
        document.addEventListener("touchstart", jump);
    }
    if (dead == true) {
        document.removeEventListener("mousedown", jump);
        document.addEventListener("mousedown", reset);
    }
}
