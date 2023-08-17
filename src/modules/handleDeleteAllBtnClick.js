import removeCompletedTasks from './removeCompletedTasks.js';

const handleDeleteAllBtnClick = () => {
  document.getElementById('delete-all-btn').addEventListener('click', removeCompletedTasks);
};

export default handleDeleteAllBtnClick;