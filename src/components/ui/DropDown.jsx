import React, { useState } from "react";
import ArrowIcon from '../../assets/svgs/chevron-down-svgrepo-com.svg'
const Dropdown = ({ options, onSelect,className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting an option
    onSelect(option); // Callback to parent component with selected option
  };

  return (
    <div className={`dropdown ${className ? className : ""}`} onAbort={handleToggle}>
      <div className="dropdown-header" onClick={handleToggle}>
        <div>{selectedOption || "Select an option"}</div>
        <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          <img src={ArrowIcon} alt="" />{" "}
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
