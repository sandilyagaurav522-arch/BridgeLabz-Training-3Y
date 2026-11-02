// Q2: Demonstrate the event loop task order.
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Synchronous JavaScript runs first. After the current call stack is empty,
// the event loop drains the microtask queue (including Promise callbacks)
// before moving to the next macrotask such as setTimeout.
