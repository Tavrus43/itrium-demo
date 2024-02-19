import React from 'react';
import './CustomButton.css'; // Adjust the path as necessary

const CustomButton = ({ children, onClick }) => {
  return (
    <button className="customButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
