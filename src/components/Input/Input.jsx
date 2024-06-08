import React from "react";

const Input = ({ label, type, name }) => {
  return (
    <div>
      <label for="email" className="block text-sm font-medium font-eczar  ">
        {label} *
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default Input;
