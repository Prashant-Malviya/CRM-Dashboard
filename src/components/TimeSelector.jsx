import React, { useState } from 'react';

const TimeSelector = ({ onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState('1 Week');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    onSelectTime(time); 
  };

  return (
    <div>
      {/* Dropdown for small and medium screens */}
      <div className="block lg:hidden">
        <select
          value={selectedTime}
          onChange={(e) => handleTimeChange(e.target.value)}
          className="py-2 px-4 rounded-lg bg-gray-200 w-full"
        >
          {['1 Day', '1 Week', '1 Month', '1 Year'].map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons for large screens */}
      <div className="hidden lg:flex space-x-2">
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
    </div>
  );
};

export default TimeSelector;
