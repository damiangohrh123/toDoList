//Import image src
import ProfilePicture from './assets/images/profilePicture.png';
import TodayIcon from './assets/images/todayIcon.svg';
import ThisWeekIcon from './assets/images/thisWeekIcon.svg';
import ThisMonthIcon from './assets/images/thisMonthIcon.svg';
import AllIcon from './assets/images/allIcon.svg';

//Import page variables and functions
import { setCurrentPage, getCurrentPage } from './globalVariables.js';
import pageLoader from './pageLoader.js';

const sidebar = () => {
  const content = document.querySelector('.content');

  let currentPage = getCurrentPage();
  //Set initial page to today
  currentPage = 'today';

  //Create Sidebar container
  const sidebarContainer = document.createElement('div');
  sidebarContainer.classList.add('sidebarContainer');
  content.appendChild(sidebarContainer);

  //Create Profile section factory function
  const createProfile = (name, picture) => {
    //Create Profile section container
    const profileContainer = document.createElement('div');
    profileContainer.classList.add('profileContainer');
    //Create Profile image
    const profilePicture = document.createElement('img');
    profilePicture.src = picture;
    //Create Profile name
    const profileName = document.createElement('h4');
    profileName.textContent = name;

    profileContainer.appendChild(profilePicture);
    profileContainer.appendChild(profileName);

    return profileContainer;
  }

  //Create Task List button factory function
  const createTaskListBtn = (btnText, iconSrc, page ) => {
    const btnContainer = document.createElement('div');
    //Create button Icon
    btnContainer.classList.add('taskListBtn');
    const btnIcon = document.createElement('img');
    btnIcon.src = iconSrc;
    btnContainer.appendChild(btnIcon);
    //Create button
    const button = document.createElement('button');
    button.textContent = btnText;
    btnContainer.appendChild(button);
    btnContainer.addEventListener('click', () => {
      setCurrentPage(page);
      pageLoader();
    });

    return btnContainer;
  }

  //Create Projects List factory function
  const createProjects = () => {
    
    return projectContainer;
  }

  //Create profile section
  const profileContainer = createProfile('Damian', ProfilePicture);

  //Create Task List section
  const taskList = document.createElement('div');
  taskList.classList.add('taskList');
  //Create Today button
  const btnToday = createTaskListBtn('Today', TodayIcon, 'today' );
  taskList.appendChild(btnToday);
  //Create This Week button
  const btnThisWeek = createTaskListBtn('This Week', ThisWeekIcon, 'thisWeek');
  taskList.appendChild(btnThisWeek);
  //Create This Month button
  const btnThisMonth = createTaskListBtn('This Month', ThisMonthIcon, 'thisMonth');
  taskList.appendChild(btnThisMonth);
  //Create All button
  const btnAll = createTaskListBtn('All', AllIcon, 'all');
  taskList.appendChild(btnAll);

  //Create Project section
  const projectContainer = document.createElement('div');
  //Create Project header
  const header = document.createElement('h3');
  header.textContent = 'Projects';
  projectContainer.appendChild(header);
  //Create Projects
  const projects = createProjects();

  sidebarContainer.appendChild(profileContainer);
  sidebarContainer.appendChild(taskList);
  sidebarContainer.appendChild(projects);
}

export default sidebar;