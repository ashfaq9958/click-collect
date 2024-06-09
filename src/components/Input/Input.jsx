import React, { useState } from "react";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";

const Input = ({ label, type, name }) => {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="relative">
      <label for={name} className="block text-sm font-medium font-eczar  ">
        {label} *
      </label>
      <input
        type={type == "password" ? (!isVisible ? "password" : "text") : type}
        id={name}
        name={name}
        required
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-eczar"
      />
      <span className="absolute right-0 mt-2 mr-2" onClick={toggle}>
        {type == "password" &&
          (isVisible ? (
            <VisibilitySharpIcon fontSize="small" />
          ) : (
            <VisibilityOffSharpIcon fontSize="small" />
          ))}
      </span>
    </div>
  );
};

export default Input;
