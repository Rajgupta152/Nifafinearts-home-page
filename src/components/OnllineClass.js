import { Box, Button } from "@mui/material"

const OnlineClass = () => {

    return(
        <Box component="div" className="online-class-container">
            <Box component="div" className="online-class">
            <Box component="div" className="online-class-para">
                <h2>Online Classes</h2>
                <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.</p>
                <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
                <Button
         sx={{background: "linear-gradient( 90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)",
            border: "2px solid #fff",
            borderRadius: "30px",
            padding: "10px 20px",
            color: "#fff"
         }}>
        Read More
        </Button>
        <p>Download The App</p>
        <Box component="div" className="download">
            <a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr">
                <img src="https://www.nifafinearts.com/images/gplay.png" className="play-store-img"/>
            </a>
            <a href="https://apps.apple.com/us/app/apple-store/id1472483563">
                <img src="https://www.nifafinearts.com/images/appstore.png" className="play-store-img"/>
            </a>
        </Box>
            </Box>
            <Box component="div" className="online-class-video">
               <Box component="div" className="online-class-child">
               <iframe className="video" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0" allowfullscreen></iframe>
               </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default OnlineClass;