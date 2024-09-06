import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "../../SearchBar/SearchBar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import logo from "../../../assets/bg_logo.png";
import avatar from "../../../assets/avatar_1.jpg";
import { Link } from "react-router-dom";

const pages = ["Men", "Women", "Kids", "Blog", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function UnAuthorized_Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" className="!bg-white shadow-md top-0 z-50">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between gap-4">
          {/* Logo and Menu Icon */}
          <Box className="flex items-center gap-4">
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
              className="text-black"
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo" className="md:h-14 h-12 -ml-3 md:ml-0" />

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "flex" } }} className="gap-8">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="!text-black !font-medium hover:!text-red-600"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right-side Icons and Search Bar */}
          <Box
            className="flex items-center gap-3"
            sx={{
              flexDirection: { xs: "row", md: "row" },
              width: "100%",
              justifyContent: { xs: "flex-end", md: "flex-end" },
            }}
          >
            <div className="md:ml-0 ml-10">
              <SearchBar
                sx={{
                  display: { xs: "none", md: "block" },
                }}
                className=""
              />
            </div>
            <Tooltip title="Wishlist">
              <IconButton>
                <FavoriteBorderOutlinedIcon className="text-black hover:text-red-600" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Your Cart">
              <IconButton>
                <ShoppingBagOutlinedIcon className="text-black hover:text-red-600" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Ashfaq Ahmad"
                  src={avatar}
                  className="border border-gray-300"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "Logout" ? (
                    <Link to="/signin">
                      <Typography
                        textAlign="center"
                        className="hover:text-red-600"
                      >
                        {setting}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography textAlign="center">{setting}</Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Navigation Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  className="text-black hover:text-red-600"
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default UnAuthorized_Navigation;
