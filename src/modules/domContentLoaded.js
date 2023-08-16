import renderList from './renderList.js';

const domContentLoaded = () => {
  document.addEventListener('DOMContentLoaded', () => {
    renderList();
  });
};

export default domContentLoaded;