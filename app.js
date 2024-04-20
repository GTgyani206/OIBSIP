const del = document.querySelectorAll(".del");
const complete = document.querySelectorAll(".complete");
const add = document.querySelector(".add");
const taskInput = document.getElementById("taskInput");
const edit = document.querySelectorAll(".edit");
const retry = document.querySelectorAll(".retry");

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

try {
  add.addEventListener("click", () => {
    let task = taskInput.value;
    console.log(task);
    let inp = document.querySelector(".add");
    inp.append(`${task}`);
  });
} catch (err) {
  console.log(err);
  next();
}

for (editBtn of edit) {
  editBtn.addEventListener("click", () => {
    console.log("edit");
  });
}

for (retryBtn of retry) {
  retryBtn.addEventListener("click", () => {
    console.log("retry");
  });
}

let qouteUrl = "https://api.quotable.io/random";
const Qoute = document.querySelector(".qoute");
try {
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
} catch (err) {
  console.log(err);
  next();
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
getTime();
setInterval(getTime, 1000);
// getQuote();
