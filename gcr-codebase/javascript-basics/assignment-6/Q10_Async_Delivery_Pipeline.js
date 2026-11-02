// Q10: Run an asynchronous food delivery pipeline with random delays and failures.
function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1000);

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Each await pauses this async function until that step settles.
        // The next step starts only after the current step succeeds.
        await runDeliveryStep("takeOrder", "Step 1: Order taken");
        await runDeliveryStep("prepare", "Step 2: Food prepared");
        await runDeliveryStep("pack", "Step 3: Package ready");
        await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        await runDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();

// Promises schedule asynchronous work without blocking the main thread.
// await suspends this function, not the whole JavaScript program. When a
// Promise settles, the continuation is scheduled through the microtask queue.
