import React from "react";
import child from "../../../assets/child.jpg";
import { Button } from "@mui/material";

const ChildSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-14 w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={child}
          alt="Child"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#f9f9f9] p-8 md:p-12 flex flex-col justify-center space-y-2">
        <div className="space-y-3 p-2 -mt-4 sm:mt-0 ">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 font-roboto">
            FAVOURITE BRANDS
          </h1>
          <h2 className="sm:text-3xl text-xl font-semibold text-red-600 font-roboto">
            Children's Apparel Collection
          </h2>
          <p className="sm:text-base text-sm text-gray-600 leading-relaxed font-roboto">
            Explore our wide range of children's apparel featuring comfortable
            styles and vibrant colors that kids love. Dress them in their
            favorite outfits and let their personalities shine!
          </p>
          <p className="sm:text-base text-sm text-gray-600 leading-relaxed mt-4 font-roboto">
            We prioritize quality and affordability, ensuring your little ones
            stay stylish without breaking the bank. Find everything from casual
            wear to special occasion outfits in our collection.
          </p>
          <p className="sm:text-base text-sm text-gray-600 leading-relaxed mt-4 font-roboto">
            With a variety of sizes and designs, you can easily mix and match to
            create unique looks that express your child's individuality. From
            playful prints to classic styles, our apparel is designed to inspire
            creativity and confidence in every child.
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
