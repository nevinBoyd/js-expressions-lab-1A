//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;


const celsiusToFahrenheit = (c) => (c * 9 / 5) + 32;
const fahrenheitToCelsius = (f) => (f - 32) * 5 / 9;


let tempsF = [
    day1TempF, day3TempF, day5TempF, day7TempF, day9TempF, day11TempF, day13TempF, day15TempF,
    day17TempF, day19TempF, day21TempF, day23TempF, day25TempF, day27TempF, day29TempF
];

let tempsC = [
    day2TempC, day4TempC, day6TempC, day8TempC, day10TempC, day12TempC, day14TempC, day16TempC,
    day18TempC, day20TempC, day22TempC, day24TempC, day26TempC, day28TempC, day30TempC
];


let tot_temperature_in_fahrenheit = tempsF.reduce((sum, temp) => sum + temp, 0)
    + tempsC.reduce((sum, temp) => sum + celsiusToFahrenheit(temp), 0);

let tot_temperature_in_celsius = tempsC.reduce((sum, temp) => sum + temp, 0)
    + tempsF.reduce((sum, temp) => sum + fahrenheitToCelsius(temp), 0);


let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / (tempsF.length + tempsC.length);
let avg_temperature_in_celsius = tot_temperature_in_celsius / (tempsF.length + tempsC.length);


console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);


module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};