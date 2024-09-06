import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const pieData = {
    labels: ['Marketing', 'Sales', 'Support'],
    datasets: [
      {
        label: 'Departments',
        data: data,
        backgroundColor: ['#10B981', '#3B82F6', '#F59E0B'],
      },
    ],
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">User Distribution by Department</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
