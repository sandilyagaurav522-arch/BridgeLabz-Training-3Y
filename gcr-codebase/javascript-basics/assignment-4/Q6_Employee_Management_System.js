// Gaurav Sandilya | GLA University | Assignment 4 Q6
"use strict";
class Employee{constructor(id,name,department,salary){Object.assign(this,{id,name,department,salary});}getAnnualSalary(){return this.salary*12;}applyBonus(percent){if(percent<0)throw new RangeError("Bonus cannot be negative");this.salary*=1+percent/100;}}
const employees=[new Employee(1,"Aarav","Engineering",60000),new Employee(2,"Meera","HR",42000),new Employee(3,"Kabir","Finance",50000),new Employee(4,"Isha","Marketing",45000),new Employee(5,"Rohan","Engineering",65000)];
employees[0].applyBonus(10);employees.forEach(e=>console.log(`${e.name}: ₹${e.getAnnualSalary().toFixed(2)} annually`));
console.log("Total annual payout: ₹"+employees.reduce((sum,e)=>sum+e.getAnnualSalary(),0).toFixed(2));
