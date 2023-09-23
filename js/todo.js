const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // Object to String
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    toDos = toDos.filter((item) => item.id !== li.id); // true: leave item / false: remove item
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj) {
    const newList = document.createElement("li");
    newList.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    console.log(newToDoObj);

    const btn = document.createElement("button");
    btn.innerText = "❌";

    btn.addEventListener("click", deleteTodo);

    newList.appendChild(span);
    newList.appendChild(btn);
    toDoList.appendChild(newList);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        id: String(Date.now()),
        text: newToDo,
    };
    toDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos) {
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos; // String to Object
    parsedTodos.forEach((item) => {
        paintToDo(item);
    });
}
