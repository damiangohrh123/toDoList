import Plus from './assets/images/plus.svg';

import tasks from './renderTasks.js';
import {setCurrentPage, getCurrentPage} from './globalVariables.js';

const newTask = () => {
  //Create the tasks functions as reference
  const { tasksArray, renderTasks } = tasks();

  const content = document.querySelector('.content');

  //Create Add Tasks container
  const addTaskContainer = document.createElement('div');
  addTaskContainer.classList.add('addTasksContainer');
  //Create Add Tasks button
  const btnAddTasksContainer = document.createElement('div');
  btnAddTasksContainer.classList.add('btnAddTasksContainer');
  const btnAddTasks = document.createElement('img');
  btnAddTasks.src = Plus;
  //Runs newTaskForm when btnAddTasks is clicked
  btnAddTasks.addEventListener('click', newTaskForm);

  btnAddTasksContainer.appendChild(btnAddTasks);
  addTaskContainer.appendChild(btnAddTasksContainer);
  content.appendChild(addTaskContainer);

  /**
   * Create a form when button is clicked
   * User can input neccessary details about the new task
   * Use normal function instead of arrow function,
   * because arrow function cannot be hoisted
   **/
  function newTaskForm() {
    //Create form 
    const form = document.createElement('form');
    form.classList.add('newTaskForm');
    //Need to append the form first so that input boxes can be referenced
    content.appendChild(form);

    //Create input boxes
    const inputboxes = ['Title', 'Date'];
    for (let i = 0; i < inputboxes.length; i++) {
      const input = document.createElement('input');
      input.placeholder = inputboxes[i];

      //Set type to text, name and id to the corresponding name
      input.setAttribute('type', 'text');
      input.setAttribute('name', inputboxes[i].toLowerCase());
      input.setAttribute('id', inputboxes[i].toLowerCase());

      form.appendChild(input);
    }

    //Creating the reference for the input boxes
    const titleInput = document.getElementById('title');
    const dateInput = document.getElementById('date');
    dateInput.setAttribute('type', 'date');

    //Create Submit Form button
    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.textContent = 'Add';

    //Add the task to the tasksArray
    form.addEventListener('submit', (event) => {
      event.preventDefault();

        //Create reference for current page
        let currentPage = getCurrentPage();

      const titleValue = titleInput.value.trim();
      const dateValue = dateInput.value.trim();

      if (titleValue !== '') {
        const taskData = {
          id: '',
          title: titleValue,
          date: dateValue,
          isChecked: false
        }
        tasksArray.push(taskData);
        form.remove();
        renderTasks(currentPage);
      }
      else {
        alert(`Task name can't be empty`);
      }
    });

    //Create Cancel button
    const btnCancel = document.createElement('button');
    btnCancel.setAttribute('type', 'button');
    btnCancel.textContent = 'Cancel';
    btnCancel.addEventListener('click', () => {
      form.remove();
    });

    form.appendChild(btnSubmit);
    form.appendChild(btnCancel);
  }
}

export default newTask;