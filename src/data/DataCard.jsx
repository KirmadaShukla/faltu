import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const DataCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8" data-source="src/data/DataCard.jsx">
      <div className="flex items-center mb-6">
        <FaChartLine className="text-blue-500 text-3xl mr-4" />
        <h3 className="text-2xl font-semibold">Data Analytics</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Total Users</h4>
          <p className="text-3xl font-bold text-blue-500">1,234</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Revenue</h4>
          <p className="text-3xl font-bold text-green-500">$45,678</p>
          <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Active Projects</h4>
          <p className="text-3xl font-bold text-purple-500">42</p>
          <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard; 
.text-gray-400 {
  font-size: 12px;
  color: rgb(171, 95, 95);
  background-color: rgb(238, 129, 129);
  margin: 10px;
}