import {Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import StatisticsCard from "./StatisticsCard";


let statisticsDetails = [
    {hrs:1200, title: "Hours of Full Stack Coding"},
    {hrs:323, title: "Git Commits"},
    {hrs:100, title: "Hours of Soft Skill Sessions"},
    {hrs:4, title: "Full Stack projects done"},
]

export default function Statistics () {
    return (
        <Grid p="10px">
            <Heading title="Statistics"/>
            <Grid templateColumns={{base:"", sm:"repeat(2,1fr)", md:"repeat(4,1fr)", lg:"repeat(4,1fr)"}} id="statistics" gap="40px" className="bgtext"   py="50px"
                pos="relative"
            >
                {
                    statisticsDetails.map((i, index)=>(
                        <StatisticsCard key={index} details={i}/>
                    ))
                }
                <Text pos="absolute" top={0} left={{sm:"10%",md:"12%",lg:"20%"}} id="background-text" letterSpacing="10px" fontSize={{base: "0rem", sm:"0rem", md:"8rem", lg:"10rem" }}> STATISTICS</Text>
            </Grid>
        </Grid>
    )
}