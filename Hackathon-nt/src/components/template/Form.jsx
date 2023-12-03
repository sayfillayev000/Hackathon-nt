import React from "react";

const Form = ({ onSubmit, className, children }) => {
    const hendleSubmit = async (e) =>{
        e.preventDefault()
        onSubmit?.()
    }
  return (
    <form onSubmit={hendleSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
