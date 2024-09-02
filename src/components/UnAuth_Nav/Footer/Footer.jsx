import { TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import logo from "../../../assets/bg_logo.png";
import React from "react";

const Footer = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-400 w-full mx-auto">
      {/* Newsletter Subscription Section */}
      <div className="w-[96%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between mt-10">
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
            className="mt-2 md:mt-0 md:ml-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2"
          >
            Subscribe
          </Button>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          <FacebookIcon
            fontSize="large"
            className="text-blue-500 hover:text-blue-600 cursor-pointer transition-transform transform hover:scale-110"
          />
          <InstagramIcon
            fontSize="large"
            className="text-pink-500 hover:text-pink-600 cursor-pointer transition-transform transform hover:scale-110"
          />
          <YouTubeIcon
            fontSize="large"
            className="text-red-500 hover:text-red-600 cursor-pointer transition-transform transform hover:scale-110"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mx-auto mt-10">
        <Divider className="!bg-gray-700" />
      </div>

      {/* Footer Links Section */}
      <div className="w-full mx-auto mt-10 flex flex-col md:flex-row justify-between items-start">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="w-40 object-contain filter drop-shadow-lg" />
        </div>

        <div className="flex flex-wrap gap-16 mt-8 md:mt-0 text-center md:text-left">
          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Shop Men</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">
              Clothing Fashion
            </p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Winter</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Summer</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Formal</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Casual</p>
          </div>

          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Shop Women</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">
              Clothing Fashion
            </p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Winter</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Summer</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Formal</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Casual</p>
          </div>

          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Baby Collection</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">
              Clothing Fashion
            </p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Winter</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Summer</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Formal</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Casual</p>
          </div>

          <div className="leading-8">
            <p className="text-white text-lg font-semibold">Quick Links</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">
              Track Your Order
            </p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Support</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">FAQ</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Careers</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">About</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-200">Contact Us</p>
          </div>
        </div>
      </div>

      {/* Second Divider */}
      <div className="w-full mx-auto mt-10">
        <Divider className="!bg-gray-700" />
      </div>

      {/* Footer Bottom */}
      <div>
        <p className="text-center mt-6 text-gray-500">
          © 2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
