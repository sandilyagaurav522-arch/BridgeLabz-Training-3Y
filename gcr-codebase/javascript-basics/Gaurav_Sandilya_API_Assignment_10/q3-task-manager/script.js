const API_URL = "http://localhost:3003/tasks";

function loadTasks(filter = "all") {
  const params = {};
  if (filter === "completed") params.completed = true;
  else if (filter !== "all") params.priority = filter;

  $("#message").text("Loading tasks...");
  $("#tasks").empty();
  $.ajax({ url: API_URL, method: "GET", data: params, dataType: "json" })
    .done(tasks => {
      $("#message").text(tasks.length ? "" : "No tasks found.");
      tasks.forEach(task => {
        const row = $("<label>").addClass("task-row");
        const checkbox = $("<input>").attr("type", "checkbox").prop("checked", task.completed);
        checkbox.on("change", function () {
          const newValue = this.checked;
          $.ajax({
            url: `${API_URL}/${task.id}`, method: "PATCH",
            contentType: "application/json", data: JSON.stringify({ completed: newValue })
          }).fail(() => {
            checkbox.prop("checked", !newValue);
            $("#message").text("Could not update task. Please try again.");
          });
        });
        const title = $("<span>").text(task.title);
        if (task.completed) title.addClass("done");
        const priority = $("<span>").addClass(`priority ${task.priority}`).text(task.priority);
        row.append(checkbox, title, priority);
        $("#tasks").append(row);
      });
    })
    .fail(() => $("#message").text("Could not load tasks. Check JSON Server on port 3003."));
}
$("#filter").on("change", function () { loadTasks(this.value); });
loadTasks();
