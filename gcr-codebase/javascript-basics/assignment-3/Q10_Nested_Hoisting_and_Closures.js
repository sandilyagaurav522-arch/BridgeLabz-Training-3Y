// Assignment 3 - Q10: Nested Hoisting and Closures
// Student: Gaurav Sandilya | GLA University
"use strict";

function outer() {
    console.log("Outer count before assignment:", count); // undefined due to var hoisting
    var count = 5;

    const inner = () => {
        // Arrow functions do not create their own `this` or arguments, but `var count`
        // in the original inner function created a separate local binding.
        console.log("Outer count from arrow:", count); // captures outer count = 5
    };

    inner();
}

outer();

// Debug tip: pause at outer() and inner() to inspect the call stack and local scopes.
