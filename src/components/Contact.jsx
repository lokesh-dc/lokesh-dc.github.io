import { Flex, Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Contact() {
    return (
        <Grid pos="relative" id="contact-section" mb="100px">
            <Heading title={"CONTACT ME"} />
            <Grid  >
                <Text>Get in Touch</Text>
                <Text fontSize="2rem">JUST SAY HELLO!</Text>
                <Text letterSpacing="80px" pos="absolute" top={0} left={"20%"} id="background-text" zIndex={-1} fontSize={{base: "0rem", sm:"0rem", md:"8rem", lg:"20rem" }}> Hello </Text>
                <Grid w={{base:"100%", sm:"100%", md:"50%", lg:"50%"}} m={{base:"20px auto",sm:"50px auto",md:"75px auto", lg:"100px auto" }}>
                    <SocialMediaIcons />
                </Grid>

                <Grid templateColumns={{base:"1fr", sm:"1fr", md:"repeat(3,1fr)", lg:"repeat(3,1fr)"}} gap="10px" alignItems="center" justifyContent="space-evenly" id="contact-list" w="75%" m="auto">  
                <a href="mailto:lokesh.cdewanand@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={require("../Resources/contact/mail.png")} alt="mail-me" />
                    <Text>lokesh.cdewanand@gmail.com</Text>
                </a>
                <a href="tel:9172659994" target="_blank" rel="noopener noreferrer">
                    <img src={require("../Resources/contact/call.png")} alt="call-me" />
                    <Text>9172659994</Text>
                </a>
                <Flex>
                    <img src={require("../Resources/contact/pin.png")} alt="call-me" />
                    <Text>- Bhandara, Maharashtra</Text>
                </Flex>
                </Grid>
            </Grid>
        </Grid>
    )
}