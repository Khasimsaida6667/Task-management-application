// components/TaskDetails.js
import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ selectedTask }) => {
  return (
    <div className="task-details">
      <h2>Task Details</h2>
      {selectedTask ? (
        <div>
          <h3>{selectedTask.name}</h3>
          <p>Status: {selectedTask.status}</p>
          <p>Description: {selectedTask.description || 'No description provided'}</p>
          <p>Due Date: {selectedTask.dueDate || 'No due date set'}</p>
          <p>Assigned To: {selectedTask.assignedTo || 'Unassigned'}</p>
        </div>
      ) : (
        <p>Select a task to view details.</p>
      )}
    </div>
  );
};

export default TaskDetails;