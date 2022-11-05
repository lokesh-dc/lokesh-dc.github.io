import { Flex, Grid, Text } from "@chakra-ui/react";

export default function Stats() {

    return(< Flex flexDirection="column" justifyContent="center" alignItems="center" gap={10} >
        <Grid  
        templateColumns={{base:"1fr", sm:"1fr", md:"repeat(2,1fr)", lg:"repeat(2,1fr)"}} 
        gap={5}
        justifyContent="center"
        >
            <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer">
                <img src="https://github-readme-stats.vercel.app/api?username=lokesh-dc&theme=light&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub stats"/>
            </a>
            <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer">
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=lokesh-dc&theme=light&hide_border=false" alt="streak" />
            </a>
            {/* <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer"> 
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lokesh-dc&theme=light&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="languages"/>
            </a> */}
        </Grid>
        
        <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer" >
                <img alt="lokesh-dc's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=lokesh-dc&bg_color=0D1117&color=5BCDEC&line=5BCDEC&point=FFFFFF&hide_border=true" />
        </a>
        </ Flex>
    )
}