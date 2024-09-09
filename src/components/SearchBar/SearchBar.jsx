import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/material";

const SearchBar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    border: "1px solid #ddd", // Subtle border color for a clean look
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "28ch",
        "&:focus": {
          width: "28ch",
        },
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#757575", // Set your desired placeholder color here
      opacity: 1, // Ensure the opacity is fully visible
    },
  }));

  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon className="text-gray-600" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
};

export default SearchBar;