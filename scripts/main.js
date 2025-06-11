// ==============================
// 🌱 Sélection des éléments
// ==============================

// Inputs
const inputTaskName = document.querySelector(`.task-name`);
const inputTaskDate = document.querySelector(`.task-date`);
const inputTaskDescription = document.querySelector(`.task-desc`);

// Buttons
const addTaskButton = document.querySelector(`.task-add`);
const sortButton = document.querySelector(`.tri`);

// Display
const DisplayedTaskList = document.querySelector(`.to-do-list`);
const DisplayedTaskListDone = document.querySelector(`.done-list`);

// Checkbox
const toDoListContainer = document.querySelector(`.to-do-list`);
const doneListContainer = document.querySelector(`.done-list`);
// ==============================
// 🎊 Variables globales
// ==============================
const taskList = [];
const taskListDone = [];
// ==============================
// 🎊 Fonctionnalités
// ==============================

// Utility Functions
function addTaskToTaskList() {
  taskList.push({
    name: inputTaskName.value,
    date: inputTaskDate.value,
    description: inputTaskDescription.value,
  });

  console.log(taskList);
}

// function addTaskToDoneTaskList(task) {
//   task.statut = "done";

//   taskListDone.push(task);
//   taskList.remove(task);
// }

// Display Functions
function displayTaskList() {
  DisplayedTaskList.innerHTML = `<h3>In the tube <button class="tri">trier</button></h3>`;

  taskList.forEach((element, index) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<summary>
    <span>
        <input type="checkbox">
        ${element.name}
    </span>
    <span>${element.date}</span>
  </summary>
  <p>${element.description}</p>`;
    newDiv.classList.add("task");
    newDiv.setAttribute("draggable", "true");
    newDiv.dataset.index = index;

    DisplayedTaskList.appendChild(newDiv);
  });
}

function displayTaskListDone() {
    DisplayedTaskListDone.innerHTML = `<h3>In the tube <button class="tri">trier</button></h3>`;
  
    taskListDone.forEach((element) => {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `<summary>
      <span>
          <input type="checkbox" class="checkbox">
          ${element.name}
      </span>
      <span>${element.date}</span>
    </summary>
    <p>${element.description}</p>`;
      newDiv.classList.add("task");
      newDiv.setAttribute("draggable", "true");
      
      DisplayedTaskListDone.appendChild(newDiv);
    });
  }
// ==============================
// 🧲 Événements
// ==============================
addTaskButton.addEventListener(`click`, (e) => {
  addTaskToTaskList();
  displayTaskList();
  displayTaskListDone();
});

toDoListContainer.addEventListener(`input`, (e) => {
    e.preventDefault();
    let index = e.target.closest(".task").dataset.index;
    let deletedElement = taskList.splice(index, 1);
    taskListDone.push(deletedElement[0]);
    displayTaskList();
    displayTaskListDone();
    
})

doneListContainer.addEventListener(`input`, (e) => {
    e.preventDefault();
    let index = e.target.closest(".task").dataset.index;
    let deletedElement = taskListDone.splice(index, 1);
    taskList.push(deletedElement[0]);
    displayTaskList();
    displayTaskListDone();
    
})

