import { Box, Text } from "@chakra-ui/react";

export default function Heading({title}) {
    return (
        <Box className="heading" mt="150px">
            <Text >{title}</Text>
            <Text >{title}</Text>
        </Box>
    )
}