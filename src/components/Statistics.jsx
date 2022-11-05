import {Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import StatisticsCard from "./StatisticsCard";
import Stats from "./Stats";


let statisticsDetails = [
    {hrs:1200, title: "Hours of Full Stack Coding"},
    {hrs:323, title: "Git Commits"},
    {hrs:100, title: "Hours of Soft Skill Sessions"},
    {hrs:4, title: "Full Stack projects done"},
]

export default function Statistics () {
    return (
        <Grid p="10px"
            w={{sm:"80%",base:"80%", md:"90%", lg:"100%"}} margin="auto"
        >
            <Heading title="Statistics"/>
            <Stats/>
{/* 
            <Grid templateColumns={{base:"", sm:"repeat(2,1fr)", md:"repeat(4,1fr)", lg:"repeat(4,1fr)"}} id="statistics" gap="10px" className="bgtext"   py="10px"
                pos="relative" 
            >
                {
                    statisticsDetails.map((i, index)=>(
                        <StatisticsCard key={index} details={i}/>
                    ))
                }
                <Text pos="absolute" top={0} left={{sm:"10%",md:"12%",lg:"20%"}} id="background-text" letterSpacing="10px" fontSize={{base: "0rem", sm:"0rem", md:"4rem", lg:"6rem" }}> STATISTICS</Text>
            </Grid> */}
        </Grid>
    )
}