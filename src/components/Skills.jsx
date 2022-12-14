import {  Flex, Grid,Img,Text } from "@chakra-ui/react";
import Heading from "./Heading";

export default function TechStack() {
    return(
        <Grid id="skills-section"
        w={{sm:"90%",base:"80%", md:"90%", lg:"100%"}} margin="auto"
        >
        <Heading  title="SKILLS" />
        <Grid   id="skills" templateColumns={{base:"1fr",sm:"1fr", md:"repeat(2,1fr)", lg:"repeat(4,1fr)"}}  gap="10px" textAlign="left" >
            <Grid gap={10} >
                <Text className="subHead">Frontend Development</Text>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/htmlbw.png")} alt="" />
                    <Text>HTML</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/cssbw.png")} alt="" />
                    <Text>CSS3</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/jsbw.png")} alt="" />
                    <Text>JavaScript</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/reactbw.png")} alt="" />
                    <Text>React</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/redux.png")} alt="" />
                    <Text>Redux</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/chakrabw.png")} alt="" />
                    <Text>Chakra UI</Text>
                </Flex>
            </Grid>
            <Grid gap={10}>
            <Text className="subHead">Backend Development</Text>
                <Flex >
                    <Img src={require("../Resources/icons/Tech/BW/express.png")} alt="" />
                    <Text>Express</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/mongobw.png")} alt="" />
                    <Text>Mongo DB</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/git.png")} alt="" />
                    <Text>GitHub</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/Tech/BW/postman.png")} alt="" />
                    <Text>POSTMAN</Text>
                </Flex>
            </Grid>
            <Grid gap={10}>
            <Text className="subHead">Data Structures & Algorithm</Text>
                <Flex >
                    <Img src={require("../Resources/icons/cs/problem.png")} alt="" />
                    <Text>Problem Solving</Text>
                </Flex>

            </Grid>
            <Grid gap={10}>
            <Text className="subHead">Communication Skills</Text>
                <Flex>
                    <Img src={require("../Resources/icons/cs/collab.png")} alt="" />
                    <Text>Collaboration</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/cs/active.png")} alt="" />
                    <Text>Active Listening</Text>
                </Flex>
            </Grid>
        </Grid>
        </Grid>
    )
}