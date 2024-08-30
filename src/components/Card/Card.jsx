import React from "react";

const Card = ({ feature: { img, title, desc } }) => {
  // Check if the title matches any of the categories
  const isCategory = [
    "Kid's Fashion",
    "Men's Fashion",
    "Women's Fashion",
    "Accessories",
    "Shoes",
  ].includes(title);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={img}
        alt={title}
        className={`w-full h-64 ${
          isCategory ? "object-cover" : "object-contain"
        } rounded-t-xl transition-transform duration-500 transform group-hover:scale-110`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-xl lg:text-2xl font-bold text-white">{title}</h2>
        {desc && (
          <p className="mt-2 text-sm lg:text-base text-white text-center">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
