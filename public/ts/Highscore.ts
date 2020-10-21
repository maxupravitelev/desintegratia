let highscore:number = 0;
let thisHighscore:number = 0;
let bestHighScore:number = 0;

let baseUrl: string = "http://localhost:3000/api/scores"

let url: string = baseUrl;

fetch(url)
    .then((response) => response.json())
    .then((scores) => {
        console.log(scores)
    })