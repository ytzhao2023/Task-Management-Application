import React, { useState } from "react";

function TaskOverview({ tasks }) {
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.status === 'completed';
        if (filter === 'to-do') return task.status === 'to-do';
        return true;
    });

    return (
        <div className="overview-content">
            <h2>Task Overview</h2>
            <div>
                <button className='all-button' onClick={() => setFilter('all')}>All ({tasks.length})</button>
                <button className='to-do-button' onClick={() => setFilter('to-do')}>
                    To-do ({tasks.filter(task => task.status === 'to-do').length})
                </button>
                <button className='completed-button' onClick={() => setFilter('completed')}>
                    Completed ({tasks.filter(task => task.status === 'completed').length})
                </button>
            </div>
            <ul className="task-detail">
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>Description: {task.description || 'No description'}</p>
                        <p>Priority: {task.priority || 'None'}</p>
                        <p>Status: {task.status}</p>
                    </li>
                ))}
             </ul>   
        </div>
    );
};

export default TaskOverview;