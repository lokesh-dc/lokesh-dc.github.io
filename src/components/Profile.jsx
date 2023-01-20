import { Box, Text, Img } from "@chakra-ui/react"

export default function Profile () {
    let str = "<Profile>" 
    let str2 = "</Profile>"
    return (
        <Box  id="profile" pos="relative" boxShadow = "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;" >
            <Img src={require("../Resources/profile.jpg")} 
            alt="Lokesh-choudhary-Profile.jpg" 
            w="75%" m="auto" 
            borderRadius={"50%"} />

                <Text  className="logo" fontSize="xl" color="#d6d6d6" pos="absolute" top="0" left="0"> {str} </Text>
                <Text  className="logo" fontSize="xl" color="#d6d6d6" pos="absolute" bottom="0" right="0">{str2}</Text>
        </Box>
    )
}
