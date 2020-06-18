let playerSprite = new Image();
let ground = new Image();
let end = new Image();
let ground_stripe = new Image();
let alps = new Image();
let key = new Image();
let picsToLoad = 0;

const countLoadedImagesAndLaunchIfReady = () => {
    picsToLoad--;
    if (picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

const beginLoadingImage = (imgVar, fileName) => {
    imgVar.onload = countLoadedImagesAndLaunchIfReady();
    imgVar.src = fileName;
}

const loadImages = () => {

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

}
