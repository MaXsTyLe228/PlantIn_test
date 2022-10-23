const sequelize = require('../database/db')
const {DataTypes} = require('sequelize')

const City = sequelize.define('city', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
})

const Temperature = sequelize.define('temperature', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  temperature: {type: DataTypes.STRING},
  date: {type: DataTypes.STRING},
})

const Requests = sequelize.define('requests', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

City.hasMany(Temperature);
Temperature.belongsTo(City);

City.hasMany(Requests);
Requests.belongsTo(City);

module.exports = {
  City, Temperature, Requests
}