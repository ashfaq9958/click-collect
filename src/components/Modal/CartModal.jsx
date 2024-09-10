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
      image:
        "https://img.freepik.com/premium-photo/shoe-that-has-nike-logo-it_1313274-10357.jpg?w=740",
    },
  ];

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: 420,
          p: 2,
          backgroundColor: "#fff",
          backgroundImage: "linear-gradient(135deg, #f5f7fa, #e2e2e2)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
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
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
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
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff6f61, #ff4081)",
              color: "#fff",
              fontWeight: 500,
              fontSize: "1rem",
              borderRadius: "5px",
              padding: "10px 20px",
              width: "100%",
              textTransform: "none",
              boxShadow: "0px 4px 10px rgba(255, 105, 135, 0.3)",
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #ff4081, #ff6f61)",
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
