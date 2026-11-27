const API_URL = "http://localhost:3006/users";
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  message.textContent = "Checking email...";

  try {
    const check = await axios.get(API_URL, { params: { email } });
    if (check.data.length > 0) {
      message.textContent = "Email already registered.";
      return;
    }
    await axios.post(API_URL, { name, email });
    message.textContent = "Registration successful.";
    form.reset();
  } catch (error) {
    message.textContent = "Registration failed. Check JSON Server on port 3006.";
  }
});
