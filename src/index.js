import './style.css';

const tasks = [
  {
    index: 1,
    description: 'Task 1',
    Complete: true,
  },
  {
    index: 2,
    description: 'Task 2',
    Complete: false,
  },
  {
    index: 3,
    description: 'Task 3',
    Complete: false,
  },
];

function createListItem(task) {
  return `
    <li ${task.Complete ? 'class="complete"' : ''}>
      <div>
        <input type="checkbox" name="tasks" ${
  task.Complete ? 'checked' : ''
} id="${task.index}" />
        <span>${task.description}</span>
      </div>
      <button title="Remove task" class="remove-task">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
      </button>
    </li>
  `;
}