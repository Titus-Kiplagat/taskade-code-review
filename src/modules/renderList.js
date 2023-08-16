import createListMarkup from './createListMarkup.js';
import tasks from './getTasks.js';
import removeTask from './removeTask.js';

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
};

export default renderList;