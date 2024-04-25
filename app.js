const del = document.querySelectorAll(".del");
const complete = document.querySelectorAll(".complete");
const add = document.querySelector(".add");
const edit = document.querySelectorAll(".edit");
const retry = document.querySelectorAll(".retry");

// JS for diffferent buttons and their related functions

// Function to add a new task to the todo list also this function consist of the event listener for new tasks
const addTask = () => {
  // Get the task input value
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value.trim(); // Trim any leading or trailing spaces

  if (taskText !== "") {
    // Create a new task item
    const newTaskId = Date.now(); // Generate a unique ID for the new task
    const newTaskHTML = `
      <span class="todoLi">
        <li id="task${newTaskId}">${taskText}</li>
        <div class="btn-grp">
          <button class="btn btn-success complete" title="Completed" id="btn${newTaskId}">
            <i class="fa-solid fa-check"></i>
          </button>
          <button class="btn btn-danger del" title="Delete" id="del${newTaskId}">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button class="btn btn-primary edit" title="Edit" id="edit${newTaskId}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </span>
    `;

    // Create a new li element and add it to the ul
    const todoList = document.querySelector(".ToDo ul");
    const newTaskLi = document.createElement("span");
    newTaskLi.innerHTML = newTaskHTML;
    todoList.appendChild(newTaskLi);

    // Clear the task input field after adding the task
    taskInput.value = "";

    console.log(`New task added with ID task${newTaskId}`);

    // Reattach event listeners for buttons after adding a new task
    attachButtonEventListeners();
  } else {
    console.log("Please enter a valid task.");
  }
};

// Function to attach event listeners to buttons
const attachButtonEventListeners = () => {
  const completeBtns = document.querySelectorAll(".complete");
  completeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskId = btn.getAttribute("id").replace("btn", "");
      // Implement complete task functionality
      completeTask(taskId);
    });
  });

  const delBtns = document.querySelectorAll(".del");
  delBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskId = btn.getAttribute("id").replace("del", "");
      // Implement delete task functionality
      deleteTask(taskId);
    });
  });

  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const taskId = btn.getAttribute("id").replace("edit", "");
      // Implement edit task functionality
      editTask(taskId);
    });
  });
};

// Add event listener to the add button
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  addTask(); // Call the addTask function when the button is clicked
});

// Function to delete a task
const deleteTask = (taskId) => {
  // Find the task element to delete
  const taskToDelete = document.querySelector(`#task${taskId}`);
  if (taskToDelete) {
    // Remove the task element
    taskToDelete.parentElement.remove();
    alert = `Task ${taskId} deleted.`;
  }
};

// Event listener for delete buttons
const deleteBtns = document.querySelectorAll(".del");
deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const taskId = deleteBtn.getAttribute("id").replace("del", "");
    deleteTask(taskId);
  });
});

// Function to edit a task
const editTask = (taskId) => {
  const taskToEdit = document.querySelector(`#task${taskId}`);
  if (taskToEdit) {
    const newTaskText = prompt("Enter the new task text:");
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskToEdit.textContent = newTaskText;
      alert = `Task ${taskId} edited`;
    }
  }
};

// Event listener for edit buttons
const editBtns = document.querySelectorAll(".edit");
editBtns.forEach((editBtn) => {
  editBtn.addEventListener("click", () => {
    const taskId = editBtn.getAttribute("id").replace("edit", "");
    editTask(taskId);
  });
});

// Function to retry a task
const retryTask = (taskId) => {
  // Move the task back to the todo list and remove the retry button and edit and complete buttons
  const taskToRetry = document.querySelector(`#task${taskId}`);
  const taskToRetryBtns = document.querySelector(`#retry${taskId}`);
  const tasktoDelete = document.querySelector(`#del${taskId}`);

  tasktoDelete.remove();
  taskToRetryBtns.remove();

  const newBtn = `
        <div class="btn-grp">
          <button class="btn btn-success complete" title="Completed" id="btn${taskId}">
            <i class="fa-solid fa-check"></i>
          </button>
          <button class="btn btn-danger del" title="Delete" id="del${taskId}">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <button class="btn btn-primary edit" title="Edit" id="edit${taskId}">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          </div>
    `;

  const taskToRetryDiv = document.createElement("div.btn-grp");
  taskToRetryDiv.innerHTML = newBtn;
  taskToRetry.appendChild(taskToRetryDiv);
  attachButtonEventListeners();

  if (taskToRetry) {
    const todoList = document.querySelector(".ToDo ul");
    todoList.appendChild(taskToRetry.parentElement);
    alert = `Task ${taskId} retried.`;
  }
};

// Event listener for retry buttons
const retryBtns = document.querySelectorAll(".retry");
retryBtns.forEach((retryBtn) => {
  retryBtn.addEventListener("click", () => {
    const taskId = retryBtn.getAttribute("id").replace("retry", "");
    retryTask(taskId);
  });
});

//Function for completing the task
const completeTask = (taskId) => {
  // Move the task to the completed list and remove extra buttons
  const taskToComplete = document.querySelector(`#task${taskId}`);
  const taskToCompleteBtns = document.querySelector(`#btn${taskId}`);
  const taskToCompleteEdit = document.querySelector(`#edit${taskId}`);

  taskToCompleteBtns.remove();
  taskToCompleteEdit.remove();

  if (taskToComplete) {
    const completedList = document.querySelector(".opt div ul");
    completedList.appendChild(taskToComplete.parentElement);
    alert = `Task ${taskId} completed.`;
  }
};

// Event listener for complete buttons
const completeBtns = document.querySelectorAll(".complete");
completeBtns.forEach((completeBtn) => {
  completeBtn.addEventListener("click", () => {
    const taskId = completeBtn.getAttribute("id").replace("btn", "");
    completeTask(taskId);
  });
});

//code for fetching the qoutes from the qouable.io api
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

//code for extracting time from prebuild Date() function
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

//code for building callendar
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
let calendar = document.querySelector(".calendar");
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month_picker = document.querySelector("#month-picker");
const dayTextFormate = document.querySelector(".day-text-formate");
const timeFormate = document.querySelector(".time-formate");
const dateFormate = document.querySelector(".date-formate");

month_picker.onclick = () => {
  month_list.classList.remove("hideonce");
  month_list.classList.remove("hide");
  month_list.classList.add("show");
  dayTextFormate.classList.remove("showtime");
  dayTextFormate.classList.add("hidetime");
  timeFormate.classList.remove("showtime");
  timeFormate.classList.add("hideTime");
  dateFormate.classList.remove("showtime");
  dateFormate.classList.add("hideTime");
};

const generateCalendar = (month, year) => {
  let calendar_days = document.querySelector(".calendar-days");
  calendar_days.innerHTML = "";
  let calendar_header_year = document.querySelector("#year");
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let currentDate = new Date();

  month_picker.innerHTML = month_names[month];

  calendar_header_year.innerHTML = year;

  let first_day = new Date(year, month);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");

    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;

      if (
        i - first_day.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("current-date");
      }
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector(".month-list");
month_names.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div>${e}</div>`;

  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace("show", "hide");
    dayTextFormate.classList.remove("hideTime");
    dayTextFormate.classList.add("showtime");
    timeFormate.classList.remove("hideTime");
    timeFormate.classList.add("showtime");
    dateFormate.classList.remove("hideTime");
    dateFormate.classList.add("showtime");
  };
});

(function () {
  month_list.classList.add("hideonce");
})();
document.querySelector("#pre-year").onclick = () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector("#next-year").onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector(".time-formate");
const todayShowDate = document.querySelector(".date-formate");

const currshowDate = new Date();
const showCurrentDateOption = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
const currentDateFormate = new Intl.DateTimeFormat(
  "en-US",
  showCurrentDateOption
).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
  const timer = new Date();
  const option = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formateTimer = new Intl.DateTimeFormat("en-us", option).format(timer);
  let time = `${`${timer.getHours()}`.padStart(
    2,
    "0"
  )}:${`${timer.getMinutes()}`.padStart(
    2,
    "0"
  )}: ${`${timer.getSeconds()}`.padStart(2, "0")}`;
  todayShowTime.textContent = formateTimer;
}, 1000);
