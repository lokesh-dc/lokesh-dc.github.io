import { Box, Grid, Img, Text } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Grid templateColumns={{sm:"1fr" ,lg:"0.1fr 0.5fr"}} justifyContent="space-between" mt="30px" p={3} pl="30" alignItems="center"> 
            <Text fontSize="xl" fontWeight="bold">LC</Text>
            <Grid templateColumns={{sm:"1fr" ,lg:"repeat(3,1fr)"}}>
                <Text>.about()</Text>
                <Text>.contact()</Text>
                <Text>.skills()</Text>
            </Grid>
        </Grid>
    )
}