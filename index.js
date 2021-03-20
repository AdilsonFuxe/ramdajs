const R = require('ramda');
const cities = require('./cities.json');

const KtoC = (k) => k - 273.15;

const updateTemperaturre = (city) => {
  const temp = Math.round(KtoC(city.temp));
  return R.merge(city, { temp });
};

const updateCities = cities.map(updateTemperaturre);

console.log(updateCities);
