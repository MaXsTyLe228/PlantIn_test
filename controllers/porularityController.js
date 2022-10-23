const {City, Requests} = require("../models/models");
const sequelize = require("sequelize");

class PopularityController {
  async getPopular(req, res) {
    const cityWeather = await City.findAll({
      attributes: {
        include: [[sequelize.fn('COUNT', sequelize.col('requests.id')), 'popularity']]
      },
      include: [{
        model: Requests,
        required: true,
        attributes: []
      }],
      group: ['city.id'],
      order: sequelize.literal('popularity DESC'),
    });
    if (cityWeather === null) return res.status(404).json({message: `not found`});
    const popularity = cityWeather[0].dataValues.popularity;
    res.status(200).json(cityWeather.filter(({dataValues}) => dataValues.popularity === popularity));
  }
}

module.exports = new PopularityController();