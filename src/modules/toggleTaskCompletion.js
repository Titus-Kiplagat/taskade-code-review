import tasks from './getTasks.js';
import saveTasksToLocalStorage from './saveTasks.js';

const toggleTaskCompletion = (checkboxId) => {
  tasks.forEach((task) => {
    if (task.index === checkboxId) {
      task.complete = !task.complete;
    }
  });
  saveTasksToLocalStorage();
};

export default toggleTaskCompletion;