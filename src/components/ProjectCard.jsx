import { Grid, Text, Flex, Box,} from "@chakra-ui/react";

export default function ProjectCard({details}) {
    return (
            <Grid gap="2px" pos="relative">
                <Text fontSize="1rem" fontWeight="bold">{details.title} - Clone</Text>
                <Text fontSize="0.8rem">{details.desc}</Text>
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