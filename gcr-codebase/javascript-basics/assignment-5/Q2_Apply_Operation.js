// Assignment 5 - Q2: Apply Operation with Callback
// Student: Gaurav Sandilya | GLA University
"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];
const doubled = applyOperation(numbers, number => number * 2);
const squared = applyOperation(numbers, number => number ** 2);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
