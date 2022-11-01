import { Box, Button, Text } from "@chakra-ui/react"


export default function Intro () {
    return (
            <Box p={{sm:0 , md:0, lg:"10px"}} w={{base:"70%", md:"100%", lg:"100%"}} >
                    <Text fontSize={{base:"2xl", sm:"3xl", md:"4xl",lg:"4xl"}} color="grey" letterSpacing="10px">HELLO</Text>
                    <Text id="name" fontSize={{base:"2xl", sm:"2xl", md:"4xl",lg:"5xl"}}> I'm <span>Lokesh Choudhary</span> </Text>
                    <Text fontSize={{base:"2xl", sm:"3xl", md:"4xl",lg:"3xl"}} color="red">Full Stack Web Developer</Text>
                    <Text fontSize={{base:"lg", sm:"xl", md:"2xl",lg:"2xl"}}>I build interactive websites that run across platforms and devices </Text>
                    <Text fontSize={{base:"md", sm:"lg", md:"xl",lg:"xl"}} color="grey">ofcourse there's so much more to me than just a few fancy titles <br /> Scroll down to know me</Text>
                    <a href={require("../Resources/Lokesh-Choudhary-Resume.pdf")} download="Lokesh-Choudhary-Resume">
                        <Button variant="outline" id="resume" _hover={{bg:"black", color:"white"}} letterSpacing={2}>RESUME</Button>
                    </a>
            </Box>
    )
}