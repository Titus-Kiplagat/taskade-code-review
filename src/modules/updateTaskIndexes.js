import tasks from './getTasks.js';

const updateTaskIndexes = () => {
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

export default updateTaskIndexes;