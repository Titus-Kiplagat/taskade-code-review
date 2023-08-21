import Task from './createTask.js';
import tasks from './getTasks.js';
import renderList from './renderList.js';
import saveTasksToLocalStorage from './saveTasks.js';
import updateTaskIndexes from './updateTaskIndexes.js';

const addTaskToList = (description) => {
  const task = new Task(description);
  tasks.unshift(task);

  updateTaskIndexes();
  saveTasksToLocalStorage();
  renderList();
};

export default addTaskToList;