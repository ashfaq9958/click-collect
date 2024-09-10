import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "../SearchBar/SearchBar";
import { Button } from "@mui/material";

const SearchModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 500 },
    bgcolor: "#ffffff",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
    p: 4,
    borderRadius: "12px",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backdropFilter: "blur(6px)" }}
    >
      <Box sx={style}>
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <IconButton onClick={handleClose} color="inherit" size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "600", mb: 1, color: "#333" }}
        >
          Search
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mb: 3, color: "#666", fontSize: "14px" }}
        >
          Find what you need using the search feature below.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <SearchBar
            sx={{
              flexGrow: 1,
              borderRadius: "10px",
              boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#f1f1f1",
              px: 2,
              border: "1px solid #ddd",
              width: "800px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff6f61, #ff4081)",
              color: "#fff",
              fontWeight: 500,
              fontSize: "1rem",
              px: 4,
              width: "100%",
              textTransform: "none",
              boxShadow: "0px 4px 10px rgba(255, 105, 135, 0.3)",
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #ff4081, #ff6f61)",
              },
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
