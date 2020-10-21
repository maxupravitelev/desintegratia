let highscore = 0;
let thisHighscore = 0;
let bestHighScore = 0;
let baseUrl = "http://localhost:3000/api/scores";
let url = baseUrl;
fetch(url)
    .then((response) => response.json())
    .then((scores) => {
    console.log(scores);
});
