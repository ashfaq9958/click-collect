import React from "react";
import man from "../../../assets/Testimonials/man.png";
import girl1 from "../../../assets/Testimonials/girl_1.png";
import girl2 from "../../../assets/Testimonials/girld_2.png";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import { Star } from "@mui/icons-material";

const Testimonials = () => {
  const test = [
    {
      author: "John Doe",
      occup: "CEO, Example Corp.",
      img: man,
      rating: 5,
      desc: '"Working with this team has been an absolute pleasure. Their professionalism, attention to detail, and commitment to delivering high-quality results are unparalleled. Highly recommended!"',
    },
    {
      author: "Amelia Scarlett",
      occup: "Designer, Example Corp.",
      img: girl1,
      rating: 5,
      desc: '"Working with this team has been an absolute pleasure. Their professionalism, attention to detail, and commitment to delivering high-quality results are unparalleled. Highly recommended!"',
    },
    {
      author: "Emma Charlotte",
      occup: "CEO, Example Corp.",
      img: girl2,
      rating: 5,
      desc: '"Working with this team has been an absolute pleasure. Their professionalism, attention to detail, and commitment to delivering high-quality results are unparalleled. Highly recommended!"',
    },
    // {
    //   author: "John Doe",
    //   occup: "CEO, Example Corp.",
    //   img: girl2,
    //   rating: 5,
    //   desc: '"Working with this team has been an absolute pleasure. Their professionalism, attention to detail, and commitment to delivering high-quality results are unparalleled. Highly recommended!"',
    // },
  ];
  return (
    <Box className="mt-8 bg-gray-50">
      <Box className="w-[98%] mx-auto p-6 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-2 text-gray-800 font-roboto">
        Customer Testimonials
        </h1>
        <hr className="w-52 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-400 rounded mb-8" />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {test.map((item, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 2px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                position: "relative",
                padding: "40px 20px", // Reduced padding for a more concise height
                transition:
                  "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Avatar
                src={item.img}
                alt="Testimonial"
                sx={{
                  height: 75, // Reduced avatar size
                  width: 75, // Reduced avatar size
                  // borderRadius: "50%",
                  position: "absolute",
                  left: "50%",
                  top: "20px",
                  transform: "translateX(-50%)",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.11)",
                  border: "4px solid white",
                }}
              />

              <CardContent className="flex flex-col justify-center mt-10">
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    mb: 1,
                    mt: 1,
                    textAlign: "center",
                    fontSize: "1rem", // Reduced font size
                  }}
                >
                  {item.author}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#777", mb: 0.5, textAlign: "center" }}
                >
                  {item.occup}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 0.5,
                    color: "#FFD700",
                    mb: 2,
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fontSize="small" color="warning" />
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    mb: 2, // Reduced margin bottom
                    lineHeight: 1.4, // Reduced line height for more concise text
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  {item.desc}
                </Typography>
                <Box className="flex justify-center">
                  <Button
                    variant="contained"
                    sx={{
                      // backgroundColor: "red",
                      color: "#fff",
                      textTransform: "none",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "red",
                      },
                    }}
                    className="!bg-gradient-to-r from-orange-400 to-orange-600"
                  >
                    Read my story
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
