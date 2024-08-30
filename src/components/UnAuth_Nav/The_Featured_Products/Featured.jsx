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
    },
    {
      key: 2,
      img: Feature_2,
      title: "Nike T-Shirt",
      desc: "Finest Quality T-Shirt",
    },
    {
      key: 3,
      img: Feature_3,
      title: "Winter Clothes",
      desc: "Blue Denim Jacket",
    },
    {
      key: 4,
      img: Feature_4,
      title: "Denim Jacket",
      desc: "Trending Denim",
    },
  ];

  return (
    <div className="mt-8">
      <div className="w-[98%] mx-auto p-6 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
          Featured Products
        </h1>
        <hr className="w-48 h-1 mx-auto bg-black rounded mb-8" />

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
