require('dotenv').config();
const {City} = require("../models/models");
const cities = ['Amsterdam', 'Andorra la Vella', 'Athens', 'Belgrade', 'Berlin', 'Bern', 'Bratislava', 'Brussels', 'Bucharest', 'Budapest', 'Chisinau', 'Copenhagen', 'Dublin', 'Helsinki', 'Kyiv', 'Lisbon', 'Ljubljana', 'London', 'Luxembourg', 'Madrid', 'Monaco', 'Nicosia', 'Nuuk', 'Oslo', 'Paris', 'Podgorica', 'Prague', 'Reykjavik', 'Rome', 'San Marino', 'Sarajevo', 'Skopje', 'Sofia', 'Stockholm', 'Tallinn', 'Tirana', 'Vaduz', 'Valletta', 'Vatican City', 'Vienna', 'Vilnius', 'Warsaw', 'Zagreb'];
const arrCreateCities = cities.map((item) => ({name: item}));


const start = async () => {
  try {
    City.bulkCreate(arrCreateCities, {ignoreDuplicates: true}).then(() => console.log('cities has been added'));
  } catch (e) {
    console.log(e)
  }
}

start();