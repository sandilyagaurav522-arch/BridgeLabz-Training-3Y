// Assignment 5 - Q1: Callback Flow
// Student: Gaurav Sandilya | GLA University
"use strict";

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greetUser("Gaurav", showEndMessage);
