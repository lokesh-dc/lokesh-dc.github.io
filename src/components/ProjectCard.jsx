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
                <Text fontSize="0.8rem">TECH STACK: </Text>
                <Flex className="tech" >
                    {
                        details.tech.map((t, index)=>(
                            <Box key={index} >{t} </Box>
                        ))
                    }
                </Flex>
            </Grid>
    )
}