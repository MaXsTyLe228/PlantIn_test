const ApiError = require('../errors/ApiError');
const {City, Temperature, Requests} = require("../models/models");

class WeatherController {
  async getWeather(req, res, next) {
    const {city, date} = req.query;
    if (!city) return next(ApiError.badRequest('city parameter is missing'));
    if (!date) return next(ApiError.badRequest('date parameter is missing'));
    const cityWeather = await City.findOne({
      where: {name: city},
      include: {
        model: Temperature,
        where: {date}
      }
    });
    if (cityWeather === null) return res.status(404).json({message: `not found ${city} or ${date}`});
    await Requests.create({cityId: cityWeather.id});
    res.status(200).json(cityWeather);
  }

  async getAverageWeather(req, res, next) {
    const {city} = req.query;
    if (!city) return next(ApiError.badRequest('city parameter is missing'));
    const cityWeather = await City.findOne({
      where: {name: city},
      include: Temperature,
    });
    if (cityWeather === null) return res.status(404).json({message: `not found ${city}`});
    const avgTemperature = cityWeather.temperatures.reduce((a, b) => a + +b.temperature, 0) / cityWeather.temperatures.length;
    await Requests.create({cityId: cityWeather.id});
    res.status(200).json({city, avg_temp: avgTemperature.toFixed(2)});
  }
}

module.exports = new WeatherController();