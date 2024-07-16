import React from "react";
import dashboard_img from "../../../assets/landing_img.jpg";
import feature_1 from "../../../assets/red.png";
import feature_2 from "../../../assets/fea_1.png";
import Featured from "./The_Featured_Products/Featured";

const Dashboard = () => {
  return (
    <>
      <img src={dashboard_img} alt="" />
      <Featured/>

      {/* <div className="container mx-auto  border-black ">
        <h1 className="text-center text-4xl font-semibold mt-10">
          The Featured Products
        </h1>
        <div className=" grid grid-cols-2 mt-4 border-2">
          <img src={feature_1} alt="" className="border-2 bg-[#f9f9f9] rounded-md shadow-xl" />
          <img src={feature_2} alt="" className="border-2 bg-[#f9f9f9] rounded-md shadow-xl" />
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
