var tasks = [];

var taskStatus = {
  active: 'active',
  completed: 'completed'
};

// Task constructor
function Task(id, name, status) {
  this.id = id;
  this.name = name;
  this.status = status;
}

function addTaskElement(task){
  // creates elements
  var taskEl = document.createElement('li');
  var textEl = document.createTextNode(task.name);

  // sets attributes
  taskEl.setAttribute('id', task.id);

  // adds text to task element
  taskEl.appendChild(textEl);

  // adds task to active-list
  document.getElementById('active-list').appendChild(taskEl);
}

// click handler to handle add new task
function addTask(event) {
  var inputEl = document.getElementById('input-task');
  if(inputEl.value != ''){
    //creates id
    var id = 'task-' + tasks.length;

    //creates new task
    var task = new Task(id, inputEl.value, taskStatus.active);
    tasks.push(task);
  
    //adds task to DOM
    addTaskElement(task);
  
    // reset input
    inputEl.value = '';
  }
}

// Click to complete task
function completeTask(event) {
  // gets task element
  var taskEl = event.target;
  var id = taskEl.id;

  // find corresponding task in array and update status
  var updated = false;
  for(var i = 0; updated === false && i < tasks.length; ++i) {
    if(tasks[i].id === id) {
      tasks[i].status = taskStatus.completed;
      updated = true;
    }
  }

  // remove task element from active to completed
  taskEl.remove();
  document.getElementById('completed-list').appendChild(taskEl);
}

// KEY Press Handler on Enter KEy
function clickButton(event) {
  if(event.keyCode === 13)
    document.getElementById('add-task').click();
}

function init(){
  // wires up add task handler
  document.getElementById('add-task').onclick = addTask;
  
  // wires up task completed handler
  document.getElementById('active-list').onclick = completeTask;

  // wires up enter key handler
  document.getElementById('input-task').onkeydown = clickButton;
}

init();