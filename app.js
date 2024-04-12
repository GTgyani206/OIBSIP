document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask(taskName) {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        ${taskName}
        <div>
          <input type="checkbox" class="form-check-input me-2" />
          <button class="btn btn-danger delete-btn">Delete</button>
        </div>
      `;
    taskList.appendChild(li);
  }

  // Event listener for adding a new task
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
      addTask(taskName);
      taskInput.value = "";
    }
  });

  // Event delegation for deleting a task
  taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      const listItem = e.target.closest(".list-group-item");
      listItem.remove();
    }
  });

  // Event delegation for marking a task as completed
  taskList.addEventListener("change", function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
      const listItem = e.target.closest(".list-group-item");
      listItem.classList.toggle("completed");
    }
  });
});
