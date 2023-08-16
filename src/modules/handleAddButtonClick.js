import handleFormSubmit from './handleFormSubmit.js';

const handleAddButtonClick = () => {
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', handleFormSubmit);
};

export default handleAddButtonClick;