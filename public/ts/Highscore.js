let highscore = 0;
let thisHighscore = 0;
let bestHighScore = 0;
let baseUrl = "https://desintegratia.herokuapp.com/";
let url = baseUrl;
let globalScores = {};
const highscoreCount = () => {
    if (highscore >= globalScores[2].score) {
        bestHighScore = highscore;
        postHighscore(bestHighScore);
    }
};
const getHighscoresFromBackend = () => {
    fetch(url)
        .then((response) => response.json())
        .then((scores) => {
        scores.sort((b, a) => a.score - b.score);
        globalScores = scores;
        console.log(scores);
        bestHighScore = scores[0].score;
        console.log(scores[0].playerName);
        if (gameState === 'INIT') {
            loadImages();
        }
    });
};
const postHighscore = async (data) => {
    let playerName = prompt("Please enter your name");
    if (!playerName) {
        playerName = 'Lorempsa Ipsus';
    }
    let postUrl = baseUrl + "/new-score";
    let scoresObj = {
        'score': data,
        playerName
    };
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoresObj)
    });
    getHighscoresFromBackend();
};
