class Task{
    constructor(description){
        this.description = description;
        this.completed = false;

    }
    toggleComplete(){
        this.completed = !this.completed;
    }
}

class TaskMenager{
    constructor(){
        this.Tasks = [];
    }

    addTask(description){
        const task = new Task(description);
        this.Tasks.push(task);
        this.displayTasks();
    }

    removeTasks(index){
         this.tasks.splice(index, 1);
         this.displayTasks();
    }

    toggleTaskCompletion(index){
        this.task[index].toggleComplete();
        this.displayTasks();
    }
    displayTasks(){
        const tasklist = document.getElementById('task-list')
        tasklist.innerHTML = '';

        this.tasks.foreach((task, index) => {
            const taskItem = document.createElement('li')
            taskItem.className = task.completed ? 'completed' : '';

            const taskDescripition = document.createElement('span');
            taskDescripition.textContent = task.description;
            taskDescripition.addEventListener('click', () => this.toggleTaskCompletion(index));

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn';
            removeButton.textContent = 'remove';
            removeButton.addEventListener('click', () => this.toggleTaskCompletion(index));

            taskItem.appendChild(taskDescripition);
            taskItem.appendChild(removeButton);
            tasklist.appendChild(taskItem);
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const TaskMenager = new TaskMenager();
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    addTaskBtn.addEventListener('click', () =>{
        const taskDescripition = taskInput.value.trim();
        if(taskDescripition){
            TaskMenager.addTask(taskDescripition);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress',(e) => {
        if(e.key === 'enter'){
            addTaskBtn.click();
        }
    })
});