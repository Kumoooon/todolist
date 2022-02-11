const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];
const PaintToDo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTd);
  li.append(span);
  li.append(button);
  toDoList.append(li);
};
const deleteTd = (event) => {
  const li = event.target.parentElement;
  li.remove();
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  PaintToDo(newTodo);
};

toDoForm.addEventListener("submit", handleToDoSubmit);
