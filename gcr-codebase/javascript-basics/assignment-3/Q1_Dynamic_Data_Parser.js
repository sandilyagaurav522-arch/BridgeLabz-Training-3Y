// Assignment 3 - Q1: Dynamic Data Parser
// Student: Gaurav Sandilya | GLA University
"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

for (const value of apiData) {
    const numericValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);
    const isInvalidNumber = Number.isNaN(numericValue) ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "string" && value.trim() === "100px");

    const report = { original: value, number: numericValue, boolean: booleanValue, string: stringValue };

    if (isInvalidNumber) {
        invalidNumericData.push(report);
        console.log("INVALID numeric value:", report);
    } else {
        validNumericData.push(report);
        console.log("Valid numeric value:", report);
    }
}

console.log("Valid numeric entries:", validNumericData);
console.log("Invalid numeric entries:", invalidNumericData);
console.log(`Valid count: ${validNumericData.length}; Invalid count: ${invalidNumericData.length}`);
