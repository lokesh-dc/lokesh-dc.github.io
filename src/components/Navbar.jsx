import { Button, Grid, Text } from "@chakra-ui/react"
import {Link} from "react-scroll";
export default function Navbar() {
    return (
        <Grid 
            templateColumns={{base:"1fr",sm:"1fr", md:"1fr", lg:"0.2fr 0.5fr 0.2fr"}} 
            justifyContent="space-between" mt={{base:0, lg:"30px"}} p={3}
            gap={{base:"10px", sm:"10px"}}
            alignItems="center" 
            pos="sticky" top="0" bg="white" zIndex="100" 
        > 
            <Text id="logo">Lokesh-dc</Text>
            <Grid 
            templateColumns={{base:"1fr", sm:"1fr 1fr 1fr", md:"repeat(5,1fr)",lg:"repeat(5,1fr)"}} 
            rowGap={5} 
            id="navbar"
            display={{base:"none", sm:"none", md:"grid", lg:"grid"}}
            >
                <Link to="about-section" spy={true} smooth={true} offset={-80} duration={50}>.about()</Link>
                <Link to="tech-section" spy={true} smooth={true} offset={-80} duration={50}>.technologies()</Link>
                <Link to="skills-section" spy={true} smooth={true} offset={-80} duration={50}>.skills()</Link>
                <Link to="projects-section" spy={true} smooth={true} offset={-90} duration={50}>.projects()</Link>
                <Link to="contact-section" spy={true} smooth={true} offset={-70} duration={50}>.contact()</Link>
            </Grid>

            <a href={require("../Resources/Lokesh-Choudhary-Resume.pdf")} download="Lokesh-Choudhary-Resume">
                <Button  display={{base:"none", sm:"none", lg:"block"}} variant="outline" id="resume" _hover={{bg:"black", color:"white"}} letterSpacing={1}>RESUME</Button>
            </a>
        </Grid>
    )
}