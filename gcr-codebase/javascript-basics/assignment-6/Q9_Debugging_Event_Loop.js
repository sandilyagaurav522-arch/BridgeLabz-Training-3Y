// Q9: Predict the output before running.
//
// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
//
// Synchronous logs run first. Promise.then() queues a microtask, which runs
// after the current call stack is empty. setTimeout queues a macrotask, which
// runs after the microtask queue has been processed.

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
