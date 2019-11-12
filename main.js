const util = require("./myUtils.js");

const reader = require("readline-sync");
let input1 = reader.questionInt("Input any positive number ");
let input2 = reader.questionInt("Input another positive number ");

console.log("Here are all the prime numbers between " + input1 + " and " + input2);
util.intoRangeOfPrimes(input1,input2);

