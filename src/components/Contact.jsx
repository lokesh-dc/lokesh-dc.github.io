import { Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Contact() {
    return (
        <Grid pos="relative" id="contact-section">
            <Heading title={"CONTACT ME"} />
            <Grid  >
                <Text>Get in Touch</Text>
                <Text fontSize="2rem">JUST SAY HELLO!</Text>
                <Text letterSpacing="80px" pos="absolute" top={0} left={"20%"} id="background-text" zIndex={-1} fontSize={{base: "0rem", sm:"0rem", md:"8rem", lg:"20rem" }}> Hello </Text>
                <Grid w={{base:"100%", sm:"100%", md:"50%", lg:"50%"}} m={{base:"20px auto",sm:"50px auto",md:"75px auto", lg:"100px auto" }}>
                    <SocialMediaIcons />
                </Grid>
            </Grid>
        </Grid>
    )
}