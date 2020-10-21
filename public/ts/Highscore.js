let highscore = 0;
let thisHighscore = 0;
let bestHighScore = 0;
let baseUrl = "http://localhost:3000/api/scores";
let url = baseUrl;
const highscoreCount = () => {
    if (highscore >= bestHighScore) {
        bestHighScore = highscore;
        postHighscore(bestHighScore);
    }
};
fetch(url)
    .then((response) => response.json())
    .then((scores) => {
    console.log(scores);
});
const postHighscore = async (data) => {
    let postUrl = baseUrl + "/new-score";
    let scoresObj = {
        'score': data
    };
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoresObj)
    });
};
