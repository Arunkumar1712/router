import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Data } from "./Alldata";
import { Route, Routes, Link } from "react-router-dom";
import { Full } from "./fullstack";
import { Datasc } from "./datasc";
import { Cyber } from "./cyber";
import { Career } from "./career";


function App() {
  return (
    <div className="App">
      <div className="contM" id="contM">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/ALL" element={<Data />} />
          <Route path="/FULLSTACK_DEVELOPMENT" element={<Full />} />
          <Route path="/DATA_SCIENCE" element={<Datasc />} />
          <Route path="/CYBER_SECURITY" element={<Cyber />} />
          <Route path="/CAREER" element={<Career />} />
          <Route path="/" element={<Data />} />
        </Routes>
        
      </div>
    </div>
  );
}

const pages = [
  "ALL",
  "FULLSTACK_DEVELOPMENT",
  "DATA_SCIENCE",
  "CYBER_SECURITY",
  "CAREER",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "white", flexGrow: 1 }}>
      <Container
        maxWidth="xl"
        className="app-bar-container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontWeight: "bold",
        }}
      >
        <Toolbar  disableGutters>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "black" }}
          />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Router
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}  >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
           
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
                // Inside ResponsiveAppBar component
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`} className="menu-item-link">
                    <Typography id="text" textAlign="center"
                    sx={{ color: "black", textDecoration: "none",fontWeight:"bold" }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",

            }}
          >
            Router
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },color:"black",textDecoration: "none" }}
            
          >
            {pages.map((page) => (
              <Button id="box"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
                component={Link}
                to={`/${page}`} 
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
