import tasks from './getTasks.js';

class Task {
  constructor(description) {
    this.index = tasks.length;
    this.description = description;
    this.complete = false;
  }
}

export default Task;