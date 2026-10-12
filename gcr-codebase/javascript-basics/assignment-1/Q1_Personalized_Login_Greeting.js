// Assignment 1 - Q1: Personalized Login Greeting
// Student: Gaurav Sandilya | GLA University
// Change userName if you want to greet another user.

const userName = "Gaurav Sandilya";
const currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
