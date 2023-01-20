import { Box, Grid, Img, Text } from "@chakra-ui/react";
import Heading from "./Heading";
export default function Skills () {
    return (
        <Grid id="tech-section"
            w={{sm:"90%",base:"80%", md:"90%", lg:"100%"}} margin="auto"
        >
        <Heading title="TECHNICAL SKILLS"/>
        <Grid>
            <Grid templateColumns={{base:"repeat(1,1fr)", sm:"repeat(2,1fr)", md:"repeat(3,1fr)", lg:"repeat(5,1fr)"}} mt={"20px"}                                                                                                                                                                                                                                                                                                                                                                                                     
                gap="30px" justifyContent="space-around" id="techStack">
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/htmlbw.png")} alt="" />
                    <Text>HTML5</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/cssbw.png")} alt="" />
                    <Text>CSS3</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/jsbw.png")} alt="" />
                    <Text>JavaScript</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/reactbw.png")} alt="" />
                    <Text>React</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/redux.png")} alt="" />
                    <Text>React Redux</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/chakrabw.png")} alt="" />
                    <Text>Chakra UI</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/mongobw.png")} alt="" />
                    <Text>Mongo DB</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/nodejs'.png")} alt="" />
                    <Text>Node JS</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/express.png")} alt="" />
                    <Text>Express JS</Text>
                </Box>
                <Box>
                    <Img src={require("../Resources/icons/Tech/BW/git.png")} alt="" />
                    <Text>GitHub</Text>
                </Box>
            </Grid>
        </Grid>
        </Grid>
    )
}