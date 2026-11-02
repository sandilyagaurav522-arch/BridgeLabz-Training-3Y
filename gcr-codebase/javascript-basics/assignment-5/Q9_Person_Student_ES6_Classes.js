// Assignment 5 - Q9: Person -> Student using ES6 Classes
// Student: Gaurav Sandilya | GLA University
"use strict";

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Gaurav", "Computer Science");
student.showName();
student.showBranch();

console.log("Student inherits Person:", student instanceof Person);

// This produces the same observable behavior as Q5's prototype-based version:
// both print the student's name and branch, and Student inherits from Person.
