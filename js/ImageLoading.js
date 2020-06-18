let playerSprite = new Image();
let ground = new Image();
let end = new Image();
let ground_stripe = new Image();
let alps = new Image();
let key = new Image();
let picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady();
    imgVar.src = fileName;
}

function loadImages() {

    let imageList = [
        { varName: playerSprite, theFile: "image/player-sprite.png" },
        { varName: end, theFile: "image/end.png" },
        { varName: ground, theFile: "image/ground.png" },
        { varName: ground_stripe, theFile: "image/ground_stripe.png" },
        { varName: alps, theFile: "image/alps_large.png" },
        { varName: key, theFile: "image/key.png" }
    ];

    picsToLoad = imageList.length;

    for (let i = 0; i < imageList.length; i++) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    }

    // beginLoadingImage(end, "end.png");
    // beginLoadingImage(ground, "ground.png");
    // beginLoadingImage(alps, "alps2.png");
    // beginLoadingImage(key, "key.png");
}
