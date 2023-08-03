import sidebar from './sidebar.js';
import header from './header.js';
import tasks from './tasks.js';
import newTask from './newTask.js';

//Import page variables and functions
import { setCurrentPage, getCurrentPage } from './globalVariables.js';


const initialLoadPage = () => {
  //Create the tasks functions as reference
  const { renderTasks } = tasks();

  setCurrentPage('today');
  sidebar();
  header();
  newTask();
  renderTasks();
}

export default initialLoadPage;