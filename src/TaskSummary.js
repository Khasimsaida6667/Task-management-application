//TaskSummary.js

import React from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import './TaskSummary.css';

const TaskSummary = ({ tasks = [] }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  const chartData = [
    { name: 'Completed', value: completedTasks },
    { name: 'In Progress', value: inProgressTasks },
    { name: 'Pending', value: pendingTasks },
  ];
  
  const COLORS = ['#4caf50', '#2196f3', '#f44336'];
  

  return (
    <div className="task-summary">
      <h2 className="component-title">Task Summary</h2>
      <div>
      <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={chartData}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="value"
          label
        >
          {
            chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))
          }
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
    </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3 className="card-title">Total Tasks</h3>
          <p className="card-value">{totalTasks}</p>
        </div>
        <div className="summary-card">
          <h3 className="card-title">Completed Tasks</h3>
          <p className="card-value">{completedTasks}</p>
        </div>
        <div className="summary-card">
          <h3 className="card-title">In Progress Tasks</h3>
          <p className="card-value">{inProgressTasks}</p>
        </div>
        <div className="summary-card">
          <h3 className="card-title">Pending Tasks</h3>
          <p className="card-value">{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;

