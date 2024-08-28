import { TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import logo from "../../../assets/bg_logo.png";
import React from "react";

const Footer = () => {
  return (
    <div className="p-8 bg-black text-gray-400">
      {/* Newsletter Subscription Section */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between mt-10">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold text-white">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-gray-300 mt-2">
            Get 5% off on all products by subscribing to our newsletter.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <TextField
            label="Email address"
            variant="outlined"
            size="small"
            className="w-full md:w-80 bg-white"
          />
          <Button
            variant="contained"
            color="error"
            className="mt-2 md:mt-0 md:ml-2 bg-red-600 hover:bg-red-700 text-white"
          >
            Subscribe
          </Button>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          <FacebookIcon fontSize="large" className="text-blue-500 hover:text-blue-600 cursor-pointer" />
          <InstagramIcon fontSize="large" className="text-pink-500 hover:text-pink-600 cursor-pointer" />
          <YouTubeIcon fontSize="large" className="text-red-500 hover:text-red-600 cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mx-auto mt-10">
        <Divider className="!bg-gray-700" />
      </div>

      {/* Footer Links Section */}
      <div className="w-full mx-auto mt-10 flex flex-col md:flex-row justify-between items-start">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="w-40 object-contain" />
        </div>

        <div className="flex flex-wrap gap-16 mt-8 md:mt-0 text-center md:text-left">
          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Shop Men</p>
            <p className="hover:text-white cursor-pointer">Clothing Fashion</p>
            <p className="hover:text-white cursor-pointer">Winter</p>
            <p className="hover:text-white cursor-pointer">Summer</p>
            <p className="hover:text-white cursor-pointer">Formal</p>
            <p className="hover:text-white cursor-pointer">Casual</p>
          </div>

          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Shop Women</p>
            <p className="hover:text-white cursor-pointer">Clothing Fashion</p>
            <p className="hover:text-white cursor-pointer">Winter</p>
            <p className="hover:text-white cursor-pointer">Summer</p>
            <p className="hover:text-white cursor-pointer">Formal</p>
            <p className="hover:text-white cursor-pointer">Casual</p>
          </div>

          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Baby Collection</p>
            <p className="hover:text-white cursor-pointer">Clothing Fashion</p>
            <p className="hover:text-white cursor-pointer">Winter</p>
            <p className="hover:text-white cursor-pointer">Summer</p>
            <p className="hover:text-white cursor-pointer">Formal</p>
            <p className="hover:text-white cursor-pointer">Casual</p>
          </div>

          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Quick Links</p>
            <p className="hover:text-white cursor-pointer">Track Your Order</p>
            <p className="hover:text-white cursor-pointer">Support</p>
            <p className="hover:text-white cursor-pointer">FAQ</p>
            <p className="hover:text-white cursor-pointer">Careers</p>
            <p className="hover:text-white cursor-pointer">About</p>
            <p className="hover:text-white cursor-pointer">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
