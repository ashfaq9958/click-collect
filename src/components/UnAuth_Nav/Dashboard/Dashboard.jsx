import React from "react";
import dashboard_img from "../../../assets/landing_img.jpg";
import dash5 from "../../../assets/landing_5.jpg";
import dash6 from "../../../assets/category/women.png";

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
      alt: "Landing Image 1",
    },
    {
      img: dash5,
      alt: "Landing Image 2",
    },
    {
      img: dash6,
      alt: "Landing Image 3",
    },
  ];

  return (
    <>
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-14 flex items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-center text-white text-sm lg:text-base font-semibold">
            Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
          </h1>
          <img src={sale} alt="Sale Icon" className="w-8 animate-pulse" />
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible={true}
        autoPlay={true}
        animation="fade"
        interval={5000}
      >
        {landingImg.map((item, index) => (
          <div key={index} className="w-full h-full overflow-hidden">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Featured Section */}
      <div className="mt-10">
        <Featured />
      </div>

      {/* Categories Section */}
      <div className="mt-10">
        <Categories />
      </div>

      {/* Child Section */}
      <div className="mt-10">
        <ChildSection />
      </div>

      {/* Footer Section */}
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;