import { Flex, Grid } from "@chakra-ui/react";

import Heading from "../Heading";

import { data } from "../../constants/work";
import ProjectCard from "../Cards/Projects";

export default function ProjectsContainer() {
	return (
		<Flex
			id="projects-section"
			flexDirection={"column"}
			// maxWidth={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
			margin="auto"
		>
			<Heading title="MY WORK" />
			<Flex
				flexDirection={"column"}
				gap={10}
				maxWidth={"100%"}
				overflowX={"scroll"}
			>
				{data?.map((cardProps, cardId) => (
					<ProjectCard key={cardId} {...cardProps} />
				))}
			</Flex>
		</Flex>
	);
}
