import handleFormSubmit from './handleFormSubmit.js';
import renderList from './renderList.js';

const domContentLoaded = () => {
  document.addEventListener('DOMContentLoaded', () => {
    handleFormSubmit();
    renderList();
  });
};

export default domContentLoaded;