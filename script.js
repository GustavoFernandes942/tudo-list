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
        })
    }
}