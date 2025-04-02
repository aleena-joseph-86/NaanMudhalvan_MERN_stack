function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const todoList = document.getElementById("todoList");

    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      todoList.removeChild(li);
    };

    li.onclick = function () {
      li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = ""; 
  }
}
