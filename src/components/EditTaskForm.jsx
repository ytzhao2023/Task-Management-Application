import React, { useState } from 'react';

function EditTaskForm({ task, onSave, onDelete, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [priority, setPriority] = useState(task.priority || 'None');
  const [status, setStatus] = useState(task.status || 'to-do');
  
  function handleSubmit(e) {
    e.preventDefault();
    onSave(task.id, {title, description, priority, status});
    onCancel();
  };

  return (
    <form className='edit-task-form' onSubmit={handleSubmit}>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title...'
            required
        />
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (Optional)..."
        />
        <div className='form-row'>
          <label>Priority</label>
          <select value={priority} onChange={ (e)=> setPriority(e.target.value)}>
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>  
          </select>
        </div>
        <div className='form-row'>
          <label>Status</label>
          <select value={status} onChange={ (e) => setStatus(e.target.value)}>
            <option value="to-do">To-do</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
            <button className='cancel-button' type="button" onClick={onCancel}>Cancel</button>
            <button className='delete-button' type="button" onClick={ () => onDelete(task.id)}>Delete</button>
            <button className='save-button' type="submit">Save</button>
        </div>
    </form>
  );
}

export default EditTaskForm;
