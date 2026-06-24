const convertToCelsius = function(degree) {
  let result = (degree - 32) * (5/9);
  return +result.toFixed(1);
};

const convertToFahrenheit = function(degree) {
  let result = (32 + ((9/5) * degree))
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
