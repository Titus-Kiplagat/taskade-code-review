import createListMarkup from './createListMarkup.js';
import tasks from './getTasks.js';
import removeTask from './removeTask.js';
import updateTaskDescription from './updateTask.js';

const renderList = () => {
  const todosListItems = document.getElementById('todos');
  todosListItems.innerHTML = tasks.map(createListMarkup).join('');

  const deleteButtons = document.querySelectorAll('.remove-task');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      removeTask(index);
      renderList();
    });
  });

  const descriptionSpans = document.querySelectorAll('span');
  descriptionSpans.forEach((description, index) => {
    description.addEventListener('input', () => {
      updateTaskDescription(index, description.textContent);
    });
  });
};

export default renderList;