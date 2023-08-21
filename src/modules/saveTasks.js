import tasks from './getTasks.js';

const saveTasksToLocalStorage = () => {
  localStorage.setItem('Tasks', JSON.stringify(tasks));
};

export default saveTasksToLocalStorage;