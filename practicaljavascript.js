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

var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText){
        this.todo[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = todo.Completed;
        this.displayTodos();
    }
}; 

var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My Todos');
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('()', this.todos[i].todoText);
                }
                
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = todo.Completed;
        this.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        // Case 1: If everything's true, make everything false
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false; 
            }
            // Case 2: Otherwise, make everything true. 
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};
var handlers ={
    displayTodos: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput'); 
        todiList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('addTooTextInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById('delteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
};

var view = {
    displayTodos:function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i =0; i < todoList.todos.length; i++) {
        var todoLi = document.createElement('li');

            // '(x) todoText'
            // var todoTextWithCompletion = '';
            // if (todo.completed === true)
                //(x) todoText
            // else
                //() todoText
            //todoLi.textContent = todoTextWithCompletion;
            
            var todoTextWithCompletion ='';
            if (todo.completed === true) {
                todoTextWithCompletion = '(x)' + todo.todoText;

            } else {
                todoTextWithCompletion = '( )' + todo.todoText;

            }

        todoLi.textContent = todoList.todos[i].todoText;
        todosUl.appendChild(todoLi);

        }
    }
};
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('Click', function() {
    todoList.displayTodos();
});

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css"></link>
</head>

<body>
    <h1>Todo List</h1>
<div>
    <button onclick="handlers.displayTodos()">Display Todos</button>
    <button onclick="handlers.toggleAll()">Toggle All</button>
</div>

<div>
<button onclick="handlers.addTodo()">Add</button>
<input id="addTodoTextInput" type="text"></input>
</div>

<div>
    <button onclick="handlers.changeTodo()">Change Todo</button>
    <input id="changeTodoPositionInput" type="number"></input>
    <input id="changeTodoTextInput" type="text"></input>
</div>
<div>
    <button onclick ="handlers.deleteTodo()">Delete</button>
    <input id="deltedTodoPositionInput" type="number">
</div>

<div>
    <buttton onclick="handlers.toggleCompleted()">Toggle Completed</buttton>
    <input id="toggleCompletedPositionInput" type="number"></input>
</div>

<ul>
  <li></li>  
  <li></li>
</ul>

<ul></ul>

    <script src="script.js"></script>
</body>
</html>