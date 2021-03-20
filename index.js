const R = require('ramda');
const cities = require('./cities.json');

const KtoC = (k) => k - 273.15;
const KtoF = (k) => (k * 9) / 5 - 459.67;

const updateTemperature = R.curry((convertFn, city) => {
  const temp = Math.round(convertFn(city.temp));
  return R.merge(city, { temp });
});

const updateCities = R.map(updateTemperature(KtoC), cities);

//console.log(updateCities);

const city = cities[0];

//console.log(updateTemperature(KtoC, city));

const totalCostReducer = (acc, city) => {
  const { cost = 0 } = city;
  return acc + cost;
};

//const totalCost = updateCities.reduce(totalCostReducer, 0);
const totalCost = R.reduce(totalCostReducer, 0, updateCities);
const cityCount = R.length(updateCities);
console.log(totalCost / cityCount);
