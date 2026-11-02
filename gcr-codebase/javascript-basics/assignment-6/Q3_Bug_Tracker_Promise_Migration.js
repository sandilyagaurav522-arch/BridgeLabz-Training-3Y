// Q3: Convert the callback-based bug fetcher into a Promise-based function.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject(new Error("Bug tracker API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.table(bugs.map((bug, index) => ({
            Number: index + 1,
            Bug: bug
        })));
    })
    .catch((error) => {
        console.error(error.message);
    });
