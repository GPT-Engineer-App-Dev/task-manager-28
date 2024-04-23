document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim();

  if (newTask) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = newTask;
    li.className = "p-2 hover:bg-gray-100 cursor-pointer";

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt text-red-500 hover:text-red-700 ml-2"></i>';
    deleteBtn.className = "delete-task";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field after adding
  }
});
