import { Grid } from "@chakra-ui/react";

export default function Stats() {

    return(
        <Grid templateColumns={{base:"1fr", sm:"1fr", md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}} >
            <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer">
                <img src="https://github-readme-stats.vercel.app/api?username=lokesh-dc&theme=light&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub stats"/>
            </a>
            <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer">
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=lokesh-dc&theme=light&hide_border=false" alt="streak" />
            </a>
            <a href="https://github.com/lokesh-dc" target="_blank" rel="noreferrer"> 
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lokesh-dc&theme=light&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="languages"/>
            </a>
        </Grid>
    )
}