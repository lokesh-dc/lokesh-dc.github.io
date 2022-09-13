import { Grid, Text, Flex, Box, List, ListItem, ListIcon} from "@chakra-ui/react";
import {  MdCheckCircle } from 'react-icons/md'

export default function ProjectCard({details, src}) {
    console.log(src)
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
            </Grid>
        </Grid> 
    )
}