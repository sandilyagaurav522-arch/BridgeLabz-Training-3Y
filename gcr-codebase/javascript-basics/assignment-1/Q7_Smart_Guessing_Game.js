// Assignment 1 - Q7: Smart Guessing Game
// Student: Gaurav Sandilya | GLA University
// Change userGuess to test different guesses.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Test value; must be between 1 and 50.

console.log(`Secret number (for testing): ${secretNumber}`);
console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
