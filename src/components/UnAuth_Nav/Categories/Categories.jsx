import React from "react";
import man from "../../../assets/category/man.png";
import women from "../../../assets/category/women.png";
import kid from "../../../assets/category/kid.png";
import shoes from "../../../assets/category/shoes.png";
import Card from "../../Card/Card";

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
      img: shoes,
      title: "Shoes",
    },
  ];

  return (
    <div className="mt-8 bg-gray-50">
      <div className="w-[98%] mx-auto p-6 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-2 text-gray-800 font-roboto">
          Explore Categories
        </h1>
        <hr className="w-52 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-400 rounded mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <Card key={index} feature={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
