const task__input_Element = document.getElementById("task__input");
const tasks__add_Element = document. getElementById("tasks__add");
const tasks__list_Element = document.getElementById("tasks__list");

tasks__add_Element.addEventListener("click", function(event) {
    event.preventDefault();

    let taskElement = document.createElement("div");
    taskElement.classList.add("task");

    let taskTitleElement = document.createElement("div");
    taskTitleElement.classList.add("task__title");
    taskTitleElement.textContent = task__input_Element.value;
    taskElement.appendChild(taskTitleElement);

    let taskRemove = document.createElement("a");
    taskRemove.classList.add("task__remove");
    taskRemove.setAttribute("href", "#");
    taskRemove.textContent = "×";

    tasks__list_Element.appendChild(taskElement);
    taskElement.appendChild(taskRemove);
});

tasks__list_Element.addEventListener("click", function(event) {
    if(event.target.classList.contains("task__remove")) {
        event.target.closest(".task").remove();
    };
});