import path from 'path'
import express from 'express'
import dbConnection from './database/connection'
import forest from 'forest-express-sequelize'
require('dotenv').config({silent: true})

// Create express app
const app = express()
app.use(forest.init({
  modelsDir: path.join(__dirname, 'models'),
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  sequelize: dbConnection
}))
app.listen(process.env.PORT, function () {
  console.log('Forest running on port :' + process.env.PORT)
})
