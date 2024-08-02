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
      <div className="w-[80%] mx-auto grid grid-cols-3 items-center justify-between mt-10">
        <div>
          <h4 className="text-xl font-semibold text-white">
            Subscribe Newsletter
          </h4>
          <p className="text-white">
            Subscribe newsletter to get 5% on all products.
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <TextField
            label="Email address"
            variant="outlined"
            size="small"
            id="outlined-basic"
            className="w-64 bg-white"
          />
          <Button variant="contained" color="error">
            Subscribe
          </Button>
        </div>

        <div className=" flex justify-evenly">
          <FacebookIcon fontSize="large" color="primary" />
          <InstagramIcon fontSize="large" color="secondary" />
          <YouTubeIcon fontSize="large" color="error" />
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <Divider className="!mt-14 bg-gray-500 " />
      </div>

      <div className="w-[80%] mx-auto mt-10 flex justify-between">
        <img src={logo} alt="" className="w-40 object-contain" />
        <div className=" leading-10">
          <p className="text-white text-base">Shop Men</p>
          <p className="text-gray-400">Clothing Fashion</p>
          <p className="text-gray-400">Winter</p>
          <p className="text-gray-400">Summer</p>
          <p className="text-gray-400">Formal</p>
          <p className="text-gray-400">Casual</p>
        </div>


        <div className=" leading-10">
          <p className="text-white text-base">Shop Women</p>
          <p className="text-gray-400">Clothing Fashion</p>
          <p className="text-gray-400">Winter</p>
          <p className="text-gray-400">Summer</p>
          <p className="text-gray-400">Formal</p>
          <p className="text-gray-400">Casual</p>
        </div>

        <div className=" leading-10">
          <p className="text-white text-base">Baby Collection</p>
          <p className="text-gray-400">Clothing Fashion</p>
          <p className="text-gray-400">Winter</p>
          <p className="text-gray-400">Summer</p>
          <p className="text-gray-400">Formal</p>
          <p className="text-gray-400">Casual</p>
        </div>

        <div className=" leading-10">
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
  );
};

export default Footer;
