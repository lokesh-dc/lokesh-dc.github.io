import { Flex, Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Contact() {
    return (
        <Grid pos="relative" id="contact-section" mb="100px">
            <Heading title={"CONTACT ME"} />
            <Grid w={{base:"70%", sm:"70%",md:"100%"}} ml={{base:"3%", sm:"3%", md:0, lg:0}} >
                <Text>Get in Touch</Text>
                <Text fontSize="2rem">JUST SAY HELLO!</Text>
                <Text letterSpacing="80px" pos="absolute" top={20} left={{md:"20%", lg:"15%"}} id="background-text" zIndex={-1} fontSize={{base: "0rem", sm:"0rem", md:"6rem", lg:"12rem" }}> Hello </Text>
                <Grid w={{base:"100%", sm:"100%", md:"50%", lg:"50%"}} m={{base:"20px auto",sm:"50px auto",md:"75px auto", lg:"100px auto" }}>
                    <SocialMediaIcons />
                </Grid>

                <Grid templateColumns={{base:"1fr", sm:"1fr", md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}} gap="10px"   id="contact-list">  
                <a href="mailto:lokesh.cdewanand@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={require("../Resources/contact/mail.png")} alt="mail-me" />
                    <Text>lokesh.cdewanand@gmail.com</Text>
                </a>
                <a href="tel:9172659994" >
                    <img src={require("../Resources/contact/call.png")} alt="call-me" />
                    <Text>9172659994</Text>
                </a>
                <Flex>
                    <img src={require("../Resources/contact/pin.png")} alt="Hometown" />
                    <Text>Bhandara, Maharashtra</Text>
                </Flex>
                </Grid>
            </Grid>
        </Grid>
    )
}