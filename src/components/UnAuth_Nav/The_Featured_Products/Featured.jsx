import React from "react";
import Feature_1 from "../../../assets/red.png";
import Feature_2 from "../../../assets/fea_1.png";
import Feature_3 from "../../../assets/winter.png";
import Feature_4 from "../../../assets/denim2.png";
import Card from "../../Card/Card";

const Featured = () => {
  const features = [
    {
      key: 1,
      img: Feature_1,
      title: "Puma Hoodie",
      desc: "Finest Quality Hoodie",
      discount: "20% OFF",
    },
    {
      key: 2,
      img: Feature_2,
      title: "Nike T-Shirt",
      desc: "Finest Quality T-Shirt",
      discount: "20% OFF",
    },
    {
      key: 3,
      img: Feature_3,
      title: "Winter Clothes",
      desc: "Blue Denim Jacket",
      discount: "15% OFF",
    },
    {
      key: 4,
      img: Feature_4,
      title: "Denim Jacket",
      desc: "Trending Denim",
      discount: "40% OFF",

    },
  ];

  return (
    <div className="mt-8 bg-gray-50">
      <div className="w-[98%] mx-auto p-6 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
          Featured Products
        </h1>
        <hr className="w-48 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-400 rounded mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <Card key={item.key} feature={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
