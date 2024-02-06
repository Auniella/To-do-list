function addTask() {
  let task = document.getElementById("write").value;
  let list = document.getElementById("list");
  let newTask = document.createElement("li");
  newTask.textContent = task;
  newTask.classList.add("symbol");

  list.appendChild(newTask);
  newTask.style.margin = "0.4rem";

  document.getElementById("write").value = "";
}

//function removeTask()
