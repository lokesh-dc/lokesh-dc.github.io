import { Grid, Text, Flex, Box } from "@chakra-ui/react";

export default function ProjectCard({ details }) {
	return (
		<Grid
			gap="2px"
			pos="relative"
			// style={{ display: "flex", alignItems: "start" }}
		>
			<Text fontSize="1rem" fontWeight="bold">
				{details.title}
			</Text>
			<Text fontSize="0.8rem">{details.desc}</Text>
			<Text fontSize="0.8rem">TECH STACK: </Text>
			<Flex className="tech">
				{details.tech.map((t, index) => (
					<Box key={index}>{t} </Box>
				))}
			</Flex>
		</Grid>
	);
}
