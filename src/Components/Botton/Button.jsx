import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className} text-white bg-[#176AE5] rounded-2xl`}
    >
      {label}
    </button>
  );
};

export default Button;
