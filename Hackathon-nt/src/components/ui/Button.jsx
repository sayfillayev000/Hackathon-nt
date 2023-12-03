import React from "react";

const Button = ({ onClick, type = 'button', name = '', className = '',children}) => {
  return (
    <button
      className={`default-btn ${className}`}
      type={type}
      onClick={() =>  onClick?.()}
    >{children}</button>
  );
};

export default Button;
