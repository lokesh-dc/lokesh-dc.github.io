import { Grid, Text, Flex, Box, List, ListItem} from "@chakra-ui/react";

export default function ProjectCard({details}) {
    return (
            <Grid gap="2px" pos="relative">
                <Text fontSize={{base:"2rem", sm:"2rem", md:"1rem", lg:"1rem" }} fontWeight="bold">{details.title} - Clone</Text>
                <Text fontSize={{base:"1rem", sm:"1rem", md:"0.8rem", lg:"0.8rem" }}>{details.desc}</Text>
                {/* <Text> FEATURES : </Text>
                <List>
                    {
                        details.features.map((f,index)=>(
                            <ListItem key={index} paddingLeft="15px">
                                 - {f}
                                </ListItem>
                        ))
                    }
                </List> */}
                <Text>TECH STACK: </Text>
                <Flex className="tech" >
                    {
                        details.tech.map((t, index)=>(
                            <Box key={index} >{t} </Box>
                        ))
                    }
                </Flex>
                

                <Box pos="absolute" top="0" right="0" color="green" fontWeight="bold"  p="2px 6px"> LIVE</Box>


            </Grid>
    )
}