import { Box } from "@mui/material"

const Footer = () => {

    return(
        <Box component="div" className="footer-container">
            <Box component="div" className="footer">
            <Box component="div" className="footer-row">
            <Box component="div" className="footer-col">
                <p className="footer-head">Company</p>
                <ul className="list-group">
                    <li className="list-item">
                        <a href="./">About</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Facilities</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Career</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Contact Us</a>
                    </li>

                    <li className="list-item">
                        <a href="./">Terms & Conditions</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Refund Policy</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Privacy Policy</a>
                    </li>
                </ul>
            </Box>
            <Box component="div" className="footer-col">
                <p className="footer-head">Activities</p>
                <ul className="list-group">
                    <li className="list-item">
                        <a href="./">Art Gallery</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Workshops</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Outdoor Activities</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Media Coverage</a>
                    </li>

                    <li className="list-item">
                        <a href="./">Art Events</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Exhibition</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Daily Activities</a>
                    </li>
                </ul>
            </Box>
            <Box component="div" className="footer-col">
                <p className="footer-head">Popular Course</p>
                <ul className="list-group">
                    <li className="list-item">
                        <a href="./">Diploma In Fine Arts</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Certificate Hobby Course</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Entrance Preparation</a>
                    </li>
                    <li className="list-item">
                        <a href="./">BFA</a>
                    </li>

                    <li className="list-item">
                        <a href="./">Animation Sketching</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Kids Diploma</a>
                    </li>
                </ul>
            </Box>
            <Box component="div" className="footer-col">
                <p className="footer-head">Our Locations</p>
                <ul className="list-group">
                    <li className="list-item">
                        <a href="./">Gurgaon (Dlf Phase - 4)</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Mumbai (Andheri West)</a>
                    </li>
                    <li className="list-item">
                        <a href="./">South Delhi (Kailash Colony)</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Contact Us</a>
                    </li>
                    <br/>
                    <p className="footer-head">International Branches</p>
                    <li className="list-item">
                        <a href="./">London</a>
                    </li>
                    <li className="list-item">
                        <a href="./">USA</a>
                    </li>
                    <li className="list-item">
                        <a href="./">Dubai, UAE</a>
                    </li>
                </ul>
            </Box>
            </Box>
            <Box sx={{marginTop:"20px"}} component="div" className="footer-row-last">
            <Box  component="div" className="footer-col">
                <p className="footer-head">NIFA is a unit of Nifaedutech Pvt Ltd.</p>
                <p className="footer-head">Connect with us</p>
                <p>
                    <a href="tel:9555112200">9555112200</a>
                    ,
                    <a href="tel:9810130552">9810130552</a>
                </p>
                <p>
                    <a href="mailto:admission@nifafinearts.com">admission@nifafinearts.com</a>
                </p>
                <ul className="social-list">
                    <li className="social-list-item">
                        <a href="https://www.facebook.com/nifafinearts">
                            <i class="fab fa-facebook-f" style={{color: "#3b5998"}}></i>
                        </a>
                    </li>
                    <li className="social-list-item">
                        <a href="https://twitter.com/artsnifa?lang=en">
                            <i class="fab fa-twitter" style={{color: "#1da1f2"}}></i>
                        </a>
                    </li>
                    <li className="social-list-item">
                        <a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed">
                            <i class="fab fa-instagram" style={{color: "#E1306C"}}></i>
                        </a>
                    </li>
                    <li className="social-list-item">
                        <a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw">
                            <i class="fab fa-youtube" style={{color: "#ff0000"}}></i>
                        </a>
                    </li>
                </ul>
            </Box>
            <Box sx={{marginTop: "15px"}} component="div" className="footer-col">
                <p style={{
                    textAlign: "right",
                    marginRight: "15px"
                    }} className="footer-head">Download The App</p>
                <Box style={{textAlign: "right"}} component="div" className="download">
            <a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr">
                <img src="https://www.nifafinearts.com/images/gplay.png" className="play-store-img"/>
            </a>
            <a href="https://apps.apple.com/us/app/apple-store/id1472483563">
                <img src="https://www.nifafinearts.com/images/appstore.png" className="play-store-img"/>
            </a>
            <p style={{
                    fontSize: "15px",
                    color: "rgba(0, 0, 0, 0.8)",
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "1rem"
            }}>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
        </Box>
            </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Footer;