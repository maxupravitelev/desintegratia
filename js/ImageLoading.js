let cheSprite = new Image();
let ground = new Image();
let end = new Image();
let ground_stripe = new Image();

endX = 0;
endY = -500;

let alpen = new Image();
alpenX = 0;

let key = new Image();

let picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log(picsToLoad);
	if (picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady();
	imgVar.src = fileName;
}

function loadImages() {
	//   let dataSet = {varName: cheSprite, theFile: "che-sprite_450x400_transparent.png"}

	let imageList = [
		{ varName: cheSprite, theFile: "image/che-sprite_450x400_transparent.png" },
		{ varName: end, theFile: "image/end.png" },
		{ varName: ground, theFile: "image/ground.png" },
		{ varName: ground_stripe, theFile: "image/ground_stripe.png" },
		{ varName: alpen, theFile: "image/alpen_8c.png" },
		{ varName: key, theFile: "image/key.png" }
	];

	picsToLoad = imageList.length;

	for (let i = 0; i < imageList.length; i++) {
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);
	}

	// beginLoadingImage(end, "end.png");
	// beginLoadingImage(ground, "ground.png");
	// beginLoadingImage(alpen, "alpen2.png");
	// beginLoadingImage(key, "key.png");
}
