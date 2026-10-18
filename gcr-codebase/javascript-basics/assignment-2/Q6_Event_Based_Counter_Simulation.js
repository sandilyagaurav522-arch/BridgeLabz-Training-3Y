// Assignment 2 - Q6: Event-Based Counter Simulation
// Student: Gaurav Sandilya | GLA University
let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);

    function nestedIncrement() {
        count++;
        console.log(`Count after nested increment: ${count}`);
    }
    nestedIncrement();
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

increment();
increment();
decrement();
