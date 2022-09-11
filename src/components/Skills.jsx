import { Grid, Img, Text } from "@chakra-ui/react";

export default function Skills () {
    return (
        <Grid mt="200px">
        <Text className="heading"> SKILLS</Text>
            <Grid templateColumns="repeat(4,1fr)" gap={10} px={20} justifyContent="center">
                <Img src={require("../Resources/icons/Tech/html.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/css'.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/recat.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/github.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/html.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/html.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/html.png")} alt="" />
                <Img src={require("../Resources/icons/Tech/html.png")} alt="" />
            </Grid>
        </Grid>
    )
}