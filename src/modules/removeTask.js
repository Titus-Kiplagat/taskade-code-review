import tasks from './getTasks.js';
import saveTasksToLocalStorage from './saveTasks.js';
import updateTaskIndexes from './updateTaskIndexes.js';

const removeTask = (index) => {
  tasks.splice(index, 1);

  updateTaskIndexes();
  saveTasksToLocalStorage();
};

export default removeTask;