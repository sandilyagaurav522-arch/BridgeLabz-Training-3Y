// Assignment 2 - Q7: Customer Feedback Processor
// Student: Gaurav Sandilya | GLA University
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const lowerCaseFeedback = feedback.toLowerCase();
const hasNegativeWords = lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${words.length}`);

if (hasNegativeWords) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
