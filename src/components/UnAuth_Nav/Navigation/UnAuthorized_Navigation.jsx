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
      <AppBar position="static" className="!bg-white shadow-none">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="justify-between gap-10">
            <Box className="flex items-center gap-2">
              {/* Show IconButton on mobile views only */}
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ display: { xs: "flex", md: "none" } }} // Show on xs and sm, hide on md and up
              >
                <MenuIcon />
              </IconButton>
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </Box>

            {/* Hide on small screens and show on larger screens */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="gap-6"
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="!text-black !text-[14px]"
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box className="flex items-center gap-4">
              <SearchBar />
              <Tooltip title="Your Cart">
                <IconButton>
                  <ShoppingCartIcon className="text-black" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ashfaq Ahmad" src={avatar} />
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
                        <Typography textAlign="center">{setting}</Typography>
                      </Link>
                    ) : (
                      <Typography textAlign="center">{setting}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Menu for mobile screens */}
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
                display: { xs: "block", md: "none" }, // Show on mobile screens, hide on md and up
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <main>
        <Outlet />
      </main> */}
    </>
  );
}

export default UnAuthorized_Navigation;
