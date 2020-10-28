const scoreRouter = require('express').Router()
const Score = require('../models/score')
const { response } = require('../app')


///***** .get routes */

/* .get all scores */
scoreRouter.get('/', async (request, response) => {
  const scores = await Score.find({})
  response.json(scores)
})



///***** .post routes */

scoreRouter.post('/new-score', async (request, response) => {

    let score = new Score ({
      score: request.body.score,
      playerName: request.body.playerName
    })

    const newScore = await score.save()
    response.json(newScore)

})


module.exports = scoreRouter