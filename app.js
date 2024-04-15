const del = document.querySelectorAll(".del");
const complete = document.querySelectorAll(".complete");
const add = document.querySelector(".task-btn"); // Changed selector to match the button's class
const taskInput = document.querySelector(".task-text"); // Changed selector to match the input's class
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
  const task = taskInput.value; // Changed to use the correct variable name and selector
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

let quoteUrl = "https://api.quotable.io/random"; // Corrected variable name
const Quote = document.querySelector(".quote"); // Corrected selector name

function getQuote() {
  axios.get(quoteUrl).then((response) => {
    let quote = response.data.content; // Corrected variable name
    let author = response.data.author;
    let finalQuote = `<p>${quote}</p> <p>-${author}</p>`; // Corrected variable name

    const p = document.createElement("p");
    p.innerHTML = finalQuote;
    Quote.appendChild(p);
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
