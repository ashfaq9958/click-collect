import React from "react";
import jeans from "../../../assets/jeans2.jpg";
import { Button } from "@mui/material";

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
      <div className="w-full md:w-1/2 bg-[#f9f9f9] p-8 md:p-12 flex flex-col justify-center sm:space-y-2 ">
        <div className="space-y-2 p-2 -mt-4 sm:mt-0">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 font-roboto">
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

        <Button
          variant="contained"
          className="!capitalize !bg-red-600  text-white sm:self-start self-center "
          sx={{
            letterSpacing: "0.05em",
            width: 170,
          }}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ChildSection;
