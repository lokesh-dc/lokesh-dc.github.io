import { Box, Grid, Img, Text } from "@chakra-ui/react";
import Heading from "./Heading";
export default function Skills () {
    return (
        <Grid id="tech-section">
        <Heading title="TECHNICAL SKILLS"/>
        <Grid mt="50px">
            <Grid templateColumns={{base:"repeat(1,1fr)", sm:"repeat(1,1fr)", md:"repeat(3,1fr)", lg:"repeat(5,1fr)"}}  justifyContent="space-around" id="techStack">
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