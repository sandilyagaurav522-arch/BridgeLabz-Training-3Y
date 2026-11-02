// Q1: Simulate coffee preparation with Promise chaining.
function delayStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1000);

        setTimeout(() => {
            // Randomly fail one step to demonstrate .catch().
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed.`));
            } else {
                console.log(stepName);
                resolve();
            }
        }, delay);
    });
}

delayStep("Boiling water...")
    .then(() => delayStep("Brewing coffee..."))
    .then(() => delayStep("Pouring coffee into a cup..."))
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.error("Coffee process failed:", error.message));
