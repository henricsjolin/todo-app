'use strict';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearList = document.getElementById('btn2');

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newTask = todoInput.value.trim(); // .trim() means it doesnt accept only spaces
  if (newTask === '') {
    alert('Please enter a task!');
    return;
  }
  addTask(newTask);

  todoInput.value = '';
});

function addTask(task) {
  // Adds a listitem element with a span and a button inside of it. Takes textContent value from what is written inside of todoForm
  const listItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = task;
  listItem.appendChild(taskSpan);
  listItem.setAttribute('id', 'listItem');
  todoList.appendChild(listItem);

  const doneButton = document.createElement('button');
  doneButton.textContent = 'Mark as complete';
  doneButton.addEventListener('click', function () {
    if (doneButton.textContent === 'Mark as complete') {
      doneButton.textContent = 'Remove task';
      doneButton.setAttribute('id', 'remove-button');
    } else if (doneButton.textContent === 'Remove task') {
      todoList.removeChild(listItem);
    }
    taskSpan.setAttribute('id', 'completed');
  });

  listItem.appendChild(doneButton);
}

clearList.addEventListener('click', function (event) {
  event.preventDefault();
  while (todoList.firstChild) {
    // when todoList has a child = true while loop runs
    todoList.removeChild(todoList.firstChild);
  }
});
