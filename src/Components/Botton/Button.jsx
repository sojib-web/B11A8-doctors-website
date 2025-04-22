// components/Button.jsx or Button.js
import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn text-white bg-[#176AE5] rounded-2xl ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
