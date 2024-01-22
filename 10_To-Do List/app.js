
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');



addTaskBtn.addEventListener('click', (e) => {

    e.preventDefault();

    const li = document.createElement('li');
    const content = document.createTextNode(taskInput.value);
    li.appendChild(content);
    taskList.appendChild(li);

    taskInput.value = '';
});


clearCompletedBtn.addEventListener('click', () => {

    // check if the there To-list tasks
    if(taskList.hasChildNodes()) {
        while(taskList.hasChildNodes()) {
            taskList.removeChild(taskList.lastChild);
        }
    }
    else {
        alert('To-Do List is already Empty');
    }
});