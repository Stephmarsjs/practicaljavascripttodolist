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

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
todoList.addTodo();