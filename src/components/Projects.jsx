import { Flex, Grid, Text} from "@chakra-ui/react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const ProjectDetails = [
    {
        title : "Timecamp.com" , 
        src:"../Resources/Projects/monsterIndia.png", 
        desc:"Timecamp.com is a tool for time tracking your current or upcoming projects/tasks.", 
        tech : ["HTML", "CSS", "JavaScript", "React", "Mongo DB", "Mongoose", "Express JS", "Node JS"],
        features : ["Built backend API using Mongo DB", "Login/Signup for users"]
    },
    {
        title : "MonsterIndia.com" , 
        src:"../Resources/Projects/monsterIndia.png", 
        desc:"Monster India is an online employment solution for people seeking jobs.", 
        tech : ["HTML", "CSS", "JavaScript", "React", "API"],
        features : ["End to end User flow Different sorting & filtering features", "Login &Signup for users"]
    },
    {
        title : "BeautyBebo.com" , 
        src:"../Resources/Projects/monsterIndia.png", 
        desc:"Beauty Bebo is India’s fastest-growing online retail store for beauty products.", 
        tech : ["HTML", "CSS", "JavaScript", "API"],
        features : ["Search, Sorting & Filtering functionalities", "Login &Signup for users"]
    },
    {
        title : "NDTV.com" , 
        src:"../Resources/Projects/monsterIndia.png", 
        desc:"New Delhi Television Ltd is an Indian news media company focusing on broadcast and digital news publication.", 
        tech : ["HTML", "CSS", "JavaScript", "API"],
        features : ["Search, Sorting & Filtering functionalities"]
    },
    {
        title : "Medium.com",
        desc:"Interactive blog website for users to comment blog and write thier own blog as well.",
        tech :['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node Js', 'Express JS', 'JWT', 'MongoDB'],
        features : ['User Login & Signup functionality', 'Ineract with blogs or create your own']
    },
    {
        title: "Weather App",
        desc : "An App to get weather for your hometown or search for place you may plan to travel.",
        tech :[ 'HTML', 'CSS', 'JavaScript', 'API']
    }
]

export default function Projects () {
    return (
        <Grid id="projects-section" w={{sm:"80%",base:"80%", md:"90%", lg:"100%"}} margin="auto" >
            <Heading title="PROJECTS" />


            <Grid id="projects" templateColumns={{base:"1fr", sm: "1fr",md:"repeat(2,1fr)",lg:"repeat(4,1fr)" }} gap="50px" pos="relative" py={{base:5, md:20}} >
                    
                <Grid pos={"relative"}>
                    <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"-10"}} >01</Text>
                    <img src={require("../Resources/Projects/blog.png")} alt="" />
                    <ProjectCard key={3} details={ProjectDetails[4]} />
                    <Grid templateColumns="1fr 1fr" m="10px" gap="10px" className="projectbuttons">
                        <a href="https://github.com/lokesh-dc/Blog-App" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode" >CODE</button>
                        </a>
                        <a href="https://idyllic-concha-85c2f8.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live">LIVE</button>
                        </a>
                    </Grid>
                </Grid>

                <Grid pos={"relative"}>
                    <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"-10"}} >02</Text>
                        <img src={require("../Resources/Projects/timecamp.png")} alt=""/>
                        <ProjectCard key={0} details={ProjectDetails[0]} />
                        <Grid templateColumns="repeat(2,1fr)" m="10px" gap="10px" className="projectbuttons" >
                            <a href="https://github.com/lokesh-dc/TimeCampClone" target="_blank" rel="noopener noreferrer">
                                <button variant="outline" className="gitCode">CODE</button>
                            </a>
                            <a href="https://roaring-travesseiro-7b0d65.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <button className="live" >LIVE</button>
                            </a>
                        </Grid>
                    </Grid>
                
                    <Grid pos={"relative"}>
                    <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"-10"}} >03</Text>
                    <img src={require("../Resources/Projects/monsterIndia.png")} alt=""/>
                    <ProjectCard key={1} details={ProjectDetails[1]} />
                    <Grid templateColumns="repeat(2,1fr)" m="10px" gap="10px" className="projectbuttons" >
                        <a href="https://github.com/lokesh-dc/boss-development-1619" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode">CODE</button>
                        </a>
                        <a href="https://joyful-elf-e0863a.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live" >LIVE</button>
                        </a>
                    </Grid>
                </Grid>

                <Grid pos={"relative"}>
                    <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"-10"}} >04</Text>
                    <img src={require("../Resources/Projects/beautyBebo.png")} alt="" />
                    <ProjectCard key={2} details={ProjectDetails[2]} />
                    <Grid templateColumns="1fr 1fr" m="10px" gap="10px" className="projectbuttons">
                        <a href="https://github.com/lokesh-dc/frightening-sidewalk-3271" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode" >CODE</button>
                        </a>
                        <a href="https://bright-puppy-c195ee.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live">LIVE</button>
                        </a>
                    </Grid>
                </Grid>

                <Grid pos={"relative"}>
                    <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"-10"}}>05</Text>
                    <img src={require("../Resources/Projects/ndtv.png")} alt="" />
                    <ProjectCard key={3} details={ProjectDetails[3]} />
                    <Grid templateColumns="1fr 1fr" m="10px" gap="10px" className="projectbuttons">
                        <a href="https://github.com/lokesh-dc/Ndtv-clone" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode" >CODE</button>
                        </a>
                        <a href="https://loquacious-paletas-d45019.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live">LIVE</button>
                        </a>
                    </Grid>
                </Grid>

                <Grid pos={"relative"}>
                    <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"-10"}} >06</Text>
                    <img src={require("../Resources/Projects/weather.png")} alt="" />
                    <ProjectCard key={3} details={ProjectDetails[5]} />
                    <Grid templateColumns="1fr 1fr" m="10px" gap="10px" className="projectbuttons">
                        <a href="https://github.com/lokesh-dc/Weather-App" target="_blank" rel="noopener noreferrer">
                            <button variant="outline" className="gitCode" >CODE</button>
                        </a>
                        <a href="https://hilarious-alpaca-f7c2a1.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="live">LIVE</button>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}