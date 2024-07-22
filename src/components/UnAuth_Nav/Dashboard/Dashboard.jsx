import React from "react";
import dashboard_img from "../../../assets/landing_img.jpg";
import feature_1 from "../../../assets/red.png";
import feature_2 from "../../../assets/fea_1.png";
import Featured from "./The_Featured_Products/Featured";
import sale from "../../../assets/sale.png";
import ChildSection from "../Child_Section/ChildSection";

const Dashboard = () => {
  return (
    <>
      <div className="bg-black h-14 flex flex-col justify-center">
        <div className="flex justify-center gap-4 items-center">
          <h1 className="text-center text-white text-base font-semibold">
            Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
          </h1>
          <img src={sale} alt="" className="w-8" />
        </div>
      </div>
      <img src={dashboard_img} alt="" />
      <Featured />
      <ChildSection />
    </>
  );
};

export default Dashboard;
