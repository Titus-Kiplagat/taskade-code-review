import tasks from './getTasks.js';
import saveTasksToLocalStorage from './saveTasks.js';

const updateTaskDescription = (index, newDescription) => {
  tasks[index].description = newDescription;
  saveTasksToLocalStorage();
};

export default updateTaskDescription;