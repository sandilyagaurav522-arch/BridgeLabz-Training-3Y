const API_URL = "http://localhost:3002/employees";
const container = document.getElementById("employees");
const feedback = document.getElementById("feedback");

function request(method, url, body, onSuccess, onError) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) onSuccess(xhr.responseText ? JSON.parse(xhr.responseText) : null);
    else onError();
  };
  xhr.onerror = onError;
  xhr.send(body ? JSON.stringify(body) : null);
}

function renderEmployees() {
  request("GET", API_URL, null, employees => {
    container.replaceChildren();
    employees.forEach(employee => {
      const row = document.createElement("article");
      row.className = "employee-row";
      const info = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = employee.name;
      const status = document.createElement("span");
      status.className = `status ${employee.status}`;
      status.textContent = employee.status;
      info.append(name, status);

      const button = document.createElement("button");
      button.textContent = employee.status === "active" ? "Set inactive" : "Set active";
      button.addEventListener("click", () => toggleStatus(employee, status, button));
      row.append(info, button);
      container.append(row);
    });
  }, () => feedback.textContent = "Could not load employees. Check JSON Server on port 3002.");
}

function toggleStatus(employee, statusElement, button) {
  const oldStatus = employee.status;
  const newStatus = oldStatus === "active" ? "inactive" : "active";
  employee.status = newStatus; // Optimistic UI update
  statusElement.textContent = newStatus;
  statusElement.className = `status ${newStatus}`;
  button.disabled = true;
  button.textContent = newStatus === "active" ? "Set inactive" : "Set active";
  feedback.textContent = "";

  request("PATCH", `${API_URL}/${employee.id}`, { status: newStatus }, () => {
    button.disabled = false;
  }, () => {
    employee.status = oldStatus; // Roll back if the API request fails
    statusElement.textContent = oldStatus;
    statusElement.className = `status ${oldStatus}`;
    button.textContent = oldStatus === "active" ? "Set inactive" : "Set active";
    button.disabled = false;
    feedback.textContent = "Update failed. The previous status has been restored.";
  });
}
renderEmployees();
