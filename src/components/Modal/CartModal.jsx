import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  Divider,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../redux/addToCart/addToCartSlice.js";

const CartModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  let totalCartPrice = cart.reduce((acc, ele) => acc + ele.price, 0);

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: { sm: 400 },
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
        <div className="flex justify-between items-center">
          {" "}
          {/* Fixed className */}
          <div className="font-medium sm:text-xl text-lg font-roboto">
            Your Shopping Cart
          </div>
          <Tooltip title="Close">
            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="meduim" />
            </IconButton>
          </Tooltip>
        </div>

        <Divider sx={{ mb: 1 }} />

        {/* Cart Items */}
        <List sx={{ flexGrow: 1, mt: 1 }}>
          {cart &&
            cart.length > 0 &&
            cart.map((item) => (
              <ListItem
                key={item.key}
                sx={{
                  mb: 2,
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
                }}
                secondaryAction={
                  <Tooltip title="Delete">
                    <IconButton
                      // size="small"
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch(removeToCart(item))}
                    >
                      <DeleteIcon sx={{ color: "#f44336" }} />
                    </IconButton>
                  </Tooltip>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.img}
                    alt={item.title}
                    sx={{ width: 64, height: 64, mr: 2, borderRadius: "8px" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={`₹${item.price}`}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: { sm: "14px" },
                    color: "#444",
                  }}
                  secondaryTypographyProps={{
                    color: "#888",
                    fontSize: "0.875rem",
                  }}
                  className="text-sm"
                />
              </ListItem>
            ))}
        </List>

        {/* <Divider sx={{ mt: 2 }} /> */}

        {/* Total Price and Checkout Button */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Button
            onClick={() => navigate("/cart-checkout")}
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundImage: "linear-gradient(90deg, #ff6f61, #ff4081)",
              color: "#fff",
              fontWeight: { sm: 500 },
              borderRadius: "5px",
              padding: { sm: "10px 20px" },
              width: "100%",
              textTransform: "none",
              boxShadow: "0px 4px 10px rgba(255, 105, 135, 0.3)",
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #ff4081, #ff6f61)",
              },
            }}
          >
            <p className="sm:text-base text-xs"> Proceed to Checkout</p>
            <p className="sm:text-base text-xs">₹ {totalCartPrice}/-</p>
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartModal;
