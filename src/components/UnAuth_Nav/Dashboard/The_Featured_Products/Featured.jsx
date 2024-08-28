import React from "react";
import Feature_1 from "../../../../assets/red.png";
import Feature_2 from "../../../../assets/fea_1.png";
import Feature_3 from "../../../../assets/winter.png";
import Feature_4 from "../../../../assets/shirt.png";


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
      title: "White T-Shirt",
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
      title: "Casual Shirt",
      desc: "Stylish Cotton Shirt",
    },
  ];

  return (
    <div className="mt-8">
      <div className="w-[90%] mx-auto p-6 lg:p-12 bg-white">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6">
          Featured Products
        </h1>
        <hr className="w-40 h-1 mx-auto bg-black mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  p-4 lg:p-8 ">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group transform transition-transform duration-300 hover:scale-105 mx-2"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="object-contain rounded-lg transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h2 className="text-xl lg:text-2xl font-bold text-white">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm lg:text-base text-white">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
