const createListMarkup = (task) => `
    <li class="${task.complete ? 'completed' : ''}">
      <div>
        <input class="checkbox" type="checkbox" name="tasks" ${task.complete ? 'checked' : ''
} id="${task.index}" />
        <span ${!task.complete ? 'contenteditable' : ''}>${task.description}</span>
      </div>
      <button title="Remove task" class="remove-task">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
      </button>
    </li>
  `;

export default createListMarkup;