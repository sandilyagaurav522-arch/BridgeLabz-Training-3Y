// Assignment 3 - Q6: Pyramid Pattern Generator
// Student: Gaurav Sandilya | GLA University
"use strict";

const userInput = 5; // Change this value to simulate user input; default = 5.
const limit = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

for (let row = 1; row <= limit; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }
    console.log(pattern.trim());
}

// Debug tip: breakpoint on the outer loop and watch row, column, and pattern.
// Replacing let with var makes loop variables function-scoped rather than block-scoped.
