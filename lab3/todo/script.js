document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed");
        });

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "❌";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = "";
    });
});