const addBtn = document.querySelector('.add-btn');
const inputEl = document.querySelector('#input');
const listContainer = document.querySelector('.list-container');
const taskCount = document.querySelector('.list-count');

const todoList = [];


const renderList = () => {
    listContainer.innerHTML = '';

    if (todoList.length === 0)
    {
        listContainer.innerHTML = `<li class="initial-app">Add a task to get started</li>`;
        return;
    }

    todoList.forEach(task => {
        const li = document.createElement('li');
        li.className = 'list-item';
        
        const span = document.createElement('span');
        span.className = 'task';
        span.textContent = task;
        span.addEventListener('click', () => {
            completeTask(span);
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'remove-btn';
        deleteBtn.innerHTML = '<i class="fa-solid fa-circle-minus">';

        deleteBtn.addEventListener('click', () => {
            deleteTask(task);
        });

        li.append(span, deleteBtn);
        listContainer.appendChild(li);
    });

}

function addTask()
{
    const input = inputEl.value;

    if (input === '') return;

    

    todoList.push(input);
    taskCount.innerHTML = `${todoList.length} tasks added`;
    renderList();


    inputEl.value = '';
}


function deleteTask(task)
{
    const index  = todoList.indexOf(task)
    todoList.splice(index, 1);
    taskCount.innerHTML = `${todoList.length} tasks remaining`;
    renderList();
}

function completeTask(task)
{
    task.classList.toggle('complete-task');
}


addBtn.addEventListener('click', () => {
    addTask();
})

inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
    {
        addTask();
        return;
    }
})