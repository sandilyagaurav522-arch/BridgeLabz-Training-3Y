const API_URL = "http://localhost:3005/timetable";
const daySelect = document.getElementById("day");
const scheduleBody = document.getElementById("schedule");
const message = document.getElementById("message");

async function loadTimetable(day) {
  message.textContent = "Loading timetable...";
  scheduleBody.replaceChildren();
  try {
    const response = await fetch(`${API_URL}?day=${encodeURIComponent(day)}`);
    if (!response.ok) throw new Error("Request failed");
    const classes = await response.json();
    if (!classes.length) {
      message.textContent = "No classes today.";
      return;
    }
    message.textContent = "";
    classes.forEach(item => {
      const row = document.createElement("tr");
      [item.subject, item.faculty, item.time].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });
      scheduleBody.append(row);
    });
  } catch (error) {
    message.textContent = "Could not load timetable. Check JSON Server on port 3005.";
  }
}
daySelect.addEventListener("change", () => loadTimetable(daySelect.value));
loadTimetable(daySelect.value);
