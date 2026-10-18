// Assignment 3 - Q2: Employee Bonus Calculator
// Student: Gaurav Sandilya | GLA University
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const employee of employees) {
        if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee record is missing required properties.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError(`Invalid salary or years for ${employee.name}.`);
        }

        const bonus = salary * (years > 3 ? 0.10 : 0.05);
        console.log(`${employee.name}: salary ₹${salary.toFixed(2)}, experience ${years} years, bonus ₹${bonus.toFixed(2)}`);
    }
} catch (error) {
    console.log(`Employee bonus error: ${error.name} - ${error.message}`);
}
