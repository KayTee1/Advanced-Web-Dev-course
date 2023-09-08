const fahrenheitValue = 32;
const celsiusValue = 0;

const toCelcius = (fahrenheitValue) => {
  return (fahrenheitValue - 32) * (5 / 9);
};

const toFahrenheit = (celsiusValue) => {
  return celsiusValue * (9 / 5) + 32;
};
const convertedToCel = toCelcius(fahrenheitValue);
const convertedToFah = toFahrenheit(celsiusValue);

console.log(`Celcius value: ${celsiusValue}`);
console.log(`Converted to fahrenheit: ${convertedToFah}`);

console.log(`Fahrenheit value: ${fahrenheitValue}`);
console.log(`Converted to fahrenheit: ${convertedToCel}`);