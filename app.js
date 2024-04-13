const del = document.querySelectorAll(".del");
const complete = document.querySelectorAll(".complete");
const add = document.querySelector("#button-addon2");
const taskInput = document.getElementById("taskInput");
const edit = document.querySelectorAll(".edit");
const retry = document.querySelectorAll(".retry");
let text = "";

for (delBtn of del) {
  delBtn.addEventListener("click", () => {
    console.log("delete");
    // delete the item
  });
}

for (completeBtn of complete) {
  completeBtn.addEventListener("click", () => {
    console.log("complete");
    // mark the item as complete
  });
}

add.addEventListener("click", () => {
  const task = taskInput.value; // Changed add.innertext to taskInput.value to get the input value
  console.log(task);
  text = task;
  // text = task; // You can use this if you need to store the task text in a variable
  // Add your code to add the task to a list or perform any other action with the task text
});

for (editBtn of edit) {
  editBtn.addEventListener("click", () => {
    console.log("edit");
    // edit the item
  });
}

for (retryBtn of retry) {
  retryBtn.addEventListener("click", () => {
    console.log("retry");
    // mark the item as retry
  });
}

console.log(text);
