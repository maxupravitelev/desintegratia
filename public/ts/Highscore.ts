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
        console.log(scores)
    })

// post highscore to backend

const postHighscore = async (data) => {
    
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



