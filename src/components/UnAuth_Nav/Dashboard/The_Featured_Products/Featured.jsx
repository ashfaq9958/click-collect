import React from "react";
import Feature_1 from "../../../../assets/red.png";
import Feature_2 from "../../../../assets/fea_1.png";
import Feature_3 from "../../../../assets/fea_5.png";

const Featured = () => {
  const features = [
    {
      key: 1,
      img: Feature_1,
      title: "Puma Hoodie",
      desc: "finest Quality Hoodie ",
    },
    {
      key: 2,
      img: Feature_2,
      title: "White T-Shirt",
      desc: "finest Quality Hoodie ",
    },
    {
      key: 3,
      img: Feature_3,
      title: "Stylish Child",
      desc: "Premium fabric",
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="text-center text-4xl font-semibold mt-16">
        The Featured Products
        <hr className="w-[30%] mx-auto " />
      </h1>
      <div className="grid grid-cols-3 ">
        <div className="flex mx-auto gap-16 mt-8 items-center p-5 relative overflow-hidden cursor-pointer group w-[85%]">
          <img
            src={Feature_1}
            alt=""
            className="w-full object-cover transition-transform duration-500 transform group-hover:scale-110 bg-[#f9f9f9] rounded-md "
          />
          <div className="absolute inset-0 flex items-center justify-center mb-2 rounded-md  bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">{features[0].title}</h2>
              <p className="mt-2">{features[0].desc}</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto gap-16 mt-8 items-center p-5 relative overflow-hidden cursor-pointer group w-[85%]">
          <img
            src={Feature_2}
            alt=""
            className="w-full object-cover transition-transform duration-500 transform group-hover:scale-110 bg-[#f9f9f9] rounded-md "
          />
          <div className="absolute inset-0 flex items-center justify-center mb-2 rounded-md  bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">{features[1].title}</h2>
              <p className="mt-2">{features[1].desc}</p>
            </div>
          </div>
        </div>

        <div className="flex mx-auto gap-16 mt-8 items-center p-5 relative overflow-hidden cursor-pointer group h-[430px] w-[370px]">
          <img
            src={Feature_3}
            alt=""
            className="w-full h-full object-contain transition-transform duration-500 transform group-hover:scale-110 bg-[#f9f9f9] rounded-md "
          />
          <div className="absolute inset-0 flex items-center justify-center mb-2 rounded-md  bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-white text-center">
              <h2 className="text-xl font-bold">{features[2].title}</h2>
              <p className="mt-2">{features[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
