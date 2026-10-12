// Assignment 1 - Q10: Citizen Eligibility Validator
// Student: Gaurav Sandilya | GLA University
// Note: The assignment's first two conditions overlap (citizen and age >= 18
// includes ages 18-20). To make "Eligible to vote only" meaningful, this code
// treats citizens aged 18-20 as vote-only and citizens aged 21+ as eligible
// for all listed services. Adjust the age boundary if your instructor specifies otherwise.

const age = 20;
const isCitizen = true;

if (!Number.isInteger(age) || age < 0) {
    console.log("Please enter a valid age.");
} else if (isCitizen) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
