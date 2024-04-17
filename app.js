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
let qouteUrl = "https://api.quotable.io/random";
const Qoute = document.querySelector(".qoute");
function getQuote() {
  axios.get(qouteUrl).then((response) => {
    let qoute = response.data.content;
    let author = response.data.author;
    let finalqoute = `<p>${qoute}</p> <p>-${author}</p>`;
    const p = document.createElement("p");
    p.innerHTML = finalqoute;
    Qoute.appendChild(p);
  });
}
function getTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let finalTime = `<center><h1>${hours}:${minutes}:${seconds} ${ampm}</h1></center>`;
  const timeDiv = document.querySelector(".time");
  timeDiv.innerHTML = finalTime;
}
setInterval(getTime, 1000);
getQuote();
