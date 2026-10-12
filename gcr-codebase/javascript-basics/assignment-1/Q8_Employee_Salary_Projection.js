// Assignment 1 - Q8: Employee Salary Projection
// Student: Gaurav Sandilya | GLA University
// Sample starting salary and annual increment; edit to test other values.

const currentSalary = 50000;
const annualIncrementRate = 10; // Percentage
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary *= 1 + annualIncrementRate / 100; // Compound annual increment.
    projectedSalary = Math.round(projectedSalary);
    salaryProjection.push({
        Year: year,
        Salary: `₹${projectedSalary.toLocaleString("en-IN")}`
    });
}

console.table(salaryProjection);
