const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const newList = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
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
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
