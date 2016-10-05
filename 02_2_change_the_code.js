// The below code does not work. Why? Change the code so that it does work.

/*
var firstNumber = prompt("Enter the first number", "");
var secondNumber = prompt("Enter the second number", "");
var theTotal = firstNumber + secondNumber;

alert(firstNumber + " added to " + secondNumber + " equals " + theTotal);
*/

// the result is "1 added to 2 equals 12"
// the code doesn't work because JS interprets the input from prompt as a string
// to correct, we'll use parseInt() to convert the string to an integer

var firstNumber = prompt("Enter the first number", "");
var secondNumber = prompt("Enter the second number", "");
var theTotal = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);

alert(firstNumber + " added to " + secondNumber + " equals " + theTotal);
// "1 added to 2 equals 3"
