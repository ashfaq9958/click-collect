import React, { useEffect, useState } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button } from "@mui/material";
import DropDown from "../../DropDown/DropDown";
import Rating from "@mui/material/Rating";
import Feature_1 from "../../../assets/red.png";
import Feature_2 from "../../../assets/fea_1.png";
import Feature_3 from "../../../assets/winter.png";
import Feature_4 from "../../../assets/denim2.png";
import returnpackage from "../../../assets/icons/return.png";
import cod from "../../../assets/icons/cod.png";
import free from "../../../assets/icons/free.png";
import top from "../../../assets/icons/top.png";
import secure from "../../../assets/icons/secure.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [filterData, setFilterData] = useState([
    {
      key: 1,
      img: Feature_1,
      title: "Men's Quilted Hooded Jacket",
      subTitle: "Finest Quality Hoodie",
      brand: "HighLander Collection",
      desc: "Stay cozy and stylish with the Comfort Fit Hoodie, your go-to for laid-back days and cool-weather outings. Made from ultra-soft, high-quality cotton blend fabric, this hoodie delivers warmth without sacrificing comfort.",
      discount: "20% OFF",
      icon: <FavoriteBorderOutlinedIcon />,
      view: <VisibilityIcon />,
    },
    {
      key: 2,
      img: Feature_2,
      title: "Exclusive Nike T-Shirt",
      subtitle: "Finest Quality T-Shirt",
      brand: "The Nike Brand",
      desc: "Stay stylish and comfortable with the Nike Essential T-shirt, perfect for casual wear or an active lifestyle. Made from premium, soft cotton fabric, this T-shirt offers a lightweight and breathable feel, ensuring all-day comfort.",
      discount: "20% OFF",
      icon: <FavoriteBorderOutlinedIcon />,
      view: <VisibilityIcon />,
    },
    {
      key: 3,
      img: Feature_3,
      title: "Stylish Winter Apparel",
      subtitle: "Blue Denim Jacket",
      brand: "H&M - A Fashion Brand",
      desc: "Stay warm and stylish with the Puma Essential Jacket, perfect for layering during winter. Crafted from premium, soft cotton fabric, it provides a cozy and breathable feel, ensuring comfort in colder weather.",
      discount: "15% OFF",
      icon: <FavoriteBorderOutlinedIcon />,
      view: <VisibilityIcon />,
    },
    {
      key: 4,
      img: Feature_4,
      title: "Classic Denim Jacket",
      subTiitle: "Trending Denim",
      brand: "H&M - A Fashion Brand",
      desc: "Elevate your wardrobe with the timeless appeal of the Classic Denim Jacket. Crafted from high-quality, durable denim, this jacket combines rugged style with modern versatility. Featuring a classic button-up front, chest pockets, and a comfortable fit.",
      discount: "40% OFF",
      icon: <FavoriteBorderOutlinedIcon />,
      view: <VisibilityIcon />,
    },
  ]);
  const { id } = useParams();

  useEffect(() => {
    setFilterData(filterData.filter((item) => item.key == id));
    window.scrollTo(0, 0);
  }, []);

  const size = ["Small", "Medium", "Large", "XL", "2XL", "3XL", "4XL"];
  const color = ["Red", "Blue", "Black", "Yellow"];

  return (
    <div className="md:h-screen w-full flex flex-col md:flex-row justify-between items-center bg-gray-100 ">
      {/* Image Section */}
      <Box className="h-[50%] md:h-[100%] w-full md:w-[46%] mb-6 md:mb-0 bg-white flex justify-center items-center  ">
        <img
          src={filterData[0]?.img}
          alt="Coming Soon"
          className="h-full w-[70%] object-contain"
        />
      </Box>

      {/* Product Details */}
      <Box className="w-full md:w-[52%] p-3 md:p-8 space-y-2 ">
        <div className="flex sm:gap-x-14 gap-x-3 items-center">
          <p className="text-sm font-medium text-gray-600 font-roboto w-40">
            {filterData[0].brand}
          </p>
        </div>
        <p className="sm:text-2xl text-xl font-bold mb-2 font-roboto text-gray-800">
          {filterData[0].title}
        </p>

        <div className="flex items-center space-x-2 mb-2 ">
          <Rating
            name="read-only"
            precision={0.5}
            value={4.5}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "rgb(255 90 31)",
              },
              "& .MuiRating-iconHover": {
                color: "#FFA500",
              },
              "& .MuiRating-iconEmpty": {
                color: "#ddd",
              },
            }}
            className=""
          />
          <span className="text-gray-600">(125 Reviews)</span>
        </div>

        <Box className="flex md:gap-6 gap-3 items-center dropdown dropdownHeight dropdownPlaceholder">
          <DropDown
            names={size}
            label="Select Size"
            className="dropdown-select"
          />
          <DropDown
            names={color}
            label="Select Color"
            className="dropdown-select"
          />
        </Box>
        <hr className="border-gray-300 my-3" />

        <div className="flex items-center space-x-4">
          <p className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent ">
            $99.99
          </p>
          <p className="text-lg font-semibold text-gray-400 line-through">
            $124.99
          </p>
          <span className="text-sm text-green-600 font-bold bg-green-100 px-2 py-1 rounded-lg">
            20% OFF
          </span>
        </div>

        <p className=" mb-5 font-roboto text-gray-700 mt-4 leading-relaxed text-base">
          {filterData[0].desc}
        </p>

        <>
          <Box className="mt-6 flex sm:space-x-8 space-x-3  items-center mb-2">
            <Button
              variant="contained"
              // color="primary"
              startIcon={<ShoppingCart />}
              className="!capitalize "
              sx={{
                background:
                  "linear-gradient(to right, #f59e0b, #f43f5e, #e11d48)",
                color: "white",
                letterSpacing: "0.05em",
                width: 190,
              }}
            >
              Add To Cart
            </Button>
            <Button
              variant="outlined"
              startIcon={<FavoriteBorderIcon />}
              className="!capitalize !text-orange-600  !border-orange-600 hover:bg-orange-50"
              sx={{
                letterSpacing: "0.05em",
                width: 190,
              }}
            >
              Wishlist
            </Button>
          </Box>
        </>
        <hr className="border-gray-300 my-3" />
        <div className="flex items-center gap-10 mb-1 pb-2">
          <p className="text-xl font-semibold font-roboto text-gray-800">
            Product Details
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-3 sm:gap-x-4  p-4 bg-gray-50 rounded-lg shadow-sm mb-4 font-roboto">
          <p className="text-sm font-medium text-gray-600">
            Material composition
          </p>
          <p className="text-sm text-gray-800 font-semibold sm:ml-0 ml-10">
            Cotton
          </p>

          <p className="text-sm font-medium text-gray-600">Fit type</p>
          <p className="text-sm text-gray-800 font-semibold sm:ml-0 ml-10">
            Regular Fit
          </p>

          <p className="text-sm font-medium text-gray-600">Sleeve type</p>
          <p className="text-sm text-gray-800 font-semibold  sm:ml-0 ml-10">
            Full Sleeve
          </p>

          <p className="text-sm font-medium text-gray-600">Style</p>
          <p className="text-sm text-gray-800 font-semibold sm:ml-0 ml-10">
            Modern
          </p>

          <p className="text-sm font-medium text-gray-600">Neck Style</p>
          <p className="text-sm text-gray-800 font-semibold sm:ml-0 ml-10">
            Dom
          </p>
        </div>

        <hr className="border-gray-300 my-4" />
        <div className="flex justify-between items-center">
          {[
            { icon: returnpackage, label: "10-Days Return  " },
            { icon: cod, label: "Pay on Delivery" },
            { icon: free, label: "Free Delivery" },
            { icon: top, label: "Top Brand" },
            { icon: secure, label: "Secure Payment" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.icon} alt="" className="sm:w-10 w-8" />
              <p className="text-center sm:text-sm text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default ProductDetails;
