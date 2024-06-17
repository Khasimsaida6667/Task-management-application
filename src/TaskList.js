// components/TaskList.js
import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, setTasks, onTaskSelect, onTaskDelete }) => {
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    dueDate: '',
    assignedTo: '',
  });

  const handleInputChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTask = () => {
    if (newTask.name.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          name: newTask.name,
          status: 'pending',
          description: newTask.description,
          dueDate: newTask.dueDate,
          assignedTo: newTask.assignedTo,
        },
      ]);
      setNewTask({
        name: '',
        description: '',
        dueDate: '',
        assignedTo: '',
      });
    }
  };

  const handleTaskStatusChange = (id, status) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h2 className="component-title">Task List</h2>
      <div className="input-container">
        <input
          type="text"
          name="name"
          value={newTask.name}
          onChange={handleInputChange}
          placeholder="Enter task name"
          className="new-task-input"
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Enter task description"
          className="new-task-input"
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
          className="new-task-input"
        />
        <input
          type="text"
          name="assignedTo"
          value={newTask.assignedTo}
          onChange={handleInputChange}
          placeholder="Enter assigned to"
          className="new-task-input"
        />
        <button onClick={handleAddTask} className="add-task-btn">
          Add Task
        </button>
      </div>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status}`}
            onClick={() => onTaskSelect(task)}
          >
            <div className="task-item-content">
              <h3 className="task-name">{task.name}</h3>
              <div className="task-actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTaskStatusChange(task.id, 'in-progress');
                  }}
                  disabled={task.status === 'in-progress' || task.status === 'completed'}
                  className="task-btn start-btn"
                >
                  Start
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTaskStatusChange(task.id, 'completed');
                  }}
                  disabled={task.status === 'completed'}
                  className="task-btn complete-btn"
                >
                  Complete
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onTaskDelete(task.id);
                  }}
                  className="task-btn delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
