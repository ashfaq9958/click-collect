import React from "react";
import man from "../../../assets/Testimonials/man.png"
import wallpaper from "../../../assets/wallpaper/wallpaper.jpg"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from "@mui/material";
import { Star } from "@mui/icons-material";

const Testimonials = () => {
  return (
    <div className="mt-8 bg-gray-50">
      <div className="w-[98%] mx-auto p-6 lg:p-12">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-6 text-gray-800">
          What People Say
        </h1>

        <hr className="w-48 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-400 rounded mb-8" />
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {/* <Card /> */}
            <Card className="w-full md:w-96 bg-white rounded-lg shadow-lg">
              <CardMedia
                component="img"
                height="100"
                image={wallpaper}
                alt="Testimonial Background"
                className="rounded-t-lg"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar
                    alt="John Doe"
                    src={man}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <Typography
                      variant="h6"
                      className="font-semibold text-gray-800"
                    >
                      John Doe
                    </Typography>
                    <Typography variant="body2" className="text-gray-500">
                      CEO, Example Corp.
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="body2"
                  className="text-gray-700 mb-4 leading-relaxed"
                >
                  "Working with this team has been an absolute pleasure. Their
                  professionalism, attention to detail, and commitment to
                  delivering high-quality results are unparalleled. Highly
                  recommended!"
                </Typography>
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fontSize="small" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
