import React from "react";

const Card = ({ feature: { img, title, desc, discount, icon } }) => {
  // Check if the title matches any of the categories
  const isCategory = [
    "Kid's Fashion",
    "Men's Fashion",
    "Women's Fashion",
    "Accessories",
    "Shoes",
    "Smart Phones",
    "Wrist Watches",
    "Perfume",
  ].includes(title);

  return (
    <div className="relative overflow-hidden rounded-md shadow-md border border-gray-200 cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white">
      {/* Tag-Like Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs lg:text-sm font-medium px-2 py-1.5 rounded-tr-lg rounded-bl-lg shadow-md z-10">
          <span>{discount}</span>
        </div>
      )}

      {/* Image */}
      <img
        src={img}
        alt={title}
        className={`w-full h-64 ${
          isCategory ? "object-cover" : "object-contain"
        } rounded-t-lg transition-transform duration-500 transform group-hover:scale-110`}
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 text-sm lg:text-base text-gray-300 text-center px-4">
            {desc}
          </p>
        )}
      </div>
      {icon && (
        <div className="absolute top-2 right-2 text-white text-2xl opacity-0 transition-opacity duration-500 transform group-hover:opacity-100 group-hover:scale-105 hover:text-red-500">
          <span>{icon}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
