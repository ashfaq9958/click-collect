import React, { useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
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
      title: "Men's Quilted Hooded Winter Jacket",
      subTitle: "Finest Quality Hoodie",
      brand: "HighLander",
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
      brand: "Nike",
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
      brand: "H&M",
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
      brand: "H&M",
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
    <div className="md:h-screen w-full flex flex-col md:flex-row  justify-between items-center bg-gray-100 ">
      {/* Image Section */}
      <Box className="h-[50%] md:h-[100%] w-full md:w-[46%] mb-6 md:mb-0 bg-white flex justify-center items-center  ">
        <img
          src={filterData[0]?.img}
          alt="Coming Soon"
          className="h-full w-[70%] object-contain"
        />
      </Box>

      {/* Product Details */}
      <Box className="w-full md:w-[52%] p-3 md:p-8 ">
        <p className="sm:text-2xl font-bold mb-1 font-roboto text-gray-800">
          {filterData[0].title}
        </p>
        <p className="text-sm font-medium text-gray-500 font-roboto mb-1">
          Brand: {filterData[0].brand}
        </p>
        <div className="flex gap-1 items-center mb-2">
          <p className="text-sm font-medium text-gray-500 font-roboto">
            Rating:
          </p>
          <Rating
            name="read-only"
            value={4}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "rgb(255 90 31)",
              },
              "& .MuiRating-iconHover": {
                color: "#FFA500",
              },
            }}
          />
        </div>

        <Box className="flex md:gap-4 gap-2 items-center dropdown dropdownHeight dropdownPlaceholder">
          <DropDown names={size} label="Select Size" />
          <DropDown names={color} label="Select Color" />
        </Box>
        <hr className="border-gray-300 my-3" />
        <p className="mb-3">
          <span className="text-gray-400 text-xl font-bold line-through">
            $65.00
          </span>{" "}
          <span className="text-orange-500 ml-4 text-3xl font-extrabold font-roboto">
            $49.00
          </span>
        </p>

        <p className="leading-relaxed font-roboto mb-3 ">{filterData[0].desc}</p>

        <>
          <Box className="flex gap-4 items-center mb-2">
            <Button
              variant="contained"
              startIcon={<ShoppingBagIcon />}
              className="!capitalize "
              sx={{
                background: "linear-gradient(45deg, #FF8C00, #FFA500)",
                "&:hover": {
                  background: "linear-gradient(45deg, #FFA500, #FF8C00)",
                },
                width: 190,
              }}
            >
              Add To Cart
            </Button>
            <Button
              variant="contained"
              startIcon={<FavoriteBorderIcon />}
              className="!capitalize text-white"
              sx={{
                background: "linear-gradient(45deg, #FF8C00, #FFA500)",
                "&:hover": {
                  background: "linear-gradient(45deg, #FFA500, #FF8C00)",
                },
                width: 190,
              }}
            >
              Wishlist
            </Button>
          </Box>
        </>
        <hr className="border-gray-300 my-3" />
        <div className="flex items-center gap-20 mb-1">
          <p className="text-lg font-medium font-roboto">Product Details</p>
        </div>
        <div className="grid grid-cols-2 gap-y-1  max-w-md items-center">
          <p className="text-sm font-medium ">Material composition</p>
          <p>Cotton</p>

          <p className="text-sm font-medium">Fit type</p>
          <p>Regular Fit</p>

          <p className="text-sm font-medium">Sleeve type</p>
          <p>Full Sleeve</p>

          <p className="text-sm font-medium">Style</p>
          <p>Modern</p>

          <p className="text-sm font-medium">Neck Style</p>
          <p>Dom</p>
        </div>
        <hr className="border-gray-300 my-2" />
        <div className="flex justify-between items-center sm:gap-0 gap-4">
          <div>
            <div className="flex justify-center">
              <img src={returnpackage} alt="" className="w-10" />
            </div>
            <p className="text-center text-sm">10 Days Returnable</p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src={cod} alt="" className="w-10" />
            </div>
            <p className="text-center text-sm">Pay on Delivery</p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src={free} alt="" className="w-10" />
            </div>
            <p className="text-center text-sm">Free Delivery</p>
          </div>

          <div>
            <div className="flex justify-center">
              <img src={top} alt="" className="w-10" />
            </div>
            <p className="text-center text-sm">Top Brand</p>
          </div>

          <div>
            <div className="flex justify-center">
              <img src={secure} alt="" className="w-10" />
            </div>
            <p className="text-center text-sm">Secure Transaction</p>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ProductDetails;
