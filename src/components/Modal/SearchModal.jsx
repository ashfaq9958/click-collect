import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "../SearchBar/SearchBar";

const SearchModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 500 }, 
    bgcolor: "#fff",
    border: "none",
    boxShadow: 3, 
    p: 4,
    borderRadius: 2, 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backdropFilter: 'blur(4px)' }}
    >
      <Box sx={style}>
        <Box sx={{ position: "absolute", top: 10, right: 10 }}>
          <IconButton onClick={handleClose} color="primary">
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "600", mb: 2, color: "#333", textAlign:'right' }}
        >
          Search
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
        >
         Use the search bar below to find what you're looking for.
        </Typography>
        <SearchBar
          sx={{
            width: "100%",
            maxWidth: 400,
            mb: 2,
            borderRadius: 1, 
            boxShadow: 1, 
            bgcolor: "#f9f9f9", 
          }}
        />
      </Box>
    </Modal>
  );
};

export default SearchModal;
