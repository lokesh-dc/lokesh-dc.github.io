import { Grid} from "@chakra-ui/react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const ProjectDetails = [
    {title : "MonsterIndia.com" , 
    src:"../Resources/Projects/monsterIndia.png", 
    desc:"Monster India is an online employment solution for people seeking jobs.", 
    tech : ["HTML", "CSS", "JavaScript", "React", "API"],
    features : ["End to end User flow Different sorting & filtering features", "Login &Signup for users"]
    },
    {title : "BeautyBebo.com" , 
    src:"../Resources/Projects/monsterIndia.png", 
    desc:"Beauty Bebo is India’s fastest-growing online retail store for beauty products.", 
    tech : ["HTML", "CSS", "JavaScript", "API"],
    features : ["Search, Sorting & Filtering functionalities", "Login &Signup for users"]
    },
    {title : "NDTV.com" , 
    src:"../Resources/Projects/monsterIndia.png", 
    desc:"New Delhi Television Ltd is an Indian news media company focusing on broadcast and digital news publication.", 
    tech : ["HTML", "CSS", "JavaScript", "API"],
    features : ["Search, Sorting & Filtering functionalities"]
    },
]

export default function Projects () {
    return (
        <Grid id="projects-section" 
            w={{sm:"80%",base:"80%", md:"90%", lg:"100%"}} margin="auto"
        >
            <Heading title="PROJECTS" />

            <Grid id="projects" templateColumns={{base:"1fr", sm: "1fr",md:"repeat(2,1fr)",lg:"repeat(3,1fr)" }} gap="50px" pos="relative" 
            // w={{base:"70%", sm:"70%",md:"100%"}} ml={{base:"3%", sm:"3%", md:0, lg:0}}
            >
                <Grid templateColumns={{base:"1fr",sm:"1fr",md:"1fr", lg:"1fr" }}>
                    <img src={require("../Resources/Projects/monsterIndia.png")} alt=""/>
                    <ProjectCard key={0} details={ProjectDetails[0]} />
                    <Grid templateColumns="repeat(2,1fr)" m="10px" gap="10px" className="projectbuttons" >
                        <a href="https://github.com/lokesh-dc/boss-development-1619/tree/master/monster_india_clone" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode">VIEW CODE</button>
                        </a>
                        <a href="https://joyful-elf-e0863a.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live" >LIVE</button>
                        </a>
                    </Grid>


                </Grid>

                <Grid templateColumns={{base:"1fr",sm:"1fr",md:"1fr", lg:"1fr" }}>
                    <img src={require("../Resources/Projects/beautyBebo.png")} alt="" />
                    <ProjectCard key={1} details={ProjectDetails[1]} />
                    <Grid templateColumns="1fr 1fr" m="10px" gap="10px" className="projectbuttons">
                        <a href="https://github.com/lokesh-dc/frightening-sidewalk-3271" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode" >VIEW CODE</button>
                        </a>
                        <a href="https://lovely-melba-cbde6f.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live">LIVE</button>
                        </a>
                    </Grid>
                </Grid>

                <Grid templateColumns={{base:"1fr",sm:"1fr",md:"1fr", lg:"1fr" }}>
                    <img src={require("../Resources/Projects/ndtv.png")} alt="" />
                    <ProjectCard key={2} details={ProjectDetails[2]} />
                    <Grid templateColumns="1fr 1fr" m="10px" gap="10px" className="projectbuttons">
                        <a href="https://github.com/lokesh-dc/Ndtv-clone" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode" >VIEW CODE</button>
                        </a>
                        <a href="https://loquacious-paletas-d45019.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live">LIVE</button>
                        </a>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}