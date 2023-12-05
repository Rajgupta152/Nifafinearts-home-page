import { Box, Button } from "@mui/material"

const Welcome = () => {
    return(
        <Box component="div" className="welcome-container">
        <Box component="div" className="welcome-heading">
            <h1>Welcome To National Institute of Fine Arts</h1>
        </Box>
        <p>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>
        <p>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.</p>
        <p style={{color: "#000"}}>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</p>
        <Button
         sx={{background: "linear-gradient( 90deg, rgba(177, 30, 111, 1) 0%, rgba(74, 14, 192, 1) 100%)",
            border: "2px solid #fff",
            borderRadius: "30px",
            padding: "10px 20px",
            color: "#fff"
         }}>
        Read More
        </Button>
    </Box>
    )
}

export default Welcome;