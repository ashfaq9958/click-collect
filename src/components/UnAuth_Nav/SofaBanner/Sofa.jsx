import React from "react";
import jeans from "../../../assets/jeans2.jpg";

const ChildSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-14 w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={jeans}
          alt="Child"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#f9f9f9] p-8 md:p-12 flex flex-col justify-center space-y-2">
        <div className="space-y-2 p-2 ">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-900 font-roboto">
            FAVOURITE BRANDS
          </h1>
          <h2 className="sm:text-3xl text-xl font-semibold text-red-600 font-roboto">
            Essential Jeans Collection
          </h2>
          <p className="sm:text-base text-sm text-gray-700 leading-relaxed font-roboto">
            Introducing our Essential Men's Jeans Collection, where style meets
            versatility. This curated selection features a range of fits, from
            classic straight-leg to modern slim cuts, ensuring there’s something
            for everyone.
          </p>
          <p className="sm:text-base text-sm text-gray-600 leading-relaxed mt-4 font-roboto">
            We prioritize quality and affordability, ensuring your little ones
            stay stylish without breaking the bank. Find everything from casual
            wear to special occasion outfits in our collection.
          </p>
          <p className="sm:text-base text-sm text-gray-600 leading-relaxed mt-4 font-roboto">
            With a variety of sizes and designs, you can easily mix and match to
            create unique looks that express your Men's individuality. From
            playful prints to classic styles, our apparel is designed to inspire
            creativity and confidence in every person.
          </p>
        </div>

        <button className="self-start px-6 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ChildSection;
