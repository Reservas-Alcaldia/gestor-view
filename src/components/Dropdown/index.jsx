import React from 'react';
import './Dropdown.css';

function Dropdown({ options = [], onChange }) {
  return (
    <div className="dropdown">
      <select onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;

