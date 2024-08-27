import React from "react";
import man from "../../../assets/category/man.png";

const Categories = () => {
  return (
    <div className="mt-4">
      <div className="w-[95%] mx-auto p-4 lg:p-8">
        <h1 className="text-4xl font-semibold">The Categories Products</h1>
        <hr className="w-full mt-2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 lg:p-8 ">
          <img src={man} alt="" className="w-1/2"/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
