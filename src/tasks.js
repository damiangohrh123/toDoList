import { saveDataToStorage, getDataFromStorage, getAllKeysFromStorage } from './storage.js';
import taskEdit from './taskEdit.js';

//Create Tasks container
const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasksContainer');

const tasks = () => {
  const content = document.querySelector('.content');

  //Create Tasks Array from the values in local storage
  const tasksArray = getDataFromStorage('tasksArray') || [];

  const renderTasks = () => {
    tasksContainer.textContent = '';
    for (let i = 0; i < tasksArray.length; i++) {
      //Create task container
      const taskCard = document.createElement('div');
      taskCard.classList.add('taskCard');

      //Create Task title
      const taskTitle = document.createElement('h3');
      taskTitle.textContent = tasksArray[i].title;

      //Create checkbox
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.id = 'taskCheckBox';

      checkBox.checked = tasksArray[i].isChecked || false;

      //Add 'change' event on the checkbox
      checkBox.addEventListener('change', (event) => {
        tasksArray[i].isChecked = event.target.checked;
        if (tasksArray[i].isChecked === true) {
          console.log(tasksArray[i].isChecked);
        }
        else {
          console.log(tasksArray[i].isChecked)
        }
        saveDataToStorage('tasksArray', tasksArray);
      });

      //Add click event to prevent stop propogation to the taskCard.
      //So that when clicking on the checkbox, the click does not trigger
      //the taskCard events also.
      checkBox.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      //Run task edit when task card is clicked on
      taskCard.addEventListener('click', () => {
        taskEdit();
      })

      saveDataToStorage('tasksArray', tasksArray);

      taskCard.appendChild(checkBox);
      taskCard.appendChild(taskTitle);
      tasksContainer.appendChild(taskCard);
    }
  }

  content.appendChild(tasksContainer);

  return { 
    tasksArray,
    tasksContainer,
    renderTasks
  }
}

export default tasks;