import React from "react";
import dashboard_img from "../../../assets/landing_img.jpg";
import dash2 from "../../../assets/landing_2.jpg";
import dash3 from "../../../assets/landing_3.jpg";
import dash4 from "../../../assets/landing_4.jpg";
import dash5 from "../../../assets/landing_5.jpg";
import feature_1 from "../../../assets/red.png";
import feature_2 from "../../../assets/fea_1.png";
import Featured from "./The_Featured_Products/Featured";
import sale from "../../../assets/sale.png";
import ChildSection from "../Child_Section/ChildSection";
import Footer from "../Footer/Footer";
import Carousel from "react-material-ui-carousel";
import Categories from "../Categories/Categories";

const Dashboard = () => {
  const landingImg = [
    {
      img: dashboard_img,
    },
    {
      img: dash4,
    },
    {
      img: dash3,
    },
    {
      img: dash5,
    },
  ];
  return (
    <>
      <div className="bg-black h-14 flex flex-col justify-center">
        <div className="flex justify-center gap-4 items-center">
          <h1 className="text-center text-white text-base font-semibold">
            Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
          </h1>

          <img src={sale} alt="" className="w-8" />
        </div>
      </div>
      <Carousel indicators="false">
        {landingImg.map((item, index) => (
          <>
            <img src={item.img} alt="" />
          </>
        ))}
      </Carousel>

      <Featured />
      <Categories />
      <ChildSection />
      <Footer />
    </>
  );
};

export default Dashboard;
