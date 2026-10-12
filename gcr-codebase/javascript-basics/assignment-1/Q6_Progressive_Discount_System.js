// Assignment 1 - Q6: Progressive Discount System
// Student: Gaurav Sandilya | GLA University
// Change purchaseTotal to test the discount tiers.

const purchaseTotal = 6500;

if (!Number.isFinite(purchaseTotal) || purchaseTotal < 0) {
    console.log("Please enter a valid non-negative purchase amount.");
} else {
    let discountRate;

    if (purchaseTotal >= 10000) {
        discountRate = 0.25;
    } else if (purchaseTotal >= 5000) {
        discountRate = 0.15;
    } else if (purchaseTotal >= 2000) {
        discountRate = 0.05;
    } else {
        discountRate = 0;
    }

    const discountAmount = purchaseTotal * discountRate;
    const finalPrice = Math.round(purchaseTotal - discountAmount);

    console.log(`Original total: ₹${Math.round(purchaseTotal)}`);
    console.log(`Discount percentage: ${discountRate * 100}%`);
    console.log(`Discount amount: ₹${Math.round(discountAmount)}`);
    console.log(`Final price after discount: ₹${finalPrice}`);
}
