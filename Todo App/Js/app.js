const todo = document.getElementById("todo");
const addBtn = document.getElementById("add");
const todos = document.getElementById("todos");
let todoItems = [];
let counter = 0;

function addTodo(){
    console.log(todo.value);
    // todos.innerHTML += `<p>${todo.value}</p>`;
    counter += 1;
    let todoObj = {
        id: counter,
        todo: todo.value,
        date: new Date()
    }
    // console.log(todoObj);
    todoItems.push(todoObj);
    console.log(todoItems);
    todo.value = "";
    showTodos();
}

function showTodos(){
    todos.innerHTML ="";
    todoItems.map(todo => {
        todos.innerHTML += 
            `<div class="todo">
                <h2>${todo.todo}</h2>
                <p>
                ${todo.date.getHours()}:${todo.date.getMinutes()}:${todo.date.getSeconds()},
                ${todo.date.getDate()}-${todo.date.getMonth()}-${todo.date.getFullYear()}</p>
                <div>
                    <button onClick="updateTodo(${todo.id})">Update</button>
                    <button onClick="deleteTodo(${todo.id})">Delete</button>
                </div>
            </div>
        `;
    });
}

function updateTodo(id) {
let newValue = prompt("New value text:");
    todoItems = todoItems.map(todo => {
        if(todo.id === id){
            return {...todo,todo: newValue, date: new Date()};
        }
        else{
            return todo;
        }
    })
    showTodos();
};

function deleteTodo(id) {
    todoItems = todoItems.filter(todo =>{
        if(todo.id !== id){
            return todo;
        }
    })
    showTodos();
}
addBtn.addEventListener("click", addTodo);

// let arr = [1,2,3,4,5];
// let arrB;
// arrB = arr.map(item => {
//     if (item%2 === 0){
//         return item * 2;
//     }
//     else if (item === 3) {
//         return "Trei";
//     }
//     else if (item %2 ===1){
//         return item * 123;
//     }
//     else{
//         return item;
//     }
// })
// console.log(arrB);

// let word = ["Ananas","Bananan","Pamela","Capsuni","Abricos","Elefant"];
// let vowels = ["a","e","i","o","y","u"];
// let B;
// B = word.filter(word => {
//     if (!vowels.includes(word[0].toLowerCase())){
//         return word;
//     }
// })
// console.log(B);