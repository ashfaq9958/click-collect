import React from "react";
import man from "../../../assets/Testimonials/man.png";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { Star } from "@mui/icons-material";

const Testimonials = () => {
  return (
    <div className="mt-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="w-[98%] mx-auto p-6 lg:p-12">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          // sx={{ fontWeight: 'bold', color: '#333', letterSpacing: '0.5px' }}
          className="text-3xl lg:text-4xl font-semibold text-center mb-6 text-gray-800"
        >
          What People Say
        </Typography>

        <hr className="w-48 h-1 mx-auto bg-gradient-to-r from-gray-800 to-gray-400 rounded mb-8" />

        {/* <Box
          component="hr"
          sx={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #007FFF, #0059B2)',
            borderRadius: '2px',
            margin: '16px auto 32px',
          }}
        /> */}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                position: 'relative',
                padding: 3,
                transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <Box
                component="img"
                src={man}
                alt="Testimonial"
                sx={{
                  height: 130,
                  width: 130,
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '-45px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
                  border: '3px solid #fff',
                }}
              />

              <CardContent sx={{ ml: '100px', textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}
                >
                  John Doe
                </Typography>
                <Typography variant="body2" sx={{ color: '#777', mb: 2 }}>
                  CEO, Example Corp.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#555', mb: 3, lineHeight: 1.6 }}
                >
                  "Working with this team has been an absolute pleasure. Their
                  professionalism, attention to detail, and commitment to
                  delivering high-quality results are unparalleled. Highly
                  recommended!"
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, color: '#FFD700' }}>
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fontSize="small" />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: '#007FFF',
                    color: '#fff',
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#0059B2',
                    },
                  }}
                >
                  Read my story
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Testimonials;
