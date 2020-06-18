const form = document.querySelector('form');
const input = document.querySelector('form input');
const tasks = document.querySelector('#tasks')
const count = document.querySelector('#count')


form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value === "") {
    return alert("You haven't add any task")
  }
  addTask(input.value);
  input.value = '';
  count.innerText = tasks.children.length;
})

// create a new task
addTask = (task) => {
  const toDo = document.createElement('div');
  toDo.classList = "status"
  toDo.innerText = task;
  toDo.addEventListener('click', toggleStatus);
  toDo.addEventListener('dblclick', (event) => {
    tasks.removeChild(event.target);
    updateCount();
  });
  tasks.prepend(toDo);
}

toggleStatus = (event) => {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList = "status";
  } else {
    task.classList = "status completed";
  };
};

updateCount = () => {
  count.innerText = tasks.children.length;
};