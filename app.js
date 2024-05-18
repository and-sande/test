document.addEventListener('DOMContentLoaded', () => {
    const addTodoBtn = document.getElementById('addTodoBtn');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
  
    let todos = [];
  
    function renderTodos() {
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'flex justify-between items-center bg-gray-200 rounded px-3 py-2 mb-2';
        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        if (todo.completed) {
          todoText.classList.add('completed');
        }
        todoText.addEventListener('click', () => toggleComplete(index));
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded';
        removeBtn.addEventListener('click', () => removeTodo(index));
        todoItem.appendChild(todoText);
        todoItem.appendChild(removeBtn);
        todoList.appendChild(todoItem);
      });
    }
  
    function addTodo() {
      const newTodo = newTodoInput.value.trim();
      if (newTodo) {
        todos.push({ text: newTodo, completed: false });
        newTodoInput.value = '';
        renderTodos();
      }
    }
  
    function toggleComplete(index) {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    }
  
    function removeTodo(index) {
      todos.splice(index, 1);
      renderTodos();
    }
  
    addTodoBtn.addEventListener('click', addTodo);
    newTodoInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  
    renderTodos();
  });
  