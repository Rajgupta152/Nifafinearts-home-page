import { Box } from "@mui/material"

const Markque = () => {

    return(
        <Box component="div" className="marquee-container">
            <Box component="div" className="marquee-heading">
                <h3>Nifa Updates::</h3>
            </Box>
           <Box component="div" className="marquee">
           <marquee behavior="scroll" direction="left" scrollamount="3" scrolldelay="1" onmouseover="this.stop()" onmouseout="this.start()">
                <p>All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please download the NIFA app from our online classes page to register for a complimentary trial class.</p>
            </marquee>
           </Box>
        </Box>
    )
}

export default Markque;