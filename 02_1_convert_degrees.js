/* A JavaScript program to convert degrees Celsius to degrees Fahrenheit and write
the result to the page in a descriptive sentence.
Equation for Fahrenheit to Celsius: degF = 9 / 5 * (degC + 32) */

var degF = prompt("What is the temperature in degrees Celsius?", "");
var degC = Math.round(9 / 5 * (degC + 32));

alert(degC + "\xB0 Celsius is " + degF + "\xB0 Fahrenheit.");
