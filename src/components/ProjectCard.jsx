import { Grid, Text, Flex, Box, List, ListItem, ListIcon, Button} from "@chakra-ui/react";
import {  MdCheckCircle } from 'react-icons/md'

export default function ProjectCard({details}) {
    return (
        <Grid templateColumns={{base:"1fr",sm:"1fr",md:"1fr", lg:"1fr" }}>
            <img src={require("../Resources/Projects/monsterIndia.png")} alt="" />
            <Grid>
                <Text fontSize="2rem">{details.title} - Clone</Text>
                <Text>{details.desc}</Text>
                <Text>TECH STACK: </Text>
                <Flex className="tech">
                    {
                        details.tech.map((t, index)=>(
                            <Box key={index}>{t} </Box>
                        ))
                    }
                </Flex>
                <Text> FEATURES : </Text>
                <List>
                    {
                        details.features.map((f,index)=>(
                            <ListItem key={index}>
                                <ListIcon as={MdCheckCircle} color='black' />
                                {f}
                                </ListItem>
                        ))
                    }
                </List>
                <Grid templateColumns="1fr 1fr" gap={10} m="10px">
                    <Button colorScheme='blue' >LIVE PROJECT</Button>
                    <Button variant="outline"  colorScheme='blue'>VIEW CODE</Button>
                </Grid>

            </Grid>
        </Grid> 
    )
}