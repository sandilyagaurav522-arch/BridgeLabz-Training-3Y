// Assignment 2 - Q9: Odd-Even Number Analyzer
// Student: Gaurav Sandilya | GLA University
const results = [];

for (let number = 1; number <= 30; number++) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push({ number, classification });
}

console.table(results);
