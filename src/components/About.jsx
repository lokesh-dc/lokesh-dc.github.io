import { Grid, Img } from "@chakra-ui/react"
import { Link } from "react-scroll"
import Intro from "./Intro"
import Profile from "./Profile"
import SocialMediaIcons from "./SocialMediaIcons"
export default function About() {
    return (
        <Grid id="about-section">
            <Grid templateColumns={{base:"1fr",sm:"1fr",md:"1fr", lg:"2fr 1fr"}} 
                p={{base:"10px",sm:"10px", md:5,lg:10}} 
                gap={{base:"10px", sm:"20px"}} mt="20px"  
                textAlign="left" 
                justifyContent="center" 
                alignItems="center"
            >
                <Intro />
                <Profile />
            </Grid>
            <Grid justifyContent="space-evenly" templateColumns= {{base:"1fr", sm:"1fr", md:"1fr",lg:"1fr 1fr 1fr"}} gap={5}  px={40} my={{base:0,sm:10,md:10, lg:10}}>
                <SocialMediaIcons />
                <Grid justifyContent="center" cursor="pointer">
                    <Link to="tech-section" spy={true} smooth={true} offset={-90} duration={750} fontSize="15px" letterSpacing="2px">SCROLL</Link>
                    <Img src="https://cdn-icons-png.flaticon.com/512/2413/2413298.png" id="arrow" alt="slide-down" width="20px"  />
                </Grid>
            </Grid>
        </Grid>
    )
}