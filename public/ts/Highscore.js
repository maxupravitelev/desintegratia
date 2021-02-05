let highscore = 0;
let thisHighscore = 0;
let bestHighScore = 0;
let baseUrl = '/api/scores';
let globalScores = {};
const highscoreCount = () => {
    if (highscore >= globalScores[2].score) {
        bestHighScore = highscore;
        postHighscore(bestHighScore);
    }
};
const getHighscoresFromBackend = async () => {
    const response = await fetch(baseUrl);
    const scores = await response.json();
    scores.sort((b, a) => a.score - b.score);
    globalScores = scores;
    bestHighScore = scores[0].score;
    if (gameState === 'INIT') {
        loadImages();
    }
};
const postHighscore = async (data) => {
    let playerName = prompt('Please enter your name');
    if (!playerName) {
        playerName = 'Lorempsa Ipsus';
    }
    let postUrl = baseUrl + '/new-score';
    let scoresObj = {
        score: data,
        playerName,
    };
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(scoresObj),
    });
    getHighscoresFromBackend();
};
