// Assignment 2 - Q1: Scope Conflict Resolver
// Student: Gaurav Sandilya | GLA University
let bonus = 5000; // Global bonus

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: ₹${bonus}`);
