import { Box, Grid, Img, Text } from "@chakra-ui/react";
import Heading from "./Heading";

import htmlIcon from "../Resources/icons/Tech/BW/htmlbw.png";
import cssIcon from "../Resources/icons/Tech/BW/cssbw.png";
import jsIcon from "../Resources/icons/Tech/BW/jsbw.png";
import reactIcon from "../Resources/icons/Tech/BW/reactbw.png";
import reduxIcon from "../Resources/icons/Tech/BW/redux.png";
import chakraIcon from "../Resources/icons/Tech/BW/chakrabw.png";
import mongoIcon from "../Resources/icons/Tech/BW/mongobw.png";
import nodeIcon from "../Resources/icons/Tech/BW/nodejs'.png";
import expressIcon from "../Resources/icons/Tech/BW/express.png";
import gitIcon from "../Resources/icons/Tech/BW/git.png";

export default function Skills() {
	const skills = [
		{
			label: "HTML5",
			icon: htmlIcon,
		},
		{
			label: "CSS3",
			icon: cssIcon,
		},
		{
			label: "JavaScript",
			icon: jsIcon,
		},
		{
			label: "React",
			icon: reactIcon,
		},
		{
			label: "React Redux",
			icon: reduxIcon,
		},
		{
			label: "Chakra UI",
			icon: chakraIcon,
		},
		{
			label: "Mongo DB",
			icon: mongoIcon,
		},
		{
			label: "Node JS",
			icon: nodeIcon,
		},
		{
			label: "Express JS",
			icon: expressIcon,
		},
		{
			label: "GitHub",
			icon: gitIcon,
		},
	];

	return (
		<Grid
			id="tech-section"
			w={{ sm: "90%", base: "80%", md: "90%", lg: "100%" }}
			margin="auto"
		>
			<Heading title="TECHNICAL SKILLS" />
			<Grid
				templateColumns={{
					base: "repeat(2,1fr)",
					sm: "repeat(2,1fr)",
					md: "repeat(3,1fr)",
					lg: "repeat(5,1fr)",
				}}
				mt={"20px"}
				gap={{ base: "10px", md: "30px" }}
				justifyContent="space-around"
				id="techStack"
			>
				{skills?.map((tech, id) => (
					<Box key={id}>
						<Img src={tech?.icon} alt="" />
						<Text>{tech?.label}</Text>
					</Box>
				))}
			</Grid>
		</Grid>
	);
}
