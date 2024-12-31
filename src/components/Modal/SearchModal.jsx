import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField } from "@mui/material";
import img_1 from "../../assets/red.png";
import img_2 from "../../assets/fea_1.png";
import img_3 from "../../assets/winter.png";
import img_4 from "../../assets/denim2.png";

const SearchModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  let productData = [
    {
      key: 1,
      img: img_1,
      title: "Quilted Hooded Jacket",
    },
    {
      key: 2,
      img: img_2,
      title: "Exclusive Nike T-Shirt",
    },
    {
      key: 3,
      img: img_3,
      title: "Stylish Winter Apparel",
    },
    {
      key: 4,
      img: img_4,
      title: "Classic Denim Jacket",
    },
  ];
  const filteredData = productData.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "500px" },
    bgcolor: "#ffffff",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.12)",
    p: 4,
    borderRadius: "16px",
    outline: "none",
    overflowY: "auto",
  };

  const close = () => {
    handleClose();
    setQuery("");
  };

  const handleNavigate = (id) => {
    navigate(`/product-details/${id}`);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={close}
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
          variant="h6"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "500", mb: 1, color: "#333" }}
        >
          Search for Products
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mb: 3, color: "#666", fontSize: "14px" }}
        >
          Find the best products by typing below.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            value={query}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              },
              "& .MuiInputBase-input": {
                padding: "12px 16px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundImage: "linear-gradient(90deg, #ff6f61, #ff4081)",
              color: "#fff",
              fontWeight: 500,
              fontSize: "1.1rem",
              px: 3,
              textTransform: "none",
              borderRadius: "12px",
              // boxShadow: "0px 4px 10px rgba(76, 175, 80, 0.4)",
              "&:hover": {
                backgroundImage: "linear-gradient(90deg, #ff4081, #ff6f61)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => {
              console.log("Search button clicked");
            }}
          >
            Search
          </Button>
        </Box>

        {/* Show data only when there's a query */}
        <Box>
          {query && filteredData.length > 0 ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: 2,
                marginTop: 3,
                justifyItems: "center",
              }}
            >
              {filteredData.map((item) => (
                <>
                  <Box
                    key={item.key}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      cursor: "pointer",
                      padding: "16px",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                    onClick={() => handleNavigate(item.key)}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid #ccc",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        color: "#333",
                        textAlign: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </>
              ))}
            </Box>
          ) : (
            query && (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#999",
                  fontSize: "0.95rem",
                  mt: 2,
                }}
              >
                No products found.
              </Typography>
            )
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;
