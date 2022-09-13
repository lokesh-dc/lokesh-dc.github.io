import {  Flex, Grid,Img,Text } from "@chakra-ui/react";
import Heading from "./Heading";

export default function TechStack() {
    return(
        <Grid id="skills-section" >
        <Heading  title="SKILLS" />
        <Grid p="20px"  id="skills" templateColumns={{base:"1fr",sm:"repeat(2,1fr)", md:"repeat(2,1fr)", lg:"repeat(4,1fr)"}} gap="30px" textAlign="left" >
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
                    <Img src={require("../Resources/icons/Tech/BW/chakrabw.png")} alt="" />
                    <Text>Chakra UI</Text>
                </Flex>
            </Grid>
            <Grid gap={10}>
            <Text className="subHead">Communication Skills</Text>
                <Flex >
                    <Img src={require("../Resources/icons/cs/writting.png")} alt="" />
                    <Text>Writting</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/cs/collab.png")} alt="" />
                    <Text>Collaboration</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/cs/active.png")} alt="" />
                    <Text>Active Listening</Text>
                </Flex>
                <Flex>
                    <Img src={require("../Resources/icons/cs/empathy.png")} alt="" />
                    <Text>Empathy</Text>
                </Flex>
            </Grid>
            <Grid gap={10}>
            <Text className="subHead">Data Structures & Algorithm</Text>
                <Flex >
                    <Img src={require("../Resources/icons/Tech/BW/htmlbw.png")} alt="" />
                    <Text>Problem Solving</Text>
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
            </Grid>
        </Grid>
        </Grid>
    )
}