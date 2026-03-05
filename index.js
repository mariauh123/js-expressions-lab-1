//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

//Arrays containing temperature in Celsius and Fahrenheit
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73,
    79, 71, 74, 76];
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21,
    27, 19, 17,29];

//! Start the calculation of the total temperatures
//Sum of Fahrenheit temperatures in odd days
let tempInFahrenheit = 0;
for(let i = 0; i < 15; i++){
        tempInFahrenheit += fahrenheitTemps[i];
};
c//onsole.log("Total temperature in Fahrenheit for odd days: ", tempInFahrenheit, "°F");

//Sum Celsius temperatures in even days
let tempInCelsius = 0;
for(let i = 0; i < 15; i++){
        tempInCelsius += celsiusTemps[i];
};
//console.log("Total temperature in Celsius for even days: ", tempInCelsius, "°C");

//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: to_temperature_in_fahrenheit and to_temperature_in_celsius
const to_fahrenheit = (tempInCelsius * 9 / 5) + 32;
//console.log("Converted temperature in Fahrenheit (even days): ", to_fahrenheit, "°F");
const to_celsius = (tempInFahrenheit - 32) * 5 / 9;
//console.log("Converted temperature in Celsius (odd days): ", to_celsius, "°C");

//Add converted temperatures to their respective totals
const tot_temperature_in_fahrenheit = tempInFahrenheit + to_fahrenheit;
//console.log("Total temperature in Fahrenheit after conversion with all 30 days: ", tot_temperature_in_fahrenheit, "°F");
const tot_temperature_in_celsius = tempInCelsius + to_celsius;
//console.log("Total temperature in Celsius after conversion with all 30 days: ", tot_temperature_in_celsius, "°C");

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
//! Console.log the results for your own inspection if you'd like
console.log("Average temperature in Fahrenheit: ", avg_temperature_in_fahrenheit, "°F");
console.log("Average temperature in Celsius: ", avg_temperature_in_celsius, "°C");
//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};