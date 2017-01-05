import Sequelize from 'sequelize'
import dbConnection from '../database/connection'

// The fields in the table
const fields = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  }
}

// The options to pass along to Sequelize
const options = {
  freezeTableName: true,
  underscored: true
}

// Define the table
dbConnection.define('users', fields, options)
