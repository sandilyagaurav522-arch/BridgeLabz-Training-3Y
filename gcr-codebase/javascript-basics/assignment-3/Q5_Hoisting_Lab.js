// Assignment 3 - Q5: Hoisting Lab: The Sequence Trap
// Student: Gaurav Sandilya | GLA University

// Original behavior notes:
// console.log(score) prints undefined because var is hoisted and initialized to undefined.
// announce() works because function declarations are hoisted.
// Accessing let status before initialization would throw ReferenceError (temporal dead zone).
// startGame() below runs only after status is initialized.

var score = 50;
function announce() {
    console.log("Game started");
}
let status = "ready";

console.log(score);
announce();
startGame();

function startGame() {
    console.log(status);
}

// Arrow functions are not hoisted like function declarations; call after initialization.
const startGameArrow = () => console.log(status);
startGameArrow();
