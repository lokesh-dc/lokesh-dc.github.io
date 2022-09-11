import { Box, Grid, Img, Text } from "@chakra-ui/react"
import SocialMediaIcons from "./SocialMediaIcons"
export default function About() {
    return (
        <>
            <Grid templateColumns={{sm:"1fr",md:"1fr", lg:"2fr 1fr"}} p={10} mt="20px"  textAlign="left" justifyContent="center" alignItems="center">
                <Box p={{sm:0 , md:0, lg:20}} textAlign="justify">
                    <Text fontSize="4xl">HELLO</Text>
                    <Text fontSize="7xl">I'm <b>Lokesh Choudhary</b></Text>
                    <Text fontSize="5xl" color="red">Web Developer</Text>
                    <Text fontSize="2xl">I build interactive websites that run across platforms AND devices </Text>
                    <Text fontSize="xl" color="grey">ofcourse there's so much more to me than just a few fancy titles <br /> Scroll down to know me</Text>
                </Box>
                <Img src={require("../Resources/profile.jpg")} alt="Lokesh-choudhary-Profile.jpg" w="75%"  />
            </Grid>
            <Grid justifyContent="center" templateColumns= {{sm:"1fr", md:"1fr",lg:"1fr 1fr 1fr"}} gap={5} px={40}>
                <SocialMediaIcons />
                <Grid justifyContent="center">
                    <Text textAlign="center" fontSize="15px" letterSpacing="2px">SCROLL</Text>
                    <Img src="https://cdn-icons-png.flaticon.com/512/2413/2413298.png" id="arrow" alt="slide-down" width="20px"  />
                </Grid>
            </Grid>
        </>
    )
}