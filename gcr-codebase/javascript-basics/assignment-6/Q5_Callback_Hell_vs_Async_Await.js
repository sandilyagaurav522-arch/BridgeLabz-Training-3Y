// Q5: First demonstrate nested callbacks (callback hell), then async/await.
function callbackStage(stageName, next) {
    setTimeout(() => {
        console.log(stageName);
        if (next) next();
    }, 1000);
}

function runWithNestedCallbacks() {
    console.log("Callback pipeline:");
    callbackStage("design", () => {
        callbackStage("build", () => {
            callbackStage("test", () => {
                callbackStage("deploy", () => {
                    callbackStage("celebrate");
                });
            });
        });
    });
}

function promiseStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await pipeline:");
    await promiseStage("design");
    await promiseStage("build");
    await promiseStage("test");
    await promiseStage("deploy");
    await promiseStage("celebrate");
}

// Run the examples one after another so their output does not overlap.
runWithNestedCallbacks();

setTimeout(async () => {
    await runWithAsyncAwait();
}, 5500);

// async/await improves readability because sequential asynchronous steps look
// like ordinary top-to-bottom code. It also makes try/catch error handling easier.
