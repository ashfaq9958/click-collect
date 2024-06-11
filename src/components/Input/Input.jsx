import React, { useState } from "react";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
const Input = ({ label, type, name }) => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const inputType = type === "password" && isVisible ? "text" : type;
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium font-eczar">
        {label} *
      </label>
      <input
        type={inputType}
        id={name}
        name={name}
        required
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-eczar"
      />
      {type === "password" && (
        <span
          className="absolute right-0 mt-2 mr-2 cursor-pointer"
          onClick={toggleVisibility}
        >
          {isVisible ? <VisibilitySharpIcon /> : <VisibilityOffSharpIcon />}
        </span>
      )}
    </div>
  );
};

export default Input;
