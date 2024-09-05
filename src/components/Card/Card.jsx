import React from "react";

const Card = ({ feature: { img, title, desc, discount } }) => {
  // Check if the title matches any of the categories
  const isCategory = [
    "Kid's Fashion",
    "Men's Fashion",
    "Women's Fashion",
    "Accessories",
    "Shoes",
    // "Smart watch",
    "Smart Phones",
    "Wrist Watches",
    "Perfume"
  ].includes(title);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200 cursor-pointer group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Tag-Like Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs lg:text-sm font-medium px-2 py-1.5 rounded-tr-lg rounded-bl-lg shadow-lg z-10 transform">
          <span>{discount}</span>
        </div>
      )}
      <img
        src={img}
        alt={title}
        className={`w-full h-64 ${
          isCategory ? "object-cover" : "object-contain"
        } rounded-t-lg transition-transform duration-500 transform group-hover:scale-110`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 text-sm lg:text-lg text-gray-300 text-center">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
