/* A JavaScript program to convert degrees Fahrenheit to degrees Celcius and write
the result to the page in a descriptive sentence.
Equation for Fahrenheit to Celcius: degC = 5/9 * (degF - 32) */

var degF = prompt("What is the temperature in degrees Fahrenheit?", "");
var degC = Math.round(5/9 * (degF - 32));

alert(degF + "\xB0 Fahrenheit is " + degC + "\xB0 Celcius.");
