let highscore:number = 0;
let thisHighscore:number = 0;
let bestHighScore:number = 0;

let baseUrl: string = "http://localhost:3000/api/scores"

let url: string = baseUrl;

let globalScores: object = {}

const highscoreCount = () => {
    if (highscore >= globalScores[2].score) {
        bestHighScore = highscore;
        postHighscore(bestHighScore);
    }
}

// fetch highscore from backend

const getHighscoresFromBackend = () => {
    fetch(url)
        .then((response) => response.json())
        .then((scores) => {
            scores.sort((b, a) => a.score - b.score)
            globalScores = scores
            console.log(scores)
            bestHighScore = scores[0].score
            console.log(scores[0].playerName)
            if (gameState === 'INIT') {
                loadImages();
            }
            
        })
}


// post highscore to backend

const postHighscore = async (data) => {
    
    let playerName = prompt("Please enter your name");

    if (!playerName) {
        playerName = 'Lorempsa Ipsus'
    }

    let postUrl = baseUrl + "/new-score"

    let scoresObj = {
        'score': data,
        playerName
    }

    const response = await fetch(postUrl, {
        method: 'POST',  
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoresObj) 
    });
    // gameState = 'INIT'
    getHighscoresFromBackend();
      
}



