import { Box } from "@mui/material";

const Header = () => {
    
    return(
        <Box component="div" className="header-top"
         sx={{
            marginTop: '0px',
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap"
        }}
         >
            <Box component="div" className="header-top-para">
                <p>Welcome to the National Institute of Fine Arts</p>
            </Box>
            <Box component="div" className="top-contact"
            sx={{
                width: "260px",
                display: "flex",
                justifyContent: "space-around"
            }}
            >
                <a href="tel:9555112200">
                <i class="fa-solid fa-phone" style={{color: "#fff"}}></i>
                9555112200 
                </a>

                <a href="tel:9555112200">
                <i class="fa-solid fa-phone" style={{color: "#fff"}}></i>
                9555112200 
                </a>
            </Box>
            <Box component="div" className="top-contact">
               <a href="mailto:admission@nifafinearts.com">
                <i class="fa-solid fa-envelope" style={{color: "#fff"}}></i>
                admission@nifafinearts.com 
                </a>
            </Box>
            <Box component="div" className="header-social"
             sx={{
                width: "100px",
                display: "flex",
                justifyContent: "space-around"
            }}
            >
               <a href="tel:9555112200">
                <i class="fa-brands fa-facebook-f" style={{color: "#fff"}}></i> 
                </a>
                <a href="tel:9555112200">
                <i class="fa-brands fa-twitter" style={{color: "#fff"}}></i> 
                </a>
                <a href="tel:9555112200">
                <i class="fa-brands fa-instagram" style={{color: "#fff"}}></i> 
                </a>
                <a href="tel:9555112200">
                <i class="fa-brands fa-youtube" style={{color: "#fff"}}></i> 
                </a>
            </Box>
        </Box>
    )
}

export default Header;