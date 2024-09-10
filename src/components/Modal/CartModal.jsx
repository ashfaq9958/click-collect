import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  Typography,
  Box,
  Divider,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartModal = ({ open, handleClose }) => {
  const items = [
    {
      id: 1,
      name: "Puma Hoodie",
      price: "$20.00",
      image:
        "https://img.freepik.com/free-psd/red-green-hoodie-mockup_1409-3752.jpg?t=st=1725996566~exp=1726000166~hmac=ede54de21f2acdb596bab75c3b4f4a861c1537590b88c179a6b653ed59cace3f&w=740",
    },
    {
      id: 2,
      name: "Nike Shoes",
      price: "$30.00",
      image: "https://img.freepik.com/premium-photo/shoe-that-has-nike-logo-it_1313274-10357.jpg?w=740",
    },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 420, // Adjusted width for better spacing
          p: 3,
          backgroundColor: "#fff", // Keep the background clean
          backgroundImage: "linear-gradient(135deg, #f5f7fa, #e2e2e2)", // Subtle gradient background
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for premium feel
        }}
      >
        {/* Header */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#333" }}>
          Your Shopping Cart
        </Typography>
        <Divider sx={{ mb: 1 }} />

        {/* Cart Items */}
        <List sx={{ flexGrow: 1, mt: 1 }}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                mb: 2,
                borderRadius: "8px", // Rounded edges for items
                backgroundColor: "#f9f9f9", // Slight background for the product card
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)", // Soft shadow for depth
              }}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon sx={{ color: "#f44336" }} />{" "}
                  {/* Red delete button */}
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={item.image}
                  alt={item.name}
                  sx={{ width: 64, height: 64, mr: 2, borderRadius: "8px" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={item.price}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#444",
                }}
                secondaryTypographyProps={{
                  color: "#888",
                  fontSize: "0.875rem",
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mt: 2 }} />

        {/* Total Price and Checkout Button */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 1, color: "#333" }}
          >
            Total: $50.00
          </Typography>
          {/* <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff6f61, #ff4081)", // Gradient button
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "50px", // Rounded button for premium look
              padding: "12px 24px",
              width: "100%",
              mt: 2,
              boxShadow: "0px 4px 10px rgba(255, 105, 135, 0.3)", // Button shadow for 3D effect
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #ff4081, #ff6f61)",
              },
            }}
          >
            Proceed to Checkout
          </Button> */}

          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff6f61, #ff4081)", // Flat, crisp blue color
              color: "#fff",
              fontWeight: 500,
              fontSize: "1rem",
              borderRadius: "8px", // Clean, subtle rounding
              padding: "10px 20px",
              width: "100%",
              textTransform: "none", // Keep button text casing natural
              boxShadow: "0px 4px 10px rgba(255, 105, 135, 0.3)", // Removing shadows for a crisp look
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #ff4081, #ff6f61)", // Simple hover effect
              },
            }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartModal;
