import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "../App.css";
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#ffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#000000",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            HEALTH BUDDY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              <MenuItem>
                <Link
                  to="header"
                  spy={true}
                  offset={-180}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography className="links" textAlign="center">
                    Home
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="doctor"
                  spy={true}
                  offset={-180}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textAlign="center">Doctors</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="reviews"
                  spy={true}
                  offset={-180}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textAlign="center">Review</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="blog"
                  spy={true}
                  offset={-180}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography textAlign="center">Blog</Typography>
                </Link>
              </MenuItem>
              {/* <MenuItem>
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography className="links" textAlign="center">
                    Admin
                  </Typography>
                </Link>
              </MenuItem> */}
              <MenuItem href="/trending">
                <Link className="navButton" to="/" style={{ fontSize: "15px" }}>
                  +91 9876543212 <LocalPhoneIcon />
                </Link>
              </MenuItem>
              <MenuItem href="/trending">
                <Link to="appointment" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ my: 2, display: "block" }}
                    variant="contained"
                    color="success"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            Health Buddy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              to="header"
              spy={true}
              offset={-180}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Home
              </Button>
            </Link>
            <Link
              to="carousel"
              spy={true}
              offset={-180}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Doctors
              </Button>
            </Link>
            <Link
              to="reviews"
              spy={true}
              offset={-180}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Reviews
              </Button>
            </Link>
            <Link
              to="blog"
              spy={true}
              offset={-180}
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Blog
              </Button>
            </Link>
            {/* <Link to="/admin" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Admin
              </Button>
            </Link> */}
            <a
              className="navButton"
              href="tel:+91 9876543212"
              style={{
                fontSize: "20px",
                marginTop: "15px",
                textDecoration: "none",
              }}
            >
              +91 9876543212 <LocalPhoneIcon />
            </a>
            <Link
              to="appointment"
              spy={true}
              offset={-150}
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{ my: 2, display: "block" }}
                variant="contained"
                color="success"
              >
                Book Appointment
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
