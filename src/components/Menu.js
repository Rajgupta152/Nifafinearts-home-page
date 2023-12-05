import { Box, MenuItem, Select, FormControl } from "@mui/material";
import logo from "./images/nifa-new-logo.png";
import { useState } from "react";

const Menu = () => {
  const [pages, setPages] = useState("");

  const handleChange = (e) => {
    setPages(e.target.value);
  };

  return (
    <Box component="div" className="header-menu">
      <Box component="div" className="logo">
        <a href="./">
          <img src={logo} alt="logo" />
        </a>
      </Box>
      <Box component="div" className="nav">
        <a href="./">Home</a>
        <a href="./">About</a>
        <a href="./">Courses</a>
        <a href="./">Activities</a>
        <a href="./">Admission</a>
        <a href="./">Art Gallery</a>
        <a href="./">Franchise</a>
        <a href="./">Online Classes</a>
        <a href="./">Video</a>
        <a href="./">Pay Fee</a>
        <a href="./">Contact</a>
      </Box>
      <Box component="div" className="responsive-contact">
        <Box component="div" className="menu-contact">
          <Box component="div">
            <a href="mailto:admission@nifafinearts.com">
              <i class="fa-solid fa-envelope" style={{ color: "blue" }}></i>
              admission@nifafinearts.com
            </a>
          </Box>
          <Box
            component="div"
            sx={{
              marginTop: "10px",
            }}
          >
            <a href="tel:9555112200">
              <i class="fa-solid fa-phone" style={{ color: "blue" }}></i>
              +91-9555112200/9810130552
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        className="select-box"
      >
          <Select
            value={pages}
            onChange={handleChange}
            displayEmpty
            className="select"
            inputProps={{ "aria-label": "Without label" }}
            sx={{ backgroundColor: 'blue', color: '#fff', width: '100%' }}
          >
            <MenuItem value="">Home</MenuItem>
            <MenuItem value="About">About</MenuItem>
            <MenuItem value="Courses">Courses</MenuItem>
            <MenuItem value="Activities">Activities</MenuItem>
          </Select>
      </Box>
    </Box>
  );
};

export default Menu;
