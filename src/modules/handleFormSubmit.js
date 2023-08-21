import addTaskToList from './addTask.js';

const handleFormSubmit = () => {
  const form = document.getElementById('todo-form');
  const taskInput = document.getElementById('task-input');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTaskToList(taskInput.value.trim());

    taskInput.value = '';
  });
};

export default handleFormSubmit;