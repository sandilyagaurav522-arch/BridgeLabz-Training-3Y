// Assignment 3 - Q3: Transaction Validator
// Student: Gaurav Sandilya | GLA University
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            const error = new Error("Null transaction entry.");
            error.name = "NullTransactionError";
            throw error;
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("Missing transaction id or amount.");
            error.name = "MissingFieldError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative.");
            error.name = "NegativeAmountError";
            throw error;
        }

        validTransactions.push(transaction);
        console.log(`Valid transaction: ID ${transaction.id}, amount ₹${transaction.amount}`);
    } catch (error) {
        invalidTransactions.push({ transaction, errorType: error.name, message: error.message });
        console.log(`Invalid transaction: ${error.name} - ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful: ${validTransactions.length}; Failed: ${invalidTransactions.length}`);
// Debug tip: set a breakpoint on the first if statement and inspect transaction/error.
