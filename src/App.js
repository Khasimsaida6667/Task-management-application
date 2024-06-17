// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import TaskSummary from './TaskSummary';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Complete project proposal',
      status: 'pending',
      description: 'Prepare a detailed proposal for the new project.',
      dueDate: '2023-06-15',
      assignedTo: 'John Doe',
    },
    {
      id: 2,
      name: 'Schedule team meeting',
      status: 'in-progress',
      description: 'Coordinate with team members to find a suitable time for the meeting.',
      dueDate: '2023-05-30',
      assignedTo: 'Jane Smith',
    },
    {
      id: 3,
      name: 'Code review',
      status: 'completed',
      description: 'Review the code changes and provide feedback.',
      dueDate: '2023-05-20',
      assignedTo: 'Michael Johnson',
    },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setSelectedTask(null);
  };

  return (
    <div className="app">
      <h1 className="app-title">Task List Application</h1>
      <div className="app-content">
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          onTaskSelect={handleTaskSelect}
          onTaskDelete={handleTaskDelete}
        />
        <TaskDetails selectedTask={selectedTask} />
        <TaskSummary tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
