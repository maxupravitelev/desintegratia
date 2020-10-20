const scoreRouter = require('express').Router()
const Score = require('../models/list')
const { response } = require('../app')


///***** .get routes */

/* .get all lists */
scoreRouter.get('/', async (request, response) => {
  const scores = await Score.find({})
  response.json(scores)
})



///***** .post routes */

/* .post new list; create new list*/
scoreRouter.post('/new-score', async (request, response) => {

    let score = new Score ({
      score: request.params.id
    })

    const newScore = await score.save()
    response.json(newScore)

})


module.exports = scoreRouter