import { Grid} from "@chakra-ui/react";

export default function SocialMediaIcons() {
    return (
        <Grid templateColumns="repeat(4,1fr)" justifyContent="center" px={10}>
            <img src={require("../Resources/icons/github.png")} alt="gitHub" />
            <img src={require("../Resources/icons/linked.png")} alt="Linked-in" />
            <img src={require("../Resources/icons/github.png")} alt="gitHub" />
            <img src={require("../Resources/icons/linked.png")} alt="Linked-in" />
        </Grid>
    )
}

