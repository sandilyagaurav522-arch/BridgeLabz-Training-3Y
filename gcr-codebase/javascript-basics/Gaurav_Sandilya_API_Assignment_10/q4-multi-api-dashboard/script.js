const BASE_URL = "http://localhost:3004";
const endpoints = [
  { key: "users", url: `${BASE_URL}/users` },
  { key: "orders", url: `${BASE_URL}/orders` },
  { key: "products", url: `${BASE_URL}/products` }
];

async function loadDashboard() {
  const warning = document.getElementById("warning");
  try {
    const results = await Promise.all(endpoints.map(async endpoint => {
      const response = await fetch(endpoint.url);
      if (!response.ok) throw new Error(`${endpoint.key} request failed`);
      return [endpoint.key, await response.json()];
    }));
    const data = Object.fromEntries(results);
    endpoints.forEach(endpoint => {
      const element = document.getElementById(endpoint.key);
      element.textContent = data[endpoint.key].length;
      element.classList.remove("skeleton");
    });
  } catch (error) {
    warning.textContent = "Some data could not be loaded.";
    // Promise.all rejects if any request fails; load each endpoint separately
    // so successful totals can still be displayed.
    await Promise.all(endpoints.map(async endpoint => {
      try {
        const response = await fetch(endpoint.url);
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        const element = document.getElementById(endpoint.key);
        element.textContent = data.length;
        element.classList.remove("skeleton");
      } catch (_) {
        const element = document.getElementById(endpoint.key);
        element.textContent = "Unavailable";
        element.classList.remove("skeleton");
      }
    }));
  }
}
loadDashboard();
