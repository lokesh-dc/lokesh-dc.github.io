import { Box, Text, Img } from "@chakra-ui/react"

export default function Profile () {
    let str = "<img>" 
    let str2 = "</img>"
    return (
        <Box  id="profile" pos="relative" w={{sm:"70%",base:"70%", md:"90%", lg:"100%"}} >
            <Img src={require("../Resources/profile.jpg")} 
            alt="Lokesh-choudhary-Profile.jpg" 
            w="75%" m="auto" />

                <Text fontSize="xl" color="#d6d6d6" pos="absolute" top="0" left="0"> {str} </Text>
                <Text fontSize="xl" color="#d6d6d6" pos="absolute" bottom="0" right="0">{str2}</Text>
        </Box>
    )
}