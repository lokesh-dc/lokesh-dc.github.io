import { Box, Text, Img } from "@chakra-ui/react"

export default function Profile () {
    let str = "<img>" 
    let str2 = "</img>"
    return (
        <Box display={{sm:"none", mg:"block", lg:"block"}} id="profile" pos="relative" >
            <Img  display={{base:"none", sm:"none", md:"block", lg:"block"}} src={require("../Resources/profile.jpg")} alt="Lokesh-choudhary-Profile.jpg" w="75%"   />
            <Text fontSize="xl" color="#d6d6d6" pos="absolute" top="0" left="0"> {str} </Text>
            <Text fontSize="xl" color="#d6d6d6" pos="absolute" bottom="0" right="0">{str2}</Text>
        </Box>
    )
}