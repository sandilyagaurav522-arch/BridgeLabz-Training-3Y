// Assignment 2 - Q8: Dynamic Discount Evaluator
// Student: Gaurav Sandilya | GLA University
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let subtotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedSubtotal = 0;

for (const product of cart) {
    let discountRate = 0;
    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    discountedSubtotal += product.price * (1 - discountRate);
    console.log(`${product.item}: ₹${product.price.toFixed(2)}, discount: ${(discountRate * 100).toFixed(0)}%`);
}

const extraDiscountRate = subtotal > 50000 ? 0.05 : 0;
const finalTotal = discountedSubtotal * (1 - extraDiscountRate);

console.log(`Original cart total: ₹${subtotal.toFixed(2)}`);
console.log(`Total after category discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Extra overall discount: ${(extraDiscountRate * 100).toFixed(0)}%`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
