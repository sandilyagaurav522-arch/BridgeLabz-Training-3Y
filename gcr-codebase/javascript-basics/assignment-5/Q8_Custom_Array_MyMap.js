// Assignment 5 - Q8: Custom Array myMap
// Student: Gaurav Sandilya | GLA University
"use strict";

Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("myMap called on null or undefined");
    }
    if (typeof callback !== "function") {
        throw new TypeError("Callback must be a function");
    }

    const source = Object(this);
    const result = new Array(source.length);

    for (let index = 0; index < source.length; index++) {
        if (index in source) {
            result[index] = callback.call(thisArg, source[index], index, source);
        }
    }

    return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3].myMap((number, index) => number + index)); // [1, 3, 5]
