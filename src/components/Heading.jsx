import { Box, Text } from "@chakra-ui/react";

export default function Heading({title}) {
    return (
        <Box className="heading" my={{base:"5px", sm:"5px", md:"10px", lg:"10px"}}>
            <Text fontSize={{base:"2rem", sm:"2rem", md:"3rem", lg:"3rem" }}  >{title}</Text>
            <Text fontSize={{base:"1.5rem", sm:"1.5rem", md:"2.5rem", lg:"2.5rem" }}>{title}</Text>
        </Box>
    )
}