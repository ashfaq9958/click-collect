import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

const Input = ({ label, type, name, error, placeholder, ...props }) => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const typeInput = type === "password" && isVisible ? "text" : type;
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium font-eczar">
        {label} *
      </label>
      <input
        type={typeInput}
        id={name}
        name={name}
        placeholder={placeholder}
        {...props}
        className={`mt-1 w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm`}
      />
      {type === "password" && (
        <span
          className="absolute right-0 mt-2 mr-2 cursor-pointer"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <VisibilityIcon fontSize="small" />
          ) : (
            <VisibilityOffIcon fontSize="small" />
          )}
        </span>
      )}

      {/* {type === "email" && (
        <span className="absolute left-2 top-7 ">
          <EmailTwoToneIcon fontSize="small" className="rounded-lg"/>
        </span>
      )} */}
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
