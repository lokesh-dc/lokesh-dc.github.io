import { Flex, Grid, Img, Text } from "@chakra-ui/react";
import Heading from "./Heading";

// FrontEnd Icons
import htmlIcon from "../Resources/icons/Tech/BW/htmlbw.png";
import cssIcon from "../Resources/icons/Tech/BW/cssbw.png";
import jsIcon from "../Resources/icons/Tech/BW/jsbw.png";
import reactIcon from "../Resources/icons/Tech/BW/reactbw.png";
import chakraIcon from "../Resources/icons/Tech/BW/chakrabw.png";
import reduxIcon from "../Resources/icons/Tech/BW/redux.png";

// BackEnd Icons
import nodeIcon from "../Resources/icons/Tech/BW/nodejs'.png";
import expressIcon from "../Resources/icons/Tech/BW/express.png";
import mongoDBIcon from "../Resources/icons/Tech/BW/mongobw.png";
import gitIcon from "../Resources/icons/Tech/BW/git.png";
import postmanIcon from "../Resources/icons/Tech/BW/postman.png";

// dsa icons
import problemSolvingIcons from "../Resources/icons/cs/problem.png";

// communication skills
import collaborationIcons from "../Resources/icons/cs/collab.png";
import activeListeningIcons from "../Resources/icons/cs/active.png";

const skillsStack = [
	{
		heading: "Frontend Development",
		stack: [
			{
				heading: "HTML5",
				icon: htmlIcon,
			},
			{
				heading: "CSS3",
				icon: cssIcon,
			},
			{
				heading: "JavaScript",
				icon: jsIcon,
			},
			{
				heading: "ReactJS",
				icon: reactIcon,
			},
			{
				heading: "Redux",
				icon: reduxIcon,
			},
			{
				heading: "Chakra UI",
				icon: chakraIcon,
			},
		],
	},
	{
		heading: "Backend Development",
		stack: [
			{
				heading: "NodeJs",
				icon: nodeIcon,
			},
			{
				heading: "ExpressJS",
				icon: expressIcon,
			},
			{
				heading: "MongoDB",
				icon: mongoDBIcon,
			},
			{
				heading: "GitHub",
				icon: gitIcon,
			},
			{
				heading: "Postman",
				icon: postmanIcon,
			},
		],
	},
	{
		heading: "Data Structures & Algorithm",
		stack: [
			{
				heading: "Problem Solving",
				icon: problemSolvingIcons,
			},
		],
	},
	{
		heading: "Communication Skills",
		stack: [
			{
				heading: "Collaboration",
				icon: collaborationIcons,
			},
			{
				heading: "Active Listening",
				icon: activeListeningIcons,
			},
		],
	},
];

export default function TechStack() {
	return (
		<Grid
			id="skills-section"
			w={{ sm: "90%", base: "80%", md: "90%", lg: "100%" }}
			margin="auto"
		>
			<Heading title="SKILLS" />
			<Grid
				id="skills"
				templateColumns={{
					base: "1fr",
					sm: "1fr",
					md: "repeat(2,1fr)",
					lg: "repeat(4,1fr)",
				}}
				gap="10px"
				textAlign="left"
			>
				{skillsStack?.map((item, index) => (
					<Grid key={index} gap={{ base: 2, md: 4 }}>
						<Text className="subHead">{item?.heading}</Text>
						{item?.stack?.map((skillItem, index) => (
							<Flex key={index}>
								<Img src={skillItem?.icon} alt="" />
								<Text>{skillItem?.heading}</Text>
							</Flex>
						))}
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}
