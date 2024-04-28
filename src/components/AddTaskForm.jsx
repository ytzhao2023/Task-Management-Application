import React, { useState } from 'react';

function AddTaskForm({ addTask, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('None');
  const [status, setStatus] = useState('to-do');
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, description, priority, status: 'to-do' });
    setTitle('');
    setDescription('');
    setPriority('None');
    onClose();
  };

  return (
    <form className='add-task-form' onSubmit={handleSubmit}>
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
            <button className='cancel-button' type="button" onClick={onClose}>Cancel</button>
            <button className='add-button' type="submit">Add</button>
        </div>
    </form>
  );
}

export default AddTaskForm;
