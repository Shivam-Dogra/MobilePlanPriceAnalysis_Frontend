// Button.jsx
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
