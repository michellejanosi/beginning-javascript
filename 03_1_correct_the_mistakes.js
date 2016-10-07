/* A junior programmer comes to you with some code that appears not to work.
Can you spot where he went wrong? Give him a hand and correct the mistakes. */
var userAge = prompt("Please enter your age");

// missing "="
if (userAge = 0) {; // misplaced or unnecessary ;
  alert("So you're a baby!");
// missing |
} else if ( userAge < 0 | userAge > 200)
  alert("I think you may be lying about your age");
else {
  alert("That's a good age");
}

// Corrected code
var userAge = prompt("Please enter your age");

if (userAge == 0) {
  alert("So you're a baby!");
} else if ( userAge < 0 || userAge > 200)
  alert("I think you may be lying about your age");
else {
  alert("That's a good age");
}
