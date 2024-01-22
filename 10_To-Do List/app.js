const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.querySelector("#taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    taskInput.style.border = "1px solid red";
    taskInput.style.color = "red";

    setTimeout(() => {
      taskInput.style.border = "";
      taskInput.style.color = "";
    }, 2000);

    return;
  }

  // create to-do item
  const li = document.createElement("li");

  // create to-do item checkbox 
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);


  // create text node for to-do content and add it to to-do item
  const txt = taskInput.value.trim();
  tasks.push(txt); 
  const content = document.createTextNode(txt);
  li.appendChild(content);

  // add to-do item to to-do list
  taskList.appendChild(li);
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

clearCompletedBtn.addEventListener("click", () => {


    if(taskList.hasChildNodes()) {
        const todos = document.querySelectorAll("#taskList > li");

        let unComplete = Array.from(todos);

        let fragment = document.createDocumentFragment();
        fragment.append(...unComplete.filter(task => task.firstElementChild.checked === false));
        
        taskList.innerHTML = '';
        taskList.appendChild(fragment)

    }
    
});
