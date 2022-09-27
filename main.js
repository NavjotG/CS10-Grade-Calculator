// JavaScript Code

// IPO Algorithm

// Input
let CSS1 = +prompt("Enter Client-Side Scripting 1 grade:");
let SP1 = +prompt("Enter Structured Programming 1 grade:");
let SP2 = +prompt("Enter Structured Programming 2 grade:");
let CSS2 = +prompt("Enter Client-Side Scripting 2 grade:");
let P = +prompt("Enter Project A grade:");


console.log(CSS1, SP1, SP2, CSS2, P);

// Process
let FGRADE = (CSS1 + SP1 + SP2 + CSS2 + P)/5;

// Output
alert(`Your final grade is: ${FGRADE}`);