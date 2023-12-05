import { Box } from "@mui/material";

const VideoGallery = () => {

    return(
        <Box component="div" className="video-gallery-container">
        <Box component="div" className="video-gallery-heading">
            <h1>Students Testimonial</h1>
        </Box>
        <Box component="div" className="row" sx={{marginTop: "50px"}}>
        <Box component="div" className="video-col">
            <Box component="div" className="video-item">
               <iframe className="video" src="https://www.youtube.com/embed/VrGcY2k5zuc" frameborder="0" allowfullscreen></iframe>
               </Box>
        </Box>
        <Box component="div" className="video-col">
            <Box component="div" className="video-item"> 
               <iframe className="video" src="https://www.youtube.com/embed/EnYCmNGoySc" frameborder="0" allowfullscreen></iframe>
               </Box>
        </Box>
        <Box component="div" className="video-col">
            <Box component="div" className="video-item">  
               <iframe className="video" src="https://www.youtube.com/embed/iX6KgBTH__E" frameborder="0" allowfullscreen></iframe>
               </Box>
        </Box>

        </Box>
        <Box component="div" className="row">
        <Box component="div" className="video-col">
            <Box component="div" className="video-item">  
               <iframe className="video" src="https://www.youtube.com/embed/hvjJv1zVl2k" frameborder="0" allowfullscreen></iframe>
               </Box>
        </Box>
        <Box component="div" className="video-col">
            <Box component="div" className="video-item">  
               <iframe className="video" src="https://www.youtube.com/embed/GfialCtEAYk" frameborder="0" allowfullscreen></iframe>
               </Box>
        </Box>
        <Box component="div" className="video-col">
            <Box component="div" className="video-item">
               <iframe className="video" src="https://www.youtube.com/embed/S5AUDt6999o" frameborder="0" allowfullscreen></iframe>
               </Box>
        </Box>

        </Box>
        </Box>
    )
}

export default VideoGallery;