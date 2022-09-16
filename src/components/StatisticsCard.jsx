import { Box,Flex, Text} from "@chakra-ui/react";


export default function  StatisticsCard ({details}) {

    return (
        <Flex flexDirection="column"> 
            <Box> 
                <Text fontSize="2rem"> {details.hrs}+ </Text> 
            </Box> 
            <Text fontSize={{base:"0.9rem", sm:"1rem",md:"1.2rem", lg:"1.2rem"}}>{details.title} </Text>
        </Flex>
    )
}