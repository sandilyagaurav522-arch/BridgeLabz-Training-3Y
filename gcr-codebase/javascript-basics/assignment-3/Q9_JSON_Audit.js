// Assignment 3 - Q9: JSON Audit
// Student: Gaurav Sandilya | GLA University
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsed = JSON.parse(rawData[index]);

        if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
            !Object.prototype.hasOwnProperty.call(parsed, "age")) {
            throw new Error("Missing required key: user or age.");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new TypeError("Age is not a valid number.");
        }

        const cleanedRecord = { ...parsed, age };
        cleanData.push(cleanedRecord);
        console.log(`Line ${lineNumber}: valid JSON record`);
    } catch (error) {
        errors.push({ lineNumber, message: error.message });
        console.log(`Line ${lineNumber} error: ${error.message}`);
    }
}

const under18Users = cleanData.filter(user => user.age < 18);
console.log("Clean data:", cleanData);
console.log("Users under 18:", under18Users);
console.log("Errors:", errors);
// Debug tip: set a breakpoint inside catch to inspect lineNumber and error.
