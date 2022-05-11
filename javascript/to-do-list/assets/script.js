var taskInput = document.getElementById("taskName"); // Get a new task
var toDoTask = document.getElementById("toDoTask"); // Get ul of #toDoTask
var doneTask = document.getElementById("doneTask"); // Get ul of #doneTask


document.querySelector("#addBtn").addEventListener("click", addTask);

function createNewTaskElement(taskString){
    var listItem = document.createElement("li");

    var checkBox = document.createElement("input");
    var label = document.createElement("label");

    label.innerText = taskString;

    checkBox.type = "checkbox";

    // Appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    
    return listItem;
}

function addTask(){
    if(document.querySelector("#addTask input").value.length === 0){
        console.log("Nothing to Add...");
        alert("Please Enter a Task");
    }
    else{
        console.log("Add Task...");

        // Create a new list item with the text from the #addTask input
        var listItem = createNewTaskElement(taskInput.value);
        
        // Append list item to toDoTask
        toDoTask.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);

        taskInput.value = "";
    }
}

function taskCompleted(){
    console.log("Complete Task...");

    // Append the task list item to the #doneTask
    var listItem = this.parentNode;
    doneTask.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

function taskIncomplete(){
    console.log("Actually, this task is incomplete...");

    var listItem = this.parentNode;
    toDoTask.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

function bindTaskEvents(taskListItem, checkBoxEvent){
    console.log("Bind list item events");

    var checkBox = taskListItem.querySelector("input[type=checkbox]");

    checkBox.onchange = checkBoxEvent;
}

// Cycle over incompleteTask ul list items
for(let i = 0; i < toDoTask.children.length; i++){
    bindTaskEvents(toDoTask.children[i], taskCompleted);
}

// Cycle over completeTask ul list items
for(let i = 0; i < doneTask.children.length; i++){
    bindTaskEvents(doneTask.children[i], taskIncomplete);
}
