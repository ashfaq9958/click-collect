import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/material";
import DropDown from "../../DropDown/DropDown";
import Feature_1 from "../../../assets/red.png";
import Feature_2 from "../../../assets/fea_1.png";
import Feature_3 from "../../../assets/winter.png";
import Feature_4 from "../../../assets/denim2.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import { ShoppingCart, Close } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import {
  Button,
  Rating,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";

const ProductDetails = () => {
  const [filterData, setFilterData] = useState([
    {
      key: 1,
      img: Feature_1,
      title: "Men's Quilted Hooded Jacket",
      subTitle: "Finest Quality Hoodie",
      brand: "HighLander Collection",
      desc: "Stay cozy and stylish with the Comfort Fit Hoodie, your go-to for laid-back days and cool-weather outings. Made from ultra-soft, high-quality cotton blend fabric, this hoodie delivers warmth without sacrificing comfort.",
      price: 799,
      deletedPrice: 1299,
      discount: 12,
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
      price: 999,
      deletedPrice: 1599,
      discount: 20,
      icon: <FavoriteBorderOutlinedIcon />,
      view: <VisibilityIcon />,
    },
    {
      key: 3,
      img: Feature_3,
      title: "Stylish Winter Apparel",
      subtitle: "Blue Denim Jacket",
      brand: "H&M - A Fashion Brand",
      desc: "Experience ultimate comfort and style with the Puma Essential Jacket, designed to keep you warm and chic all season. Stay warm and stylish with the Puma Essential Jacket, perfect for layering during winter. Crafted from premium, soft cotton fabric, it provides a cozy and breathable feel, ensuring comfort in colder weather.",
      price: 1499,
      deletedPrice: 2150,
      discount: 20,
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
      price: 1399,
      deletedPrice: 1700,
      discount: 17,
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

  const [openReviewModal, setOpenReviewModal] = useState(false);

  const handleCloseModal = () => setOpenReviewModal(false);

  return (
    <div className="md:h-screen w-full flex flex-col md:flex-row justify-between items-center bg-gray-100 ">
      {/* Image Section */}
      <Box className="h-[50%] md:h-[100%] w-full md:w-[46%] mb-6 md:mb-0 bg-white shadow-md p-4 flex justify-center items-center">
        <img
          src={filterData[0]?.img}
          alt="Coming Soon"
          className="h-full w-[70%] object-contain"
        />
        {/* <span className="text-xs sm:text-lg text-white font-semibold bg-gradient-to-r from-red-500 to-red-600 px-3 py-1 sm:top-10 sm:right-10 right-4 top-6 absolute rounded-full flex justify-center items-center shadow-md">
          20% OFF
        </span> */}
      </Box>

      {/* Product Details */}
      <Box className="w-full md:w-[52%] p-3 md:p-8 space-y-3 sm:-mt-4 -mt-5 ">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600 font-roboto w-40">
            {filterData[0].brand}
          </p>
        </div>
        <p className="sm:text-2xl text-xl font-bold mb-2 font-roboto text-gray-800">
          {filterData[0].title}
        </p>

        <div className="flex items-center space-x-4">
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
          <span
            onClick={() => setOpenReviewModal(true)}
            className="text-gray-600 cursor-pointer hover:underline "
          >
            02 Reviews
          </span>
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

        <div className="flex items-center space-x-4 font-roboto">
          <p className="text-2xl font-bold  shadow-pink-500/50 tracking-wide font-roboto">
            <sup className="text-sm font-normal">₹</sup>
            {filterData[0].price}
          </p>
          <p className="text-lg font-semibold text-gray-400 line-through">
            ₹{filterData[0].deletedPrice}
          </p>
          <span className="text-xs text-white font-bold bg-gradient-to-r from-red-500 to-red-600 px-2 py-1 rounded-tr-lg rounded-bl-lg">
            {filterData[0].discount}% OFF
          </span>
        </div>

        <p className=" mb-5 font-roboto text-gray-700 mt-4 leading-relaxed text-base">
          {filterData[0].desc}
        </p>

        <>
          <Box className="mt-6 flex sm:space-x-8 space-x-3  items-center mb-2">
            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
              className="!capitalize bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white"
              sx={{
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
        <div className="flex items-center gap-x-[5.5rem] pb-2">
          <p className="text-xl font-semibold font-roboto text-gray-800">
            Product Details
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-4 sm:gap-x-8 p-4 bg-white rounded-md items-center font-roboto">
          {/* Material Composition */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-2h3v-2H8v-2h3V8h2v2h3v2h-3v2h3v2h-3v2h-2v-2z" />
              </svg>
            </span>
            <p className="text-base  text-gray-600">Fabric Composition</p>
          </div>
          <p className="text-sm text-gray-800 font-medium">
            100% Organic Cotton
          </p>

          {/* Fit Type */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 12.5l-2-2-2 2V16h4v-1.5z" />
              </svg>
            </span>
            <p className="text-base text-gray-600">Fit Type</p>
          </div>
          <p className="text-sm text-gray-800 font-medium">Slim Fit</p>

          {/* Sleeve Type */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13h-2v-2h2v2zm0-4h-2V7h2v4z" />
              </svg>
            </span>
            <p className="text-base text-gray-600">Sleeve Type</p>
          </div>
          <p className="text-sm text-gray-800 font-medium">
            Full-Length Sleeves
          </p>

          {/* Style */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 4V2h4v2h5v2h-2.05c-.83 1.2-1.57 2.63-2.16 4.22-.49 1.31-1.08 2.59-1.74 3.78-.65-1.19-1.26-2.47-1.74-3.78C11.61 8.63 10.87 7.2 10.05 6H8V4h2zm0 9c1.32 0 2.66-.53 3.87-1.49 1.22-.96 2.33-2.16 3.05-3.46H10V13zm6.88 7.39c1.06-.63 2.04-1.51 2.88-2.52v2.52h-2.88z" />
              </svg>
            </span>
            <p className="text-base  text-gray-600">Style</p>
          </div>
          <p className="text-sm text-gray-800 font-medium">
            Contemporary Casual
          </p>

          {/* Neck Style */}
          <div className="flex items-center gap-3">
            <span className="text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.69 2 6 4.69 6 8v10c0 3.31 2.69 6 6 6s6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 8c0-1.96 1.56-3.5 3.5-3.5S15 8.04 15 10h-2c0-1.38-1.12-2.5-2.5-2.5S8 8.62 8 10h-2z" />
              </svg>
            </span>
            <p className="text-base  text-gray-600">Neck Style</p>
          </div>
          <p className="text-sm text-gray-800 font-medium">Round Neck</p>
        </div>

        {/* Review Modal */}
        <Dialog
          open={openReviewModal}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle className="flex items-center justify-between">
            Customer Reviews
            <IconButton onClick={handleCloseModal}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent className="space-y-4 font-roboto">
            {/* Example Review */}
            <div className="border-b border-gray-200 py-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 font-roboto">
                  Alice Johnson
                </p>
                <Rating
                  value={5}
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
                />
              </div>
              <p className="text-gray-600 mt-2">
                "Amazing product! The quality is great, and it fits perfectly.
                Highly recommend!"
              </p>
            </div>
            <div className="border-b border-gray-200 py-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800 font-roboto">
                  John Smith
                </p>
                <Rating
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
                    "& .MuiRating-iconEmpty": {
                      color: "#ddd",
                    },
                  }}
                />
              </div>
              <p className="text-gray-600 mt-2">
                "Good product, but could improve in packaging."
              </p>
            </div>

            {/* Submit a Review Form */}
            <h3 className="text-lg font-semibold mt-6">Write a Review</h3>
            <form className="space-y-4">
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Review"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                  <span className="text-gray-700">Rating:</span>
                  <Rating
                    size="small"
                    name="rating"
                    value={4}
                    precision={1}
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
                  />
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white hover:bg-gradient-to-l"
                >
                  Submit Review
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </Box>
    </div>
  );
};

export default ProductDetails;
