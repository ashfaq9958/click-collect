import React from "react";
import { Skeleton, Box, Typography,Grid } from "@mui/material";

const FullPageSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f9fc", // Light background for contrast
        padding: "20px",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "1200px", width: "100%" }}>
        {/* Create multiple skeleton cards */}
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                padding: 2,
              }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height={140}
                sx={{ marginBottom: 1 }}
              />
              <Skeleton
                variant="text"
                width="80%"
                height={30}
                sx={{ marginBottom: 0.5 }}
              />
              <Skeleton
                variant="text"
                width="60%"
                height={20}
                sx={{ marginBottom: 0.5 }}
              />
              <Skeleton variant="text" width="40%" height={20} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FullPageSkeleton;
