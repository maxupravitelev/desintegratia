// init express
const express = require('express')
require('express-async-errors')
const app = express()

// enable cors
const cors = require('cors')

// init middleware
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

// init highscore router & DB
const scoreRouter = require('./controllers/scores')
const mongoose = require('mongoose')


// set up MongoDB Connection
logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

// config app & middleware
app.use(cors()) // enable cors
app.use('/api/scores', scoreRouter) // enable highscore router
app.use(express.static('public')) // folder for games files
app.use(express.json()) 
app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app
