let taskList = document.querySelector(".task-list");
// Inner HTML for new tasks
let taskElements = '<div id="task-checkbox"></div> <input type="text" name="task-text" id="task-text">';
let count = 1;

// Added event listener to the first task
let taskCheckbox1 = document.querySelector("#task-checkbox");
taskCheckbox1.addEventListener("click", taskCheck);

function addTask() {
    count++;
    // Adds new task
    let indivTask = document.createElement("div");
    indivTask.classList.add("indiv-task", "task"+count);
    indivTask.innerHTML = taskElements;
    taskList.appendChild(indivTask);
    // Adds the class task(n) to task-checkbox
    let checkbox = document.querySelector(".task"+count+" #task-checkbox");
    checkbox.classList.add("task"+count);
    document.querySelector(".task"+count+" #task-checkbox").style.backgroundImage='url("img/uncheck.png")';
    // Adds an event listener to the new task created each time
    let taskCheckbox = document.querySelectorAll("#task-checkbox");
    taskCheckbox[count-1].addEventListener("click", taskCheck);
}

function taskCheck() {
    // Adds opacity=0.3 and disabled state to the respective textbox
    let taskText = document.querySelector("."+this.className+' #task-text');
    taskText.classList.toggle("done-task");
    taskText.toggleAttribute("disabled");
    // Toggles between Checked and Unchecked Image for the checkbox
    let taskCheckboxImg = this.style.backgroundImage;
    if(taskCheckboxImg=='url("img/uncheck.png")') {
        this.style.backgroundImage='url("img/check.png")';
    } else {
        this.style.backgroundImage='url("img/uncheck.png")';
    }
}
