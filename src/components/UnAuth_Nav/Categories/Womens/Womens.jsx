import React from 'react'
import comingsoon from "../../../../assets/coming soon/coming_1.jpg";
import { Typography, Box } from "@mui/material";

const Womens = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-8">
    <Box className="text-center mb-6">
      <Typography variant="h3" className="text-[#FF5E38] font-semibold mb-4">
      Coming Soon: Women's Products
      </Typography>
      <Typography variant="body1" className="text-gray-700">
        We're working on this page, stay tuned!
      </Typography>
    </Box>
    <Box className="flex justify-center">
      <img
        src={comingsoon}
        alt="Coming Soon"
        className="h-[300px] w-auto md:h-[400px] object-cover rounded-lg shadow-md border border-gray-200"
      />
    </Box>
  </div>
  )
}

export default Womens