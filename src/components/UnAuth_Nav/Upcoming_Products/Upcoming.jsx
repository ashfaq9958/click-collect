import React from "react";
import Card from "../../Card/Card";
import watch from "../../../assets/upcoming/watch.png";
import perfume from "../../../assets/upcoming/perfume.jpg";
import phone from "../../../assets/upcoming/phone2.jpg";
import wrist from "../../../assets/upcoming/wrist_2.jpg";
import { Box } from "@mui/material";

const upcoming = [
  {
    title: "Smart Phones",
    img: phone,
  },
  {
    title: "Wrist Watches",
    img: wrist,
  },
  // {
  //   title: "Smart Watches",
  //   img: watch,
  // },
  {
    title: "Perfume",
    img: perfume,
  },
];

const Upcoming = () => {
  return (
    <div className="mt-8 bg-gray-50">
      <div className="w-[98%] mx-auto p-6 lg:p-12">
        <Box className=''>
          <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-2 text-gray-800 font-roboto">
            Explore Our Upcoming
          </h1>
          <hr className="w-52 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-400 rounded mb-8" />
        </Box>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcoming.map((item, index) => (
            <Card key={index} feature={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
