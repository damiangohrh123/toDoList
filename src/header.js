import {setCurrentPage, getCurrentPage} from './globalVariables.js';

const headerContainer = document.createElement('div');

const header = () => {
  const content = document.querySelector('.content');

  let currentPage = getCurrentPage();

  //Create header section
  headerContainer.classList.add('headerContainer');
  //Clear header content
  headerContainer.textContent = '';
  //Create header content
  const headerTitle = document.createElement('h2');
  headerContainer.appendChild(headerTitle);
  content.appendChild(headerContainer);

  //Change header text content according to currentPage
  switch (currentPage) {
    case 'today':
      const currentDate = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString(undefined, options);
      headerTitle.textContent = `Today - ${formattedDate}`;
    break;
    case 'thisWeek':
      headerTitle.textContent = 'This Week';
    break;
    case 'thisMonth':
      headerTitle.textContent = 'This Month';
    break;
    case 'all':
      headerTitle.textContent = 'All';
    break;
  }
};

export default header;
export { headerContainer };
