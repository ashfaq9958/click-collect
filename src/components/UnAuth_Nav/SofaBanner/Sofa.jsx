import React from "react";
import jeans from "../../../assets/jeans2.jpg";

const Sofa = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-14 w-full">
      {/* Image Section */}
      <img
        src={jeans}
        alt="Child"
        className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      />

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#f4f4f4] p-6 md:p-20 space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900">
            FAVORITE BRANDS
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600">
            Premium Fabric Selection
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Experience top-quality fabrics with unmatched comfort. Each piece is
            designed with durability and style in mind, offering the perfect
            balance of elegance and function. Find your new favorite jeans
            today.
          </p>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
          From everyday wear to special occasions, our collection delivers both
          fashion and practicality. With every detail carefully considered, our
          clothing ensures a flawless fit that you’ll love.
        </p>
      </div>
    </div>
  );
};

export default Sofa;
