import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import logo from "../../../assets/bg_logo.png";
import avatar from "../../../assets/avatar_1.jpg";
import { Link, useNavigate, NavLink } from "react-router-dom";
import SearchModal from "../../Modal/SearchModal";
import CartModal from "../../Modal/CartModal";

const pages = [
  {
    name: "Men",
    link: "/mens-category",
  },
  {
    name: "Women",
    link: "/womens-category",
  },
  {
    name: "Kids",
    link: "/kids-category",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about-us",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function UnAuthorized_Navigation() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalDrawer, setModalDrawer] = useState(false);

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

  const handleLogout = () => {
    if (localStorage.getItem("userExist")) {
      localStorage.removeItem("userExist");
      navigate("/signin");
    }
  };

  return (
    <>
      <CartModal open={modalDrawer} handleClose={() => setModalDrawer(false)} />
      <AppBar position="sticky" className="!bg-white shadow-lg top-0 z-50">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="flex justify-between items-center">
            {/* Logo and Menu Icon */}
            <Box className="flex items-center md:gap-6 ">
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ display: { xs: "flex", md: "none" } }}
                className="text-black"
              >
                <MenuIcon />
              </IconButton>
              <img
                src={logo}
                alt="Logo"
                className="md:h-14 h-12 cursor-pointer"
                onClick={() => navigate("/dashboard")}
              />
              {/* Desktop Navigation Links */}
              <Box
                sx={{ display: { xs: "none", md: "flex" } }}
                className="gap-6"
              >
                {pages.map((page) => (
                  <Link to={page.link} key={page.name}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      className="!text-black !font-medium hover:!text-red-600 transition-all duration-300 font-roboto"
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Right-side Icons and Search Bar */}
            <Box className="flex items-center md:gap-6 gap-3">
              {/* Search Modal && Icon */}
              <SearchModal open={open} handleClose={() => setOpen(false)} />
              <Tooltip title="Search">
                <IconButton onClick={() => setOpen(true)}>
                  <SearchIcon className="text-black hover:text-red-600 transition-all duration-300" />
                </IconButton>
              </Tooltip>

              {/* Wishlist and Cart Badges */}
              <Box display="flex" gap={2} alignItems="center">
                <Badge
                  badgeContent={3}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.65rem",
                      height: "18px",
                      minWidth: "18px",
                      padding: "0 4px",
                      border: "2px solid white",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Tooltip title="Wishlist">
                    <IconButton>
                      <FavoriteBorderOutlinedIcon className="text-black hover:text-red-600 transition-all duration-300" />
                    </IconButton>
                  </Tooltip>
                </Badge>

                <Badge
                  badgeContent={2}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.65rem",
                      height: "18px",
                      minWidth: "18px",
                      padding: "0 4px",
                      border: "2px solid white",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Tooltip title="Your Cart">
                    <IconButton onClick={() => setModalDrawer(true)}>
                      <ShoppingBagOutlinedIcon className="text-black hover:text-red-600 transition-all duration-300" />
                    </IconButton>
                  </Tooltip>
                </Badge>
              </Box>

              {/* User Avatar and Settings Menu */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Ashfaq Ahmad"
                    src={avatar}
                    className="border border-gray-300 shadow-md"
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
                      <div onClick={handleLogout}>
                        <Typography
                          textAlign="center"
                          className="hover:text-red-600 transition-all duration-300"
                        >
                          {setting}
                        </Typography>
                      </div>
                    ) : (
                      <Typography
                        textAlign="center"
                        className="hover:text-red-600 transition-all duration-300"
                      >
                        {setting}
                      </Typography>
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography
                      textAlign="center"
                      className="text-black hover:text-red-600 transition-all duration-300"
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default UnAuthorized_Navigation;
