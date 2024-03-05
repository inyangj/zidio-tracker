import React from "react";

const Button = ({ onClick, className, type, children }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white shadow-btnShadow text-lg  px-12 py-3 border border-[#0A4D56] bg-tertiary_blue rounded-lg ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
