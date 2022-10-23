require('dotenv').config();
const {City, Temperature} = require("../models/models");
const axios = require("axios");

const start = async () => {
  const cities = await City.findAll();
  const allCitiesArr = cities.map(({id, name}) => ({id, name}));
  const promiseArr = [];
  for (const i of allCitiesArr) {
    promiseArr.push(
      await axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${i.name}/last7days?unitGroup=metric&include=days&key=${process.env.WEATHER_API_KEY}`)
        .then(({data}) => {
          const daysTemp = data.days.map(({datetime, temp}) => ({
            cityId: i.id || null,
            date: datetime,
            temperature: temp
          }))
          Temperature.bulkCreate(daysTemp, {ignoreDuplicates: true}).then(() => console.log('temperature has been added'));
        })
    )
  }
  await Promise.allSettled(promiseArr);
}

start();