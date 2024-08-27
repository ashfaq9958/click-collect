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
      key: 4, // Corrected key to be unique
      img: Feature_4,
      title: "Casual Shirt",
      desc: "Stylish Cotton Shirt",
    },
  ];

  return (
    <div className="mt-4">
      <div className="w-[95%] mx-auto p-4 lg:p-8">
        <h1 className=" text-4xl font-semibold">
          The Featured Products
          <hr className="w-full mx-auto mt-2" />
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] mx-auto p-4 lg:p-8">
        {features.map((feature, index) => (
          <div
            key={feature.key}
            className="relative overflow-hidden cursor-pointer group"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full object-cover transition-transform duration-500 transform group-hover:scale-110 bg-[#f9f9f9] rounded-md"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-white text-center p-2">
                <h2 className="text-lg sm:text-xl font-bold">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
