let highscore:number = 0;
let thisHighscore:number = 0;
let bestHighScore:number = 0;

let baseUrl: string = "http://localhost:3000/api/scores"

let url: string = baseUrl;

const highscoreCount = () => {
    if (highscore >= bestHighScore) {
        bestHighScore = highscore;
        postHighscore(bestHighScore);
    }
}

// fetch highscore from backend
fetch(url)
    .then((response) => response.json())
    .then((scores) => {
        scores.sort((b, a) => a.score - b.score)
        console.log(scores)
        bestHighScore = scores[0].score
    })

// post highscore to backend

const postHighscore = async (data) => {
    
    let highscoreName = prompt("Please enter your name");

    if (!highscoreName) {
        highscoreName = 'Lorempsa Ipsus'
    }

    console.log(highscoreName)

    let postUrl = baseUrl + "/new-score"

    let scoresObj = {
        'score': data
    }

    const response = await fetch(postUrl, {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoresObj) 
    });
      
}



