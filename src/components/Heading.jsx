import { Box, Text } from "@chakra-ui/react";

export default function Heading({ title }) {
	return (
		<Box
			className="heading"
			my={{ base: "5", sm: "5", md: "10px", lg: "10px" }}
			lineHeight={1.2}
		>
			<Text
				fontSize={{ base: "2rem", sm: "2rem", md: "3rem", lg: "3rem" }}
				w="fit-content"
				borderBottom="5px solid rgba(255, 0, 0, 0.37)"
			>
				{title}
			</Text>
			<Text
				fontSize={{ base: "1.5rem", sm: "1.5rem", md: "2.5rem", lg: "2.5rem" }}
			>
				{title}
			</Text>
		</Box>
	);
}
