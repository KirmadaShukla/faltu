import React from 'react';
import PropTypes from 'prop-types';

const DataCard = ({ title, description, icon: Icon, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
      data-component="data-card"
    >
      <div className="flex items-center mb-4" data-component="data-card-header">
        {Icon && <Icon className="text-blue-500 text-2xl mr-3" data-component="data-card-icon" />}
        <h3 className="text-xl font-semibold text-gray-800" data-component="data-card-title">{title}</h3>
      </div>
      <p className="text-gray-600" data-component="data-card-description">{description}</p>
    </div>
  );
};

DataCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
};

export default DataCard; 