// Assignment 3 - Q4: Debugging Mystery
// Student: Gaurav Sandilya | GLA University
"use strict";

function showMessage() {
    // Strict mode prevents assignment to an undeclared variable.
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Debug tip: add a breakpoint at the const declaration; watch greeting and inspect Call Stack.
