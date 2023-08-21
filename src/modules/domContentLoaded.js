import handleDeleteAllBtnClick from './handleDeleteAllBtnClick.js';
import handleFormSubmit from './handleFormSubmit.js';
import renderList from './renderList.js';

const domContentLoaded = () => {
  document.addEventListener('DOMContentLoaded', () => {
    handleFormSubmit();
    handleDeleteAllBtnClick();
    renderList();
  });
};

export default domContentLoaded;