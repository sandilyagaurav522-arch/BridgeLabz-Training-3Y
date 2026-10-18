// Assignment 2 - Q4: Array Performance Analyzer
// Student: Gaurav Sandilya | GLA University
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (score >= 50): ${passedStudents}`);
