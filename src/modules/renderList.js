import createListMarkup from './createListMarkup.js';
import tasks from './getTasksFromLocalStorage.js';

const renderList = () => {
  const todosListItems = document.getElementById('todos');
  todosListItems.innerHTML = tasks.map(createListMarkup).join('');
};

export default renderList;