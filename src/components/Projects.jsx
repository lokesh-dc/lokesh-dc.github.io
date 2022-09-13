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
        <Grid id="projects-section" p="20px" >
            <Heading title="PROJECTS" />
            <Grid id="projects" templateColumns={{base:"1fr", sm: "1fr",md:"repeat(2,1fr)",lg:"repeat(3,1fr)" }} gap="100px">  
                {
                    ProjectDetails.map((p, index)=>(
                        <ProjectCard key={index} details={p} src={p.src} />
                    ))
                }
            </Grid>
        </Grid>
    )
}