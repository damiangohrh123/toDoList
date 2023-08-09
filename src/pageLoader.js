//Import tasks functions
import tasks, { dateRanges } from './renderTasks.js';

//Import header functions
import header from './header.js';
import { headerContainer } from './header.js';

//Import getCurrentPage function
import { getCurrentPage } from './globalVariables.js';

//Call the tasks function to get the tasks object and the renderTasks function
const tasksObject = tasks();


const pageLoader = () => {
  let currentPage = getCurrentPage();

  console.log(currentPage)
  switch (currentPage) {
    case 'today':
      header();
      tasksObject.renderTasks('today');
    break;
    case 'thisWeek':
      header();
      tasksObject.renderTasks('thisWeek');
    break;
    case 'thisMonth':
      header();
      tasksObject.renderTasks('thisMonth');
    break;
    case 'all':
      header();
      tasksObject.renderTasks('all');
    break;
  }
}

export default pageLoader;
