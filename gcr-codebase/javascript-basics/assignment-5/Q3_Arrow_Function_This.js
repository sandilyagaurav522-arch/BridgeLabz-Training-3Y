// Assignment 5 - Q3: Arrow Function and this
// Student: Gaurav Sandilya | GLA University
"use strict";

const userWithArrow = {
    name: "Gaurav",
    showName: () => console.log("Arrow function name:", this.name)
};

userWithArrow.showName();
// In a Node.js module, the top-level this is not userWithArrow.
// Arrow functions capture this from the surrounding scope, so this.name is undefined.

const userWithNormalFunction = {
    name: "Gaurav",
    showName: function () {
        console.log("Normal function name:", this.name);
    }
};

userWithNormalFunction.showName();
// A normal method gets this from the object before the dot.
