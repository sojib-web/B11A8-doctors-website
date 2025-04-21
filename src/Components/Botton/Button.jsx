import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn text-white bg-[#176AE5] rounded-2xl"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
