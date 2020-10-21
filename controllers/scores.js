const scoreRouter = require('express').Router();
const Score = require('../models/score');
const { response } = require('../app');
scoreRouter.get('/', async (request, response) => {
    const scores = await Score.find({});
    response.json(scores);
});
scoreRouter.post('/new-score', async (request, response) => {
    let score = new Score({
        score: request.body.score
    });
    const newScore = await score.save();
    response.json(newScore);
});
module.exports = scoreRouter;
