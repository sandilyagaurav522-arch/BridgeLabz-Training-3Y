// Assignment 1 - Q2: Multi-Type Data Summary
// Student: Gaurav Sandilya | GLA University

const userName = "Gaurav Sandilya";           // string
const age = 23;                               // number
const isStudent = true;                       // boolean
const subjects = ["JavaScript", "DBMS", "OS"]; // array
const student = { name: userName, university: "GLA University" }; // object
const middleName = null;                      // null
let phoneNumber;                              // undefined

// typeof null returns "object" in JavaScript, so null is identified explicitly.
// Array.isArray() is used because typeof an array also returns "object.
const entries = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: JSON.stringify(subjects), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "student", value: JSON.stringify(student), type: typeof student },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "phoneNumber", value: phoneNumber, type: typeof phoneNumber }
];

console.table(entries);
