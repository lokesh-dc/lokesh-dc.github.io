import { Grid, Text } from "@chakra-ui/react"
import {Link} from "react-scroll";
export default function Navbar() {
    return (
        <Grid templateColumns={{base:"1fr",sm:"1fr", md:"1fr", lg:"0.2fr 0.5fr"}} 
            justifyContent="space-between" mt={{base:0, lg:"30px"}} p={3}
            gap={{base:"10px", sm:"10px"}}
            alignItems="center" 
            pos="sticky" top="0" bg="white" zIndex="100" 
        > 
            <Text id="logo">Lokesh-dc</Text>
            <Grid templateColumns="repeat(5,1fr)" id="navbar">
                <Link to="about-section" spy={true} smooth={true} offset={-80} duration={750}>.about()</Link>
                <Link to="tech-section" spy={true} smooth={true} offset={-60} duration={750}>.technologies()</Link>
                <Link to="skills-section" sy={true} smooth={true} offset={-60} duration={750}>.skills()</Link>
                <Link to="projects-section" spy={true} smooth={true} offset={-75} duration={750}>.projects()</Link>
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={750}>.contact()</Link>
            </Grid>
        </Grid>
    )
}