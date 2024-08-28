import * as React from "react";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../../assets/bg_logo.png";
import avatar from "../../../assets/avatar_1.jpg";
import { Link } from "react-router-dom";

const pages = ["Discovery", "Products", "About Us", "Blog"];
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
    <>
      <AppBar position="static" className="!bg-white shadow-md">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="justify-between gap-6">
            <Box className="flex items-center gap-3">
              {/* Logo and Menu Icon */}
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ display: { xs: "flex", md: "none" } }}
                className="text-black"
              >
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="gap-8"
            >
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

            {/* Right-side Icons */}
            <Box className="flex items-center gap-5">
              <SearchBar />
              <Tooltip title="Your Cart">
                <IconButton>
                  <ShoppingCartIcon className="text-black hover:text-red-600" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ashfaq Ahmad" src={avatar} className="border border-gray-300" />
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
                        <Typography textAlign="center" className="hover:text-red-600">
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
                  <Typography textAlign="center" className="text-black hover:text-red-600">
                    {page}
                  </Typography>
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