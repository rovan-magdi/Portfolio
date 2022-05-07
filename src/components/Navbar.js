import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Menu,
  AppBar,
  Typography,
  Toolbar,
  MenuItem,
  IconButton,
} from "@mui/material";
import { theme } from "../theme/index";
import { MaterialUISwitch } from "./ModeSwitch";
import MenuIcon from "@mui/icons-material/Menu";
import image from "../assists/logo.png";
import DownloadIcon from "@mui/icons-material/Download";
import { ButtonShared } from "./ButtonShared";
import {HashLink as Link} from'react-router-hash-link'
import { BrowserRouter } from "react-router-dom";

const pages = [
  "Home",
  "About",
  "Resume",
  "Portfolio",
  "Contact",
  "blogs",
  
];

const Navbar = () => {
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
  const StyledNavbar = styled(AppBar)(({ theme }) => ({
    maxWidth: "1250px",
    margin: "auto",
    height: "80px",
    borderRadius: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "40px",
    right: "20px",
    left: "20px",
    boxShadow: "none",
    backgroundColor: `${theme.palette.secondary.light}`,
    color: `${theme.palette.secondary.main}`,
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    my: 2,
    color: "white",
    display: "block",
    fontWeight: "bolder",
    fontSize: "12px",
    "&:hover": {
      color: `${theme.palette.primary.main}`,
      background: 'none',
      textShadow: "none",
      margin: "0px",
    },
  }));
  const StyledImge = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    width: "130px",
    justifyContent: "space-around",
    fontWeight: "800",
  }));
  const StyledLink= styled(Link)(({ theme }) => ({
   color:`${theme.palette.secondary.main}`,
   textDecoration:"none",
   "&:hover":{
     color:`${theme.palette.primary.main}`,
   },
   "&:focued":{
    background:"none"

   }
  }));

  return (
    <BrowserRouter>
    <StyledNavbar>
      <Container>
        <Toolbar>
          <StyledImge>
            <img src={image} alt="logo" />{" "}
            <Box component="span">
              Joé <br />
              Wilson
            </Box>
          </StyledImge>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="flex-end"
          >
            {pages.map((page) => (
              <StyledButton key={page} onClick={handleCloseNavMenu}> 
               <StyledLink theme={theme} to={`#${page}`} smooth> {page}</StyledLink>
              </StyledButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                    sx={{ "&:hover": { color: "red", textShadow: "none" } }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ButtonShared
            theme={theme}
            sx={{ borderColor: "primary.main", color: "primary.main" }}
            endIcon={<DownloadIcon />}
          >
            Download CV
          </ButtonShared>
          {/* <MaterialUISwitch /> */}
        </Toolbar>
      </Container>
    </StyledNavbar>
    </BrowserRouter>
  );
};

export default Navbar;
