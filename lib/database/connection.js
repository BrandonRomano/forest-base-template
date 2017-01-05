import Sequelize from 'sequelize'
require('dotenv').config({silent: true})

const dbConnection = new Sequelize(process.env.DATABASE_CONNECTION_STRING)
export default dbConnection
