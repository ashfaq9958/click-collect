import React from "react";
import Feature_1 from "../../../../assets/red.png";
import Feature_2 from "../../../../assets/fea_1.png";
import Feature_3 from "../../../../assets/fea_3.png";

const Featured = () => {
  return (
    <div className="border-2">
      {" "}
      <h1 className="text-center text-4xl font-semibold mt-16">
        The Featured Products
      </h1>
      <hr className="w-[30%] mx-auto "/>
      <div className="flex justify-evenly gap-16 mt-8 items-center p-20 ">
        <div  className=" bg-[#f9f9f9] rounded-md shadow-xl flex justify-center p-5 items-center">
          <img src={Feature_1} alt=""  className="w-[70%]"/>
        </div>
        <div  className=" bg-[#f9f9f9] rounded-md shadow-xl flex justify-center ">
          <img src={Feature_2} alt="" className="w-[70%]"/>
        </div>
        {/* <div  className=" bg-[#f9f9f9] rounded-md shadow-xl flex justify-center ">
          <img src={Feature_3} alt="" className=""/>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
