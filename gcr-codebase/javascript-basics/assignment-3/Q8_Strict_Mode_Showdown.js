// Assignment 3 - Q8: Strict Mode Showdown
// Student: Gaurav Sandilya | GLA University
"use strict";

// In strict mode, duplicate parameter names and deleting an unqualified identifier
// are syntax errors. This correct ES6 version uses distinct parameters and const.
function demo(firstValue, secondValue) {
    const total = 10;
    console.log(`Arguments: ${firstValue}, ${secondValue}`);
    console.log(`Total: ${total}`);
}

demo(5, 10);

// To observe the original errors, test the assignment's original snippet separately.
// With "use strict", it fails to parse due to duplicate parameters and delete total.
