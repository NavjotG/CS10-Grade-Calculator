// JavaScript Code

// IPO Algorithm
document.getElementById("button").addEventListener("click", sayGrade);

function sayGrade () {
// Input
let CSS1 = +document.getElementById("cs1").value;
let SP1 = +document.getElementById("sp1").value;
let SP2 = +document.getElementById("sp2").value;
let CSS2 = +document.getElementById("cs2").value;
let P = +document.getElementById("pA").value;


console.log(CSS1, SP1, SP2, CSS2, P);

// Process
let FGRADE = (CSS1 + SP1 + SP2 + CSS2 + P)/5;

// Output
document.getElementById("output").innerHTML = FGRADE;

}