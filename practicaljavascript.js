var todos = ['item1', 'item2', 'item3'];

function displayTodos() {

}

function addTodo(todo) {
    todos.push(todo)
  
}

function changeTodo(position, newValue) {
    todos[position] = newValue; 
  
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
displayTodos();