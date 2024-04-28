import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import EditTaskForm from '../components/EditTaskForm';
import Modal from '../components/Modal';

function Home({tasks, setTasks}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleOpenModal() {
    setIsModalOpen(true);
    setIsEditing(false);
  };

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  function addTask(task) {
    const newTask = { id: Date.now(), ...task, status: 'to-do' };
    setTasks([...tasks, newTask]);
  };

  function handleTaskSelect(task) {
    setSelectedTask(task);
    setIsModalOpen(true);
    setIsEditing(true);
  };

  function handleDelete(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
    setIsModalOpen(false);
  };

  function handleEdit(taskId, updatedTask) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, ...updatedTask } :task));
    setIsModalOpen(false);
  }

  return (
    <div className='home-content'>
      <h2>Welcome to Task Management Application!</h2>
      <p>In this task management application, you can add, edit, and delete 
        tasks on the homepage. On the task overview page, you can view all 
        tasks, including to-do and completed ones. Additionally, you can 
        switch themes in the settings page. Feel free to explore!
      </p>
      <button className='add-button' type="button" onClick={handleOpenModal}>Add Task</button>
      <TaskList tasks={tasks} onTaskSelect={handleTaskSelect} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {isEditing && selectedTask ? (
            <EditTaskForm
            task = {selectedTask}
            onSave={handleEdit}
            onDelete={handleDelete}
            onCancel={handleCloseModal}
          />
          ) : (
            <AddTaskForm addTask={addTask} onClose={handleCloseModal} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default Home;
