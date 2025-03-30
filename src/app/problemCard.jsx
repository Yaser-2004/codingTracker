import React from 'react';

const ProblemCard = ({ title, description, problemsCount }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 w-64">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">{problemsCount} Problems</p>
        <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded">
          Beginner level
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
