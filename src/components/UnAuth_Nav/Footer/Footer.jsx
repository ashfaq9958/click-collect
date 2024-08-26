import { TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import logo from "../../../assets/bg_logo.png";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5 bg-black">
      {/* Newsletter Subscription Section */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-between mt-10">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-white">
            Subscribe Newsletter
          </h4>
          <p className="text-white mt-2">
            Subscribe newsletter to get 5% on all products.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          <TextField
            label="Email address"
            variant="outlined"
            size="small"
            className="w-full md:w-64 bg-white"
          />
          <Button variant="contained" color="error" className="mt-2 md:mt-0">
            Subscribe
          </Button>
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          <FacebookIcon fontSize="large" color="primary" />
          <InstagramIcon fontSize="large" color="secondary" />
          <YouTubeIcon fontSize="large" color="error" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mx-auto mt-10">
        <Divider className="!bg-gray-500" />
      </div>

      {/* Footer Links Section */}
      <div className="w-full mx-auto mt-10 flex flex-col md:flex-row justify-between">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="w-40 object-contain" />
        </div>

        <div className="flex flex-wrap gap-10 text-center md:text-left">
          <div className="leading-6">
            <p className="text-white text-base">Shop Men</p>
            <p className="text-gray-400">Clothing Fashion</p>
            <p className="text-gray-400">Winter</p>
            <p className="text-gray-400">Summer</p>
            <p className="text-gray-400">Formal</p>
            <p className="text-gray-400">Casual</p>
          </div>

          <div className="leading-6">
            <p className="text-white text-base">Shop Women</p>
            <p className="text-gray-400">Clothing Fashion</p>
            <p className="text-gray-400">Winter</p>
            <p className="text-gray-400">Summer</p>
            <p className="text-gray-400">Formal</p>
            <p className="text-gray-400">Casual</p>
          </div>

          <div className="leading-6">
            <p className="text-white text-base">Baby Collection</p>
            <p className="text-gray-400">Clothing Fashion</p>
            <p className="text-gray-400">Winter</p>
            <p className="text-gray-400">Summer</p>
            <p className="text-gray-400">Formal</p>
            <p className="text-gray-400">Casual</p>
          </div>

          <div className="leading-6">
            <p className="text-white text-base">Quick Links</p>
            <p className="text-gray-400">Track Your Order</p>
            <p className="text-gray-400">Support</p>
            <p className="text-gray-400">FAQ</p>
            <p className="text-gray-400">Carrier</p>
            <p className="text-gray-400">About</p>
            <p className="text-gray-400">Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
