import { Grid, Text, Flex, Box, List, ListItem, ListIcon} from "@chakra-ui/react";
import {  MdCheckCircle } from 'react-icons/md'

export default function ProjectCard({details}) {
    return (
            <Grid gap="2px" pos="relative">
                <Text fontSize="2rem">{details.title} - Clone</Text>
                <Text>{details.desc}</Text>
                <Text>TECH STACK: </Text>
                <Flex className="tech" paddingLeft="15px" >
                    {
                        details.tech.map((t, index)=>(
                            <Box key={index} >{t} </Box>
                        ))
                    }
                </Flex>
                <Text> FEATURES : </Text>
                <List>
                    {
                        details.features.map((f,index)=>(
                            <ListItem key={index} paddingLeft="15px">
                                <ListIcon as={MdCheckCircle} color='black' />
                                {f}
                                </ListItem>
                        ))
                    }
                </List>

                <Box pos="absolute" top="0" right="0" color="green" fontWeight="bold" border="1px solid" p="2px 6px"> . LIVE</Box>


            </Grid>
    )
}