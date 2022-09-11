import { Grid, Img, Text } from "@chakra-ui/react";

export default function SocialMediaIcons() {
    return (
        <Grid templateColumns="repeat(4,1fr)" px={10}>
            <img src={require("../Resources/icons/github.png")} alt="" />
            <img src={require("../Resources/icons/linked.png")} alt="" />
            <img src={require("../Resources/icons/github.png")} alt="" />
            <img src={require("../Resources/icons/linked.png")} alt="" />
        </Grid>
    )
}

