import React from 'react';
import PropTypes from 'prop-types';

const DataCard = ({ title, description, icon: Icon, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        {Icon && <Icon className="text-blue-500 text-2xl mr-3" />}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
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