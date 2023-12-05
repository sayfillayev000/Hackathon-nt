import React from "react";

const TextInput = ({diabled='',id, onChange, type = 'text', name = '', placeholder = '', className = '',defaultValue = ''}) => {
  return (
    <input
      className={`text-input ${className}`}
      type={type}
      name={name}
      onChange={e =>  onChange?.(e.target.value)}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={diabled}
      id={id}
    />
  );
};

export default TextInput;
