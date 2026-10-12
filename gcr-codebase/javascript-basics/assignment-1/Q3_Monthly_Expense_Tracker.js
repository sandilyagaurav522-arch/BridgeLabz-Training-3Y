// Assignment 1 - Q3: Monthly Expense Tracker
// Student: Gaurav Sandilya | GLA University
// Edit the expense values to calculate a different month's budget.

const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 6000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

let total = 0;

for (const expense of expenses) {
    total += expense.amount; // Add each category to the running total.
}

const average = total / expenses.length;
const taxRate = 0.10;
const tax = total * taxRate;
let finalAmount = total;
finalAmount += tax; // Assignment operator adds tax to the total.

console.table(expenses.map(expense => ({
    Category: expense.category,
    Expense: expense.amount.toFixed(2)
})));

console.log(`Total expenses: ₹${total.toFixed(2)}`);
console.log(`Average expense per category: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
