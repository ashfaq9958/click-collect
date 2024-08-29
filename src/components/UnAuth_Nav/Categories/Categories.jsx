import React from "react";
import man from "../../../assets/category/man.png";
import women from "../../../assets/category/women.png";
import kid from "../../../assets/category/kid.png";
import accessories from "../../../assets/category/access.png";

const Categories = () => {
  const categories = [
    {
      img: man,
      title: "Men's Fashion",
    },
    {
      img: women,
      title: "Women's Fashion",
    },
    {
      img: kid,
      title: "Kid's Fashion",
    },
    {
      img: accessories,
      title: "Accessories",
    },
  ];

  return (
    <div className="mt-8">
      <div className="w-[90%] mx-auto p-6 lg:p-12 bg-white">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
          Explore Our Categories
        </h1>
        <hr className="w-48 h-1 mx-auto bg-black rounded mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-sm border-[1px] cursor-pointer group transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h2 className="text-xl lg:text-2xl font-bold text-white">
                  {category.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
