function addTask() {
    let input = document.getElementById("task");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");

    span.textContent = task;

    span.onclick = function() {
        span.classList.toggle("completed");
    };

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete";

    del.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}

