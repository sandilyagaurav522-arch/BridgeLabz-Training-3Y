// Assignment 3 - Q7: Smart Calculator
// Student: Gaurav Sandilya | GLA University
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unsupported operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, first, second) {
    switch (operation) {
        case "add":
            return first + second;
        case "divide":
            if (second === 0) throw new RangeError("Cannot divide by zero.");
            return first / second;
        case "power":
            return Math.pow(first, second);
        case "root":
            if (first < 0) throw new RangeError("Cannot calculate the real square root of a negative number.");
            return Math.sqrt(first);
        case "subtract":
            return first - second;
        default:
            throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} error: ${error.name} - ${error.message}`);
    }
}
