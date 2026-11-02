// Assignment 5 - Q7: Closure Multiplier
// Student: Gaurav Sandilya | GLA University
"use strict";

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// The returned function remembers the multiplier variable from its outer scope.
// That preserved access to the outer variable is called a closure.
