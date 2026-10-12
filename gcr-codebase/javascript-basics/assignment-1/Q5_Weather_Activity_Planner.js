// Assignment 1 - Q5: Weather Activity Planner
// Student: Gaurav Sandilya | GLA University
// Change these sample values to test other weather conditions.

const temperature = 28; // Celsius
const isRaining = false;
const windSpeed = 12; // km/h

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) {
    // The combined && and || conditions check for generally walk-friendly weather.
    console.log("Perfect day for a walk.");
} else {
    console.log("Consider staying indoors if the weather feels uncomfortable.");
}
