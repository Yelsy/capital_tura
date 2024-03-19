// ServiceItem.jsx
import React from 'react';

const ServiceItem = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-full" />
      </div>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm text-center">{description}</p>
    </div>
  );
};

export default ServiceItem;