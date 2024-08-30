import React from "react";
import man from "../../../assets/category/man.png";
import women from "../../../assets/category/women.png";
import kid from "../../../assets/category/kid.png";
import accessories from "../../../assets/category/access.png";
import grooming from "../../../assets/category/grooming.png";
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
      img: accessories,
      title: "Accessories",
    },
    {
      img: shoes,
      title: "Shoes",
    },

    // {
    //   img: grooming,
    //   title: "grooming",
    // },
  ];

  return (
    <div className="mt-8">
      <div className="w-[98%] mx-auto p-6 lg:p-12 ">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
          Explore Our Categories
        </h1>
        <hr className="w-48 h-1 mx-auto bg-black rounded mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((item, index) => (
            <Card key={index} feature={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
