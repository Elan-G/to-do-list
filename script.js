document.getElementById('add-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const timeInput = document.getElementById('time-input');
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${taskText} - ${taskTime}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('task-list').appendChild(li);
    
    taskInput.value = ''; // Clear input field
    timeInput.value = ''; // Clear time input
});
