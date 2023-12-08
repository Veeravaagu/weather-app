// import {buildInbox} from './inbox.js';
// import {buildProject} from './project.js';
import CreateTodo from './todolist';

function isInboxOrProject() {
  const isInboxOrProjectNames = document.querySelectorAll('.page-title');
  CreateTodo.initialize();
  isInboxOrProjectNames.forEach((element) => {
    element.addEventListener('click', (event) => {
      const { target } = event;
      const paragraphContent = target.textContent;
      if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
        CreateTodo.buildProjectOrInbox(paragraphContent);
        CreateTodo.appendTodoToDisplay(paragraphContent);
      } else {
        CreateTodo.buildProjectOrInbox(paragraphContent);
        CreateTodo.handleAddTask(paragraphContent);
        CreateTodo.appendTodoToDisplay(paragraphContent);
      }
    });
  });
  CreateTodo.createProject();
}

// Your existing code here
isInboxOrProject();
// CreateTodo.initialize();
