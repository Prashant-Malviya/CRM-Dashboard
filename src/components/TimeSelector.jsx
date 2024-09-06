import React, { useState } from 'react';

const TimeSelector = ({ onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState('1 Week');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    onSelectTime(time); // Notify parent component of the time change
  };

  return (
    <div className="space-x-2">
      {['1 Day', '1 Week', '1 Month', '1 Year'].map((time) => (
        <button
          key={time}
          className={`py-2 px-4 rounded-lg ${selectedTime === time ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTimeChange(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
