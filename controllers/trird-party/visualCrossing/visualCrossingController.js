const ApiError = require('../../../errors/ApiError')
const axios = require("axios");

class visualCrossingController {
  async getLastWeekWeather(req, res, next) {
    try {
      const {city} = req.query;
      if(!city) return next(ApiError.badRequest('city query parameter is missing'));
      const {data} = await axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/last7days?unitGroup=metric&include=days&key=${process.env.WEATHER_API_KEY}`)
      const daysTemp = data.days.map(({datetime, temp}) => ({datetime, temp}))
      const result = {
        latitude: data.latitude || '',
        longitude: data.longitude || '',
        address: data.address || '',
        days: daysTemp || [],
      }
      res.status(200).json(result);
    } catch (e) {
      console.log(e)
      res.status(500).json(e);
    }
  }
}

module.exports = new visualCrossingController();