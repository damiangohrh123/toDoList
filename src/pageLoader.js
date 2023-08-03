//Import tasks functions
import tasks from './tasks.js';

//Import header functions
import header from './header.js';
import { headerContainer } from './header.js';

const pageLoader = () => {
  //Create the tasks functions as reference
  const { renderTasks } = tasks();

  header();
  tasks();
  renderTasks();
}

export default pageLoader;
