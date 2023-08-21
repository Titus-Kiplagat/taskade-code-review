const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('Tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const tasks = getTasksFromLocalStorage();

export default tasks;