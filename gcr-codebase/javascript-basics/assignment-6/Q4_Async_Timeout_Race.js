// Q4: Compare Promise.all() and Promise.race() for two deployment servers.
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly fail a server to demonstrate error handling.
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed`));
            } else {
                resolve(`${serverName} responded`);
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Promise.all() resolves when both servers succeed; it rejects if either fails.
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch((error) => console.error("Deployment error:", error.message));

// Promise.race() settles as soon as the first server settles (success or failure).
// Since both promises are shared, they are not started a second time.
Promise.race([serverA, serverB])
    .then((response) => console.log("Fastest response:", response))
    .catch((error) => console.error("Fastest response failed:", error.message));
