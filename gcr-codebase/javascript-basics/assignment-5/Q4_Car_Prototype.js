// Assignment 5 - Q4: Car Constructor and Prototype Method
// Student: Gaurav Sandilya | GLA University
"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`${this.brand} ${this.model}`);
};

const car1 = new Car("Tata", "Nexon");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

console.log(
    "Shared prototype method:",
    Object.getPrototypeOf(car1).getDetails === Object.getPrototypeOf(car2).getDetails
);
