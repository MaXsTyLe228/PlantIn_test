const {City, Temperature} = require('../models/models')
const ApiError = require('../errors/ApiError')

class CityController {
  async getCities(req, res) {
    try {
      const cities = await City.findAll({
        //include: Temperature
      });
      //const result = cities.map(({id, name}) => ({id, name}))
      res.status(200).json(cities);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createCity(req, res, next) {
    try {
      const {name} = req.body;
      if(!name) return next(ApiError.badRequest('name parameter is missing'));
      const city = await City.create({name})
      res.status(200).json(city);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new CityController();