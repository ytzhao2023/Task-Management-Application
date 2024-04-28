import React from 'react';

function TaskList({ tasks, onTaskSelect }) {
  return (
    <ul className='task-list'>
      {tasks.map(task => (
        <li key={task.id} onClick={() => onTaskSelect(task)} >
          <h3>{task.title}</h3>
          <p>Description: {task.description || 'No description'}</p>
          <p>Priority: {task.priority || 'None'}</p>
          <p>Status: {task.status}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
